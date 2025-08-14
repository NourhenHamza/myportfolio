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

# Import blueprints from routes directory within src
try:
    # Essayer d'importer depuis routes/ (structure actuelle)
    from routes.contact import contact_bp
    from routes.cv import cv_bp
    
    app.register_blueprint(contact_bp, url_prefix='/api')
    app.register_blueprint(cv_bp, url_prefix='/api')
    print("Blueprints importés depuis routes/")
    
except ImportError as e:
    print(f"Erreur d'importation depuis routes/: {e}")
    try:
        # Fallback - essayer d'importer directement
        from contact import contact_bp
        from cv import cv_bp
        
        app.register_blueprint(contact_bp, url_prefix='/api')
        app.register_blueprint(cv_bp, url_prefix='/api')
        print("Blueprints importés directement")
        
    except ImportError as e2:
        print(f"Erreur d'importation directe: {e2}")
        # Créer des routes de base si les imports échouent
        @app.route('/api/contact', methods=['GET', 'POST'])
        def contact():
            if request.method == 'GET':
                return jsonify({
                    'message': 'Contact endpoint',
                    'method': 'POST required',
                    'required_fields': ['name', 'email', 'subject', 'message'],
                    'endpoint': '/api/contact'
                }), 200
            return jsonify({'error': 'Module contact non disponible'}), 500
            
        @app.route('/api/download-cv', methods=['GET'])
        def download_cv():
            return jsonify({'error': 'Module CV non disponible'}), 500

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
                "url": "/api/download-cv",
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
            "download_cv": "/api/download-cv"
        }
    }), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

