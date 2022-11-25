import os
import pandas as pd
import requests
import dotenv
dotenv.load_dotenv()

# URL = f'https://revgeocode.search.hereapi.com/v1/revgeocode?at={48.2181679}%2C{16.3899064}&lang=en-US&apiKey={HERE_API_KEY}'

def reverseGeoCode(lat, long):
    MAP_QUEST_KEY = os.environ.get('MAP_QUEST_KEY')
    URL = f'http://www.mapquestapi.com/geocoding/v1/reverse?key={MAP_QUEST_KEY}&location={lat},{long}'

    response = requests.get(URL)
    data = response.json()
    str1 = data['results'][0]["locations"][0]["adminArea6"] if data['results'][0]["locations"][0]["adminArea6"] else ' '
    str2 = data['results'][0]["locations"][0]["adminArea5"] if data['results'][0]["locations"][0]["adminArea5"] else ' '
    return str1 + ' ' + str2



# df = pd.read_csv('../static/LandIndia.csv')

# for i in range(20):
#     print(reverseGeoCode(df['lat'][i], df['lng'][i]))
