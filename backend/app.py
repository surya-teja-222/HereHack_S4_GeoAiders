from flask import Flask
import pickle

app = Flask(__name__)

@app.route("/")
def hello_world():
    f = open("./static/model.pkl", "rb")
    model = pickle.load(f)
    
    return "<p>Hello, World!</p>"
