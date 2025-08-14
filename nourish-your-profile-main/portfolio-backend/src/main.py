import os
import sys
from dotenv import load_dotenv

# Load environment variables from .env file
env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '.env')
load_dotenv(dotenv_path=env_path, override=True)

# Add project directory to Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask
from flask_cors import CORS
from src.models.user import db
from src.routes.user import user_bp
from src.routes.contact import contact_bp
from src.routes.cv import cv_bp

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'asdf#FGSgvasgf$5$WGT')

# Configure CORS with your Vercel domain and local development
CORS(app, origins=[
    'https://myportfolio-cqik.vercel.app',  # Your production domain
    'http://localhost:3000',               # Local development
    'http://127.0.0.1:3000'                # Alternative localhost
])

# Register blueprints
app.register_blueprint(user_bp, url_prefix='/api')
app.register_blueprint(contact_bp, url_prefix='/api')
app.register_blueprint(cv_bp, url_prefix='/api')

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/')
def home():
    """Root endpoint that returns API information"""
    return {
        "message": "Portfolio Backend API",
        "status": "running",
        "version": "1.0",
        "endpoints": {
            "contact": "/api/contact (POST)",
            "download_cv": "/api/download-cv (GET)",
            "user_auth": "/api/user (POST/GET)"
        }
    }

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)