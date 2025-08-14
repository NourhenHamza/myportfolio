import os
import sys
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

# Load environment variables from .env file
env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '.env')
load_dotenv(dotenv_path=env_path, override=True)

# Add project directory to Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'asdf#FGSgvasgf$5$WGT')

# Configure CORS
CORS(app, origins=[
    'https://myportfolio-osjl.onrender.com',
    'https://myportfolio-cqik.vercel.app',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
])

# Only import and register blueprints you're actually using
from routes.contact import contact_bp
from routes.cv import cv_bp

app.register_blueprint(contact_bp, url_prefix='/api/contact')
app.register_blueprint(cv_bp, url_prefix='/api/cv')

@app.route('/')
def home():
    """Root endpoint that returns API information"""
    return jsonify({
        "message": "Portfolio Backend API",
        "status": "running",
        "version": "1.0",
        "endpoints": {
            "contact": {
                "url": "/api/contact",
                "methods": ["GET", "POST"],
                "description": "Send contact messages"
            },
            "download_cv": {
                "url": "/api/cv/download-cv",
                "methods": ["GET"],
                "description": "Download CV"
            }
        }
    })

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 404,
        "message": "Resource not found",
        "available_endpoints": {
            "contact": "/api/contact",
            "download_cv": "/api/cv/download-cv"
        }
    }), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)