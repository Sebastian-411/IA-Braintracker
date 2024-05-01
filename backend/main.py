from fastapi import FastAPI, HTTPException, UploadFile, File
import google.generativeai as genai
import base64
import json
import joblib
import numpy as np
from PyPDF2 import PdfReader
from dotenv import load_dotenv
import os

import io
from PIL import Image

from skimage.io import imread
from skimage.transform import resize
from model import GenerativeModel

from utilities import *


load_dotenv()

app = FastAPI()


model_LLM = 'gemini-1.5-pro-latest'
contents_b64 = read_key("./key/content_token.pkl")
generation_config_b64 = read_key("./key/generation_token.pkl")
safety_settings_b64 = read_key("./key/settings_token.pkl")

contents = decode_base64_string(contents_b64)
generation_config = decode_base64_string(generation_config_b64)
safety_settings = decode_base64_string(safety_settings_b64)

model_instance = GenerativeModel(model_name=model_LLM, key=os.getenv('API_KEY'))







@app.post("/predict_tumor/")
async def predict_tumor(image: UploadFile = File(...)):
    contents = await image.read()
    
    img = imread(io.BytesIO(contents))
    
    img = resize(img, (15, 15))
    img = img.flatten()
    img = np.pad(img, (0, 900 - len(img)), mode='constant')
    img = np.expand_dims(img, axis=0)
    
    prediction = predict_tumor_by_img(img) 
        
    return {"prediction": prediction}
    



@app.post("/")
async def concatenate_pdf_text(pdf_file: UploadFile = File(...), text: str = ""):
    try:

        if not pdf_file.filename.endswith(".pdf"):
            raise HTTPException(status_code=400, detail="The format file is not supported.")

        pdf_content = await pdf_file.read()

        pdf_text = extract_text_from_pdf(io.BytesIO(pdf_content))

        prompt = "RESPONDE EN ESPAÑOL" + text + "\nHISTORIA CLINICA:\n" + pdf_text

        result = model_instance.generate_content(prompt, generation_config, safety_settings)

        return {"response": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


