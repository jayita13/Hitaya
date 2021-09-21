import uvicorn
from fastapi import FastAPI, File, UploadFile

import easyocr as ocr  #OCR
from PIL import Image #Image Processing
import numpy as np #Image Processing
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware

import pickle
from health import health

app = FastAPI()


pickle_in = open("Models/classifier.pkl", "rb")
classifier = pickle.load(pickle_in)


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def index():
    return {'message': 'Hello, This is an API for OCR'}

def read_imagefile(file) -> Image.Image:
    image = Image.open(BytesIO(file))
    return image



@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not extension:
        return "Image must be jpg or png format!"

    image = read_imagefile(await file.read())
    image = np.asarray(image)

    reader = ocr.Reader(['en'], model_storage_directory='.')
    result = reader.readtext(image)

    result_text = []  # empty list for results

    for text in result:
        result_text.append(text[1])

    return result_text

@app.post('/health')
async def health(data: health):

    data = data.dict()

    Status = data["Status"]
    Alcohol = data["Alcohol"]
    BMI = data["BMI"]

    prediction = classifier.predict([[Status, Alcohol, BMI]])

    return prediction[0]



if __name__ == "__main__":
    uvicorn.run(app, debug=True)
