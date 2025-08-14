import os
import sys
from dotenv import load_dotenv

# Load environment variables from .env file
env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '.env')
load_dotenv(dotenv_path=env_path, override=True)

# Add project directory to Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, jsonify
from flask_cors import CORS
from src.models.user import db
from src.routes.user import user_bp
from src.routes.contact import contact_bp
from src.routes.cv import cv_bp

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'asdf#FGSgvasgf$5$WGT')

# Configure CORS with your Render domain and local development
CORS(app, origins=[
    'https://myportfolio-osjl.onrender.com',  # Your Render domain
    'https://myportfolio-cqik.vercel.app',    # Your Vercel domain
    'http://localhost:3000',                  # Local development
    'http://127.0.0.1:3000'                   # Alternative localhost
])

# Register blueprints with explicit URL prefixes
app.register_blueprint(user_bp, url_prefix='/api/user')
app.register_blueprint(contact_bp, url_prefix='/api/contact')
app.register_blueprint(cv_bp, url_prefix='/api/cv')

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
with app.app_context():
    db.create_all()

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
            },
            "user_auth": {
                "url": "/api/user",
                "methods": ["GET", "POST"],
                "description": "User authentication"
            }
        }
    })

# Error handler for 404
@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "error": 404,
        "message": "Resource not found",
        "available_endpoints": {
            "contact": "/api/contact",
            "download_cv": "/api/cv/download-cv",
            "user_auth": "/api/user"
        }
    }), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)