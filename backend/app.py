from flask import Flask
import pickle
from sklearn.preprocessing import RobustScaler
import numpy as np

app = Flask(__name__)
f = open("./static/model.pkl", "rb")
model = pickle.load(f)
@app.route('/result')
def result(request):
        index=0
        rooms=request.GET.get(rooms)
        distance=11.184929
        bathroom=request.GET.get(bathroom)
        car=request.GET.get(car)
        landsize=request.GET.get(landsize)
        BuildingArea=request.GET.get(BuildingArea)
        latitude=request.GET.get(latitude)
        longitude=request.GET.get(longitude)
        prop_count=0
        house_age=request.GET.get(house_age)
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
        input= scaler.fit_transform(input.astype(np.float64))
        price=model.predict(input)
        return price
        
        
        
        

@app.route("/")
def hello_world():
    
    
    return "<p>Hello, World!</p>"

