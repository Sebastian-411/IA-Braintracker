from fastapi import HTTPException
import base64
import json
import joblib
from PyPDF2 import PdfReader




def decode_base64_string(encoded_string):
    try:
        decoded_bytes = base64.b64decode(encoded_string)
        decoded_string = decoded_bytes.decode("utf-8")
        return json.loads(decoded_string)
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid base64 string")



def predict_tumor_by_img(img):
    model_prediction = joblib.load('resource/model.pkl')

    prediction = model_prediction.predict(img)
    
    print(prediction)
    
    if prediction == 1:
        return "Resultado del MRI: El modelo predictivo NO observa la probabilidad de que haya un tumor."
    else:
        return "Resultado del MRI: El modelo predictivo observa la probabilidad de que haya un tumor."


def extract_text_from_pdf(pdf_file):
    pdf_reader = PdfReader(pdf_file)
    text = ""
    for page_num in range(len(pdf_reader.pages)):
        text += pdf_reader.pages[page_num].extract_text()
    return text



def read_key(path):
    try:
        with open(path, 'r') as file:
            key = file.read().strip()
            return key
    except FileNotFoundError:
        print("Not found.")
        return None