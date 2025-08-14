import os
import sys
from dotenv import load_dotenv

# Charger les variables d'environnement depuis le fichier .env
# Spécifier le chemin absolu du fichier .env
env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '.env')
load_dotenv(dotenv_path=env_path, override=True)

# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, send_from_directory
from flask_cors import CORS
from src.models.user import db
from src.routes.user import user_bp
from src.routes.contact import contact_bp
from src.routes.cv import cv_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Configuration CORS - Update with your Vercel domain
CORS(app, origins=['https://your-vercel-app-name.vercel.app'])

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
    return {
        "message": "Portfolio Backend API",
        "status": "running",
        "endpoints": {
            "contact": "/api/contact (POST)",
            "download_cv": "/api/download-cv (GET)"
        }
    }, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)