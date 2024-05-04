import os
from fastapi import UploadFile
import imageio
import io
import joblib
from skimage.transform import resize
import numpy as np


async def normalize_image(image: UploadFile):
    contents = await image.read()

    img = imageio.imread(io.BytesIO(contents))

    img = resize(img, (15, 15))
    img = img.flatten()
    img = np.pad(img, (0, 900 - len(img)), mode="constant")
    img = np.expand_dims(img, axis=0)
    return img


async def predict_tumor_by_img(img: UploadFile) -> str:
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Construct the path to the model file
    model_path = os.path.join(script_dir, "../../resource/model.pkl")

    model_prediction = joblib.load(model_path)

    mri = await normalize_image(img)
    prediction = model_prediction.predict(mri)

    print(prediction)

    if prediction == 1:
        return "Resultado del MRI: El modelo predictivo NO observa la probabilidad de que haya un tumor."
    else:
        return "Resultado del MRI: El modelo predictivo observa la probabilidad de que haya un tumor."
