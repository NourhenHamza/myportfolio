import os
import sys
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

# Load environment variables from .env file
env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '.env')
load_dotenv(dotenv_path=env_path, override=True)

# Add project directory to Python path
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

# Debug: Afficher les chemins pour comprendre la structure
print(f"[DEBUG] __file__: {__file__}")
print(f"[DEBUG] os.path.dirname(__file__): {os.path.dirname(__file__)}")
print(f"[DEBUG] os.path.dirname(os.path.dirname(__file__)): {os.path.dirname(os.path.dirname(__file__))}")
print(f"[DEBUG] sys.path: {sys.path[:3]}")  # Afficher les 3 premiers éléments
print(f"[DEBUG] Current working directory: {os.getcwd()}")

# Vérifier si le dossier routes existe
routes_path = os.path.join(os.path.dirname(__file__), 'routes')
print(f"[DEBUG] Routes path: {routes_path}")
print(f"[DEBUG] Routes exists: {os.path.exists(routes_path)}")

if os.path.exists(routes_path):
    print(f"[DEBUG] Contents of routes directory: {os.listdir(routes_path)}")

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'asdf#FGSgvasgf$5$WGT')

# Configure CORS - IMPORTANT: Ajouter la nouvelle URL Vercel
CORS(app, origins=[
    'https://myportfolio-osjl.onrender.com',
    'https://myportfolio-cqik.vercel.app',
    'https://myportfolio-lplc-gemmy9rup-nourhenhamzas-projects.vercel.app',  # Nouvelle URL
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
    print("[SUCCESS] Blueprints importés depuis routes/")
    
except ImportError as e:
    print(f"[ERROR] Erreur d'importation depuis routes/: {e}")
    try:
        # Fallback - essayer d'importer directement
        from contact import contact_bp
        from cv import cv_bp
        
        app.register_blueprint(contact_bp, url_prefix='/api')
        app.register_blueprint(cv_bp, url_prefix='/api')
        print("[SUCCESS] Blueprints importés directement")
        
    except ImportError as e2:
        print(f"[ERROR] Erreur d'importation directe: {e2}")
        # Créer des routes de base si les imports échouent
        @app.route('/api/contact', methods=['GET', 'POST'])
        def contact():
            if request.method == 'GET':
                return jsonify({
                    'message': 'Contact endpoint (fallback)',
                    'method': 'POST required',
                    'required_fields': ['name', 'email', 'subject', 'message'],
                    'endpoint': '/api/contact',
                    'note': 'Using fallback route - modules not found'
                }), 200
            return jsonify({'error': 'Module contact non disponible (fallback)'}), 500
            
        @app.route('/api/download-cv', methods=['GET'])
        def download_cv():
            return jsonify({'error': 'Module CV non disponible (fallback)'}), 500

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

