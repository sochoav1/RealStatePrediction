import json
import pickle

import numpy as np

__locations = None
__data_columns = None
__model = None

def load_saved_artifacts():
    print('Loading saved artifacts...')
    global __data_columns, __locations, __model

    with open('./artifacts/columns.json', 'r') as f:
        data = json.load(f)
        __data_columns = data['data_columns']
        __locations = __data_columns[3:]  # Esto asume que las primeras 3 columnas no son nombres de ubicación

    with open('./artifacts/banglore_home_prices_model.pickle', 'rb') as f:
        __model = pickle.load(f)

    print('Artifacts loaded successfully')

def get_location_names():
    if __locations:
        return __locations
    else:
        print("No locations to return")  # Agregado para depuración
        return []

def get_estimated_price(location, sqft, bhk, bath):
    if __model is None:
        raise ValueError("Model has not been loaded")
    
    loc_index = -1
    if location in __data_columns:
        loc_index = __data_columns.index(location.lower())
    
    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1
    
    return round(__model.predict([x])[0], 2)

def get_data_columns():
    return __data_columns

if __name__ == '__main__':
    load_saved_artifacts()
    print(get_location_names())
