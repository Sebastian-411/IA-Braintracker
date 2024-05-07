import io
import os
from fastapi import APIRouter, Depends, UploadFile

from controllers.v1.history_clinic import extract_text_from_pdf
from controllers.v1.MRI_image import predict_tumor_by_img
from controllers.v1.validate_files import (
    check_files,
    type_based_checking,
)


from dotenv import load_dotenv
from model import GenerativeModel

from utils.utilities import (
    decode_base64_string,
)

from utils.LLM_config import (
    model_LLM,
    contents_b64,
    generation_config_b64,
    safety_settings_b64,
)


router = APIRouter(prefix="/v1")

load_dotenv()
GEMINI_API_KEY = os.getenv("API_KEY")

contents = decode_base64_string(contents_b64)
generation_config = decode_base64_string(generation_config_b64)
safety_settings = decode_base64_string(safety_settings_b64)

model_instance = GenerativeModel(model_name=model_LLM, key=GEMINI_API_KEY)


@router.post(
    "/uploadfiles",
    status_code=200,
    response_model=dict[str, str],
    dependencies=[Depends(check_files)],
)
async def predict_tumor(
    files: list[UploadFile],
):
    # Check the type of the files pydantic model based
    dict_files = {
        file.filename.split(".")[1]: type_based_checking(file) for file in files
    }

    # Get the image and the pdf
    img = dict_files.get("jpeg") or dict_files.get("png") or dict_files.get("jpg")
    pdf = dict_files.get("pdf")

    # Call the function to predict the tumor
    classification = await predict_tumor_by_img(img=img)

    # Call the function to extract the text from the PDF
    pdf_content = await pdf.read()
    pdf_text = extract_text_from_pdf(io.BytesIO(pdf_content))

    prompt = "RESPONDE EN ESPAÑOL" + classification + "\nHISTORIA CLINICA:\n" + pdf_text

    # Call the function to generate the health recommendation from the LLM
    results = model_instance.generate_content(
        prompt, generation_config, safety_settings
    )

    return {
        "classification": classification,
        "analysis_results": results,
    }
