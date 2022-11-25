import os
import pandas as pd


# URL = f'https://revgeocode.search.hereapi.com/v1/revgeocode?at={48.2181679}%2C{16.3899064}&lang=en-US&apiKey={HERE_API_KEY}'

def reverseGeoCode(lat, long):
    MAP_QUEST_KEY = os.environ.get('MAP_QUEST_KEY')
    URL = f'http://www.mapquestapi.com/geocoding/v1/reverse?key={MAP_QUEST_KEY}&location={30.333472},{-81.470448}'

    response = requests.get(URL)
    data = response.json()
    return data['results'][0]["locations"][0]["adminArea5"]



