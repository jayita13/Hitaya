import uvicorn
from fastapi import FastAPI, File, UploadFile
import easyocr as ocr  #OCR
from PIL import Image #Image Processing
import numpy as np #Image Processing
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware


from flask import Flask, render_template, request, jsonify,redirect

import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.models import model_from_json
from tensorflow.keras.preprocessing.image import img_to_array

import pickle
from health import health
from heart import heart

app = FastAPI()


pickle_in = open("Models/classifier.pkl", "rb")
classifier = pickle.load(pickle_in)


pickle_heart = open("Models/heart_rate.pkl", "rb")
heart_classifier = pickle.load(pickle_heart)


origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def load_model():
    #open file with model architecture
    json_file = open('Models/Pneumonia/model.json','r')
    loaded_model_json = json_file.read()
    json_file.close()
    global model
    model = model_from_json(loaded_model_json)

    #load weights into new model
    model.load_weights("Models/Pneumonia/model.h5")
    print(model.summary())


def process_image(image):
    #read image
    #image = Image.open(BytesIO(image))
    if image.mode != "RGB":
        image = image.convert("RGB")

    # resize and convert to tensor
    image = image.resize((96, 96))
    image = img_to_array(image)
    image = preprocess_input(image)
    image = np.expand_dims(image, axis=0)
    return image


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



@app.post("/pneumonia")
async def pneumonia(file: UploadFile = File(...)):
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not extension:
        return "Image must be jpg or png format!"

    predictions = {}
    load_model()

    image = read_imagefile(await file.read())
    image = process_image(image)
    try:
        out = model.predict(image)
        # send the predictions to index page
        predictions = {"positive":str(np.round(out[0][1],2)),"negative":str(np.round(out[0][0],2))}
    except:
        predictions ={}

    return predictions


@app.post('/health')
async def health(data: health):

    data = data.dict()

    Status = data["Status"]
    Alcohol = data["Alcohol"]
    BMI = data["BMI"]

    prediction = classifier.predict([[Status, Alcohol, BMI]])

    return prediction[0]


@app.post('/heart')
async def heart(data: heart):

    data = data.dict()

    age = data["age"]
    totChol = data["totChol"]
    sysBP = data["sysBP"]
    diaBP = data["diaBP"]
    BMI = data["BMI"]
    heartRate = data["heartRate"]
    glucose = data["glucose"]

    #return([age, totChol, sysBP, diaBP, BMI, heartRate, glucose])


    prediction = heart_classifier.predict([[age, totChol, sysBP, diaBP, BMI, heartRate, glucose]])

    return prediction[0]



if __name__ == "__main__":
    uvicorn.run(app, debug=True)
