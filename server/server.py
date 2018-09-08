#!/usr/bin/python3
import os
import json

from flask import Flask, request
from dotenv import load_dotenv, find_dotenv
import requests

app = Flask(__name__)
load_dotenv(find_dotenv())
GCP_API_KEY = os.getenv("GCP_API_KEY")
GIPHY_API_KEY = os.getenv("GIPHY_API_KEY")
print("GCP:", GCP_API_KEY, "GIPHY:", GIPHY_API_KEY)

@app.route("/classify", methods=['POST'])
def classify():
    image = request.json.get('image')
    if not image:
        return "Nothing"

    payload = {
        "requests": [{
            "image": {
                "content": image
            },
            "features": [{
                "type": "LABEL_DETECTION",
                "maxResults": 10
            }, {
                "type": "FACE_DETECTION",
                "maxResults": 10
            }]
        }]
    }
    response = requests.post("https://vision.googleapis.com/v1/images:annotate?key=" + GCP_API_KEY, data = json.dumps(payload))
    print(response.text)
    return response.text

@app.route("/giphy", methods=['POST'])
def giphy():
    return "http"

@app.after_request
def set_response_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    return response

if __name__ == '__main__':
    app.run(debug=True, port=5000)
