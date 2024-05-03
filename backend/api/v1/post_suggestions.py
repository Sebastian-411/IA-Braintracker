from typing import Annotated, List, Union
from fastapi import APIRouter, HTTPException, UploadFile, File
import imageio


from schemas.ClassificationModelOut import ClassificationModelOut
from schemas.MRIFileUploaded import MRIFileUploaded
from schemas.ClinicHistoryFileUploaded import ClinicHistoryFileUploaded

from schemas.SuggestionLLMOut import SuggestionLLMOut

import numpy as np
from dotenv import load_dotenv

import io

# from skimage.io import imread
from skimage.transform import resize
from model import GenerativeModel

from utils.utilities import (
    predict_tumor_by_img,
    decode_base64_string,
    extract_text_from_pdf,
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
    response_model=Union[ClassificationModelOut, SuggestionLLMOut],
    status_code=200,
)  # To know: Response model is a list of two strings: the output of both ClassificationModelOut and SuggestionLLMOut
async def predict_tumor(
    mri_image: Annotated[MRIFileUploaded, File()],
    clinic_history: Annotated[ClinicHistoryFileUploaded, File()],
):
    # contents = await imageio.read()

    contents = await mri_image.read()

    img = imageio.imread(io.BytesIO(contents))

    img = resize(img, (15, 15))
    img = img.flatten()
    img = np.pad(img, (0, 900 - len(img)), mode="constant")
    img = np.expand_dims(img, axis=0)

    prediction = predict_tumor_by_img(img)

    return {"prediction": prediction}


# @router.post("/")
# async def concatenate_pdf_text(pdf_file: UploadFile = File(...), text: str = ""):
#     try:
#         if not pdf_file.filename.endswith(".pdf"):
#             raise HTTPException(
#                 status_code=400, detail="The format file is not supported."
#             )

#         pdf_content = await pdf_file.read()

#         pdf_text = extract_text_from_pdf(io.BytesIO(pdf_content))

#         prompt = "RESPONDE EN ESPAÑOL" + text + "\nHISTORIA CLINICA:\n" + pdf_text

#         result = model_instance.generate_content(
#             prompt, generation_config, safety_settings
#         )

#         return {"response": result}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
