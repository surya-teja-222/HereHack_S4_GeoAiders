import pandas as pd
from sklearn.neighbors import NearestNeighbors
import helpers.reverseGeoCode as rgc
import pickle

df = pd.read_csv('static\LandIndia.csv')

f = open('static\LandIndiaNeighbours.pkl', 'rb')
neighbours = pickle.load(f)

def land_price_nearest(latitude, longitude):
    distances, indices = neighbours.kneighbors([[latitude, longitude]])
    lats = []
    lngs = []
    price = []
    label = []
    for i in indices[0]:
        lats.append(df['lat'][i])
        lngs.append(df['lng'][i])
        price.append(df['pricePersqft'][i])
        label.append(rgc.reverseGeoCode(df['lat'][i], df['lng'][i]))
        

    lat_u, long_u , price_u, label = sorted(zip(*set(zip(lats, lngs, price, label))))


    return (list(lat_u)[:10], list(long_u)[:10], list(price_u)[:10] , list(label)[:10])

    

