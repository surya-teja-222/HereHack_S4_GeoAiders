from flask import Flask

# cors
from flask_cors import CORS
import pickle
import helpers.nearestLandPrice as nlp
import helpers.reverseGeoCode as rgc

from flask import jsonify
from flask import request
from dotenv import load_dotenv
from sklearn.preprocessing import RobustScaler
import numpy as np
import json
import pandas as pd
load_dotenv()


app = Flask(__name__)
CORS(app , resources={r"/*": {"origins": "*"}})

f = open("./static/model.pkl", "rb")
model = pickle.load(f)

f = open("./static/land_price_model.pkl", "rb")
land_price_model = pickle.load(f)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/house-price-pred')
def result():
    data = json.loads(request.data.decode('utf-8'))
    index=0
    rooms=data['rooms']
    distance=11.184929
    bathroom=data['bathroom']
    car=data['car']
    landsize=data['landsize']
    BuildingArea=data['BuildingArea']
    latitude=data['latitude']
    longitude=data['longitude']
    house_age=data['house_age']
    prop_count=0
    year=2018
    h=1
    t=0
    u=0
    rem=1
    rem2=0
    rem3=0
    rem4=0
    rem5=0
    rem6=0
    rem7=0
    rem8=0
    sf=1
    sf2=0
    sf3=0
    sf4=0
    input=[index,rooms,distance,bathroom,car,landsize,BuildingArea,latitude,longitude,prop_count,house_age,year,h,t,u,rem,rem2,rem3,rem4,rem5,rem6,rem7,rem8,sf,sf2,sf3,sf4]
    scaler = RobustScaler()
    input= scaler.fit_transform([input])
    price=model.predict(input)
    return str(price[0])


@app.route('/house-price' , methods=['POST', 'GET'])
def house_price():
    data = json.loads(request.data.decode('utf-8'))
    latitude=data['lat']
    longitude=data['lng']
    df = pd.read_csv('./static/Melbourne_housing_FULL.csv')
    if(latitude == None or longitude == None):
        try:
            latitude = request.args.get('lat')
            longitude = request.args.get('lng')
        except:
            return jsonify({"error": "latitude and longitude are required"}), 400

    
    f = open("./helpers/house_neigh.pkl", "rb")
    neigh = pickle.load(f)
    distances, indices = neigh.kneighbors([[latitude, longitude]])

    nearLats = []
    nearLongs = []
    nearPrices = []
    nearLabels = []
    for i in indices[0]:
        nearLats.append(df['Lattitude'][i])
        nearLongs.append(df['Longtitude'][i])
        nearPrices.append(df['Price'][i])
        nearLabels.append(df['Address'][i])
    
    lat_u, long_u , price_u  = sorted(zip(*set(zip(nearLats, nearLongs, nearPrices))))
    lat_u , long_u , price_u = list(lat_u)[:10], list(long_u)[:10], list(price_u)[:10]
    label_u = []
    for i in range(len(lat_u)):
        label_u.append(nearLabels[nearLats.index(lat_u[i])])


    land_price_nearest =[]
    for i in range(len(lat_u)):
        land_price_nearest.append({
            "lat": lat_u[i],
            "lng": long_u[i],
            "price": price_u[i] if (price_u[i]) else 1000,
            "label": label_u[i]
        })



    res = dict()
    subRes2 = dict()
    subRes2["house_price_nearest"] = land_price_nearest


    index=0
    rooms=data['noOfRooms']
    distance=11.184929
    bathroom=data['bathRoom']
    car=data['car']
    landsize=data['landSize']
    BuildingArea=data['buildingArea']
    house_age=data['houseAge']
    prop_count=0
    year=2018
    h=1
    t=0
    u=0
    rem=1
    rem2=0
    rem3=0
    rem4=0
    rem5=0
    rem6=0
    rem7=0
    rem8=0
    sf=1
    sf2=0
    sf3=0
    sf4=0
    input = [index,rooms,distance,bathroom,car,landsize,BuildingArea,latitude,longitude,prop_count,house_age,year,h,t,u,rem,rem2,rem3,rem4,rem5,rem6,rem7,rem8,sf,sf2,sf3,sf4]
    scaler = RobustScaler()
    input= scaler.fit_transform([input])
    price = model.predict(input)
    subRes1 = dict()
    subRes1["price"] = price[0].round(2)
    subRes1["latitude"] = latitude
    subRes1["longitude"] = longitude

    res["1"] = subRes1
    res["2"] = subRes2
    print(res)
    return res, 200


@app.route('/land-price-pred')
def land_result():
    data = json.loads(request.data.decode('utf-8'))
    latitude=data['latitude']
    longitude=data['longitude']
    return str(land_price_model.predict([[latitude,longitude]])[0])


@app.route('/land-price' , methods=['POST' , 'GET'])
def land_price():
    data = json.loads(request.data.decode('utf-8'))
    latitude=data['latitude']
    longitude=data['longitude']

    if(latitude == None or longitude == None):
        try:
            latitude = request.args.get('latitude')
            longitude = request.args.get('longitude')
        except:
            return jsonify({"error": "latitude and longitude are required"}), 400

    lat,long,price,label = nlp.land_price_nearest(latitude, longitude)
    land_price_nearest = []
    for i in range(len(lat)):
        land_price_nearest.append({
            "label": label[i],
            "lat": lat[i],
            "long": long[i],
            "price": price[i].round(2)
        })

    mainRes = land_price_model.predict([[latitude,longitude]])[0]

    res = dict()
    subRes1 = dict()
    subRes1["price"] = mainRes.round(2)
    subRes1["latitude"] = latitude
    subRes1["longitude"] = longitude

    subRes2 = dict()
    subRes2["land_price_nearest"] = land_price_nearest

    res["1"] = subRes1
    res["2"] = subRes2

    return jsonify(res), 200
        
        

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


@app.route("/r-geocode" , methods=['POST'])
def reverse_geo_code():
    data = json.loads(request.data.decode('utf-8'))
    latitude=data['latitude']
    longitude=data['longitude']

    if(latitude == None or longitude == None):
        try:
            latitude = request.args.get('latitude')
            longitude = request.args.get('longitude')
        except:
            return jsonify({"error": "latitude and longitude are required"}), 400

    return rgc.reverseGeoCode(latitude, longitude), 200