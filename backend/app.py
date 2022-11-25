from flask import Flask
import pickle
import helpers.nearestLandPrice as nlp
from flask import jsonify
from flask import request
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


@app.route("/")
def hello_world():
    f = open("./static/model.pkl", "rb")
    model = pickle.load(f)
    
    return "<p>Hello, World!</p>"


@app.route("/land-price-nearest")
def land_price_nearest():
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')

    if(latitude == None or longitude == None):
        return jsonify({"error": "latitude and longitude are required"}), 400
    lat,long,price,label = nlp.land_price_nearest(latitude, longitude)
    land_price_nearest = []
    for i in range(len(lat)):
        land_price_nearest.append({
            "label": label[i],
            "lat": lat[i],
            "long": long[i],
            "price": price[i]
        })
    
    return land_price_nearest, 200