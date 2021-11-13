from flask import Flask, render_template, request, redirect,url_for
from databases import *
import random

import speech_recognition as sr
from os import path
from pydub import AudioSegment

app = Flask(__name__)
app.config['SECRET_KEY'] = 'iasas-food-is-good'

# TODO: Add all of the routes you want below this line!



@app.route("/")
def index():
	return render_template(("index.html"))




if __name__ == "__main__":
	app.run(host="localhost", port=8080, debug=True)