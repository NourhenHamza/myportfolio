from flask import Blueprint, send_file, jsonify
from flask_cors import cross_origin
import os

cv_bp = Blueprint('cv', __name__)

@cv_bp.route('/download-cv', methods=['GET'])
@cross_origin()
def download_cv():
    try:
        # Chemin vers le fichier CV
        cv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'static', 'cv', 'CV_Nourhen_Hamza.pdf')
        
        # Vérifier si le fichier existe
        if not os.path.exists(cv_path):
            return jsonify({'error': 'Fichier CV non trouvé'}), 404
        
        # Envoyer le fichier en téléchargement
        return send_file(
            cv_path,
            as_attachment=True,
            download_name='CV_Nourhen_Hamza.pdf',
            mimetype='application/pdf'
        )
        
    except Exception as e:
        return jsonify({
            'error': 'Erreur lors du téléchargement du CV',
            'details': str(e)
        }), 500

@cv_bp.route('/cv-info', methods=['GET'])
@cross_origin()
def cv_info():
    """Endpoint pour obtenir des informations sur le CV disponible"""
    try:
        cv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'static', 'cv', 'CV_Nourhen_Hamza.pdf')
        
        if os.path.exists(cv_path):
            file_size = os.path.getsize(cv_path)
            return jsonify({
                'available': True,
                'filename': 'CV_Nourhen_Hamza.pdf',
                'size': file_size,
                'download_url': '/api/download-cv'
            }), 200
        else:
            return jsonify({
                'available': False,
                'message': 'CV non disponible'
            }), 404
            
    except Exception as e:
        return jsonify({
            'error': 'Erreur lors de la vérification du CV',
            'details': str(e)
        }), 500

