import io
from fastapi import APIRouter, Depends, UploadFile

from controllers.v1.history_clinic import extract_text_from_pdf
from controllers.v1.MRI_image import predict_tumor_by_img
from controllers.v1.validate_files import processing_file_type_based

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


contents = decode_base64_string(contents_b64)
generation_config = decode_base64_string(generation_config_b64)
safety_settings = decode_base64_string(safety_settings_b64)

model_instance = GenerativeModel(
    model_name=model_LLM, key="AIzaSyDmn7kKXdLbw0tJIDqUcNMbSBSFU_hd0GE"
)


@router.post(
    "/files",
    status_code=200,
    dependencies=[
        Depends(processing_file_type_based),
    ],
    response_model=dict[str, str],
)
async def predict_tumor(
    files: list[UploadFile],
):
    img = None
    pdf = None

    for file in files:
        if file.filename.split(".")[0] == "brain_mri":
            img = file
        elif file.filename.split(".")[0] == "clinical_history":
            pdf = file

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
