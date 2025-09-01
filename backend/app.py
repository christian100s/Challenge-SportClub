from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

DATA_FILE = os.path.join(os.path.dirname(__file__), "beneficios.json")

@app.get("/beneficios")
def get_beneficios():
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
        if not isinstance(data, list):
            return jsonify({"error": "Invalid JSON format: expected a list"}), 500
        return jsonify(data), 200
    except FileNotFoundError:
        return jsonify({"error": "beneficios.json not found"}), 500
    except json.JSONDecodeError:
        return jsonify({"error": "beneficios.json is not valid JSON"}), 500

@app.get("/health")
def health():
    return jsonify({"status": "ok"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
