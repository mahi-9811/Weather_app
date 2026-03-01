from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os
app = Flask(__name__)
CORS(app)  # allows React to talk to Flask
load_dotenv()

API_KEY = os.getenv("OPENWEATHER_API_KEY")

BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

@app.route("/weather")
def get_weather():
    city = request.args.get("city", "London")

    response = requests.get(BASE_URL, params={
        "q": city,
        "appid": API_KEY,
        "units": "metric"
    })

    data = response.json()

    if response.status_code == 200:
        return jsonify({
            "city": data["name"],
            "country": data["sys"]["country"],
            "temp": data["main"]["temp"],
            "feels_like": data["main"]["feels_like"],
            "humidity": data["main"]["humidity"],
            "description": data["weather"][0]["description"],
            "icon": data["weather"][0]["icon"]
        })
    else:
        return jsonify({"error": "City not found"}), 404
@app.route("/weather-by-location")
def get_weather_by_location():
    lat = request.args.get("lat")
    lon = request.args.get("lon")

    if not lat or not lon:
        return jsonify({"error": "Location not provided"}), 400

    response = requests.get(BASE_URL, params={
        "lat": lat,
        "lon": lon,
        "appid": API_KEY,
        "units": "metric"
    })

    data = response.json()
    print("LOCATION WEATHER:", data)

    if response.status_code == 200:
        return jsonify({
            "city": data["name"],
            "country": data["sys"]["country"],
            "temp": data["main"]["temp"],
            "feels_like": data["main"]["feels_like"],
            "humidity": data["main"]["humidity"],
            "description": data["weather"][0]["description"],
            "icon": data["weather"][0]["icon"]
        })
    else:
        return jsonify({"error": "Location not found"}), 404
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)