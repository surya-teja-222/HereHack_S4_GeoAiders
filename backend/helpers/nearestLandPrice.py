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

    lat_u, long_u , price_u= sorted(zip(*set(zip(lats, lngs, price))))

    lat_u , long_u , price_u = list(lat_u)[:10], list(long_u)[:10], list(price_u)[:10]

    label = []
    for i in range(len(lat_u)):
        label.append(rgc.reverseGeoCode(lat_u[i], long_u[i]))

    return (lat_u , long_u , price_u, label)

    

