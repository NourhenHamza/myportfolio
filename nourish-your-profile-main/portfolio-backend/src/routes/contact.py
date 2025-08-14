from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/contact', methods=['GET', 'POST'])
@cross_origin()
def send_contact_message():
    # Handle GET request
    if request.method == 'GET':
        return jsonify({
            'message': 'Contact endpoint',
            'method': 'POST required',
            'required_fields': ['name', 'email', 'subject', 'message'],
            'endpoint': '/api/contact'
        }), 200
    
    # Handle POST request (existing logic)
    try:
        data = request.get_json()
        
        # Validation des données
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'Le champ {field} est requis'}), 400
        
        name = data['name']
        email = data['email']
        subject = data['subject']
        message = data['message']
        
        # Validation de l'email
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'Adresse email invalide'}), 400
        
        # Configuration SMTP depuis les variables d'environnement
        smtp_host = os.getenv('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.getenv('SMTP_PORT', '587'))
        smtp_user = os.getenv('SMTP_USER') or os.getenv('EMAIL_USER')
        smtp_pass = os.getenv('SMTP_PASS') or os.getenv('EMAIL_PASSWORD')
        
        # Adresse de destination (nourhenhamzaa@gmail.com)
        destination_email = "nourhenhamzaa@gmail.com"
        
        print(f"[DEBUG] Configuration SMTP:")
        print(f"[DEBUG] SMTP_HOST: {smtp_host}")
        print(f"[DEBUG] SMTP_PORT: {smtp_port}")
        print(f"[DEBUG] SMTP_USER: {smtp_user}")
        print(f"[DEBUG] SMTP_PASS: {'***' if smtp_pass else 'Non défini'}")
        print(f"[DEBUG] Destination: {destination_email}")
        
        if not smtp_user or not smtp_pass:
            # Si les informations SMTP ne sont pas disponibles
            error_msg = "Configuration SMTP manquante. Vérifiez les variables d'environnement SMTP_USER et SMTP_PASS dans le fichier .env"
            print(f"[ERROR] {error_msg}")
            
            # Enregistrer dans le fichier de logs
            log_message = f"""
=== Message non envoyé par email (config manquante) ===
Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Nom: {name}
Email: {email}
Sujet: {subject}
Message: {message}
Erreur: {error_msg}
=====================================

"""
            
            logs_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'logs')
            os.makedirs(logs_dir, exist_ok=True)
            log_file = os.path.join(logs_dir, 'contact_messages.txt')
            with open(log_file, 'a', encoding='utf-8') as f:
                f.write(log_message)
            
            return jsonify({
                'success': False,
                'message': f'Email non reçu à {destination_email}',
                'error': error_msg,
                'details': 'Vérifiez la configuration SMTP dans le fichier .env'
            }), 500
        
        # Créer le message email
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = destination_email
        msg['Subject'] = f"Nouveau message de contact: {subject}"
        
        # Corps du message
        body = f"""
Nouveau message de contact reçu via le portfolio:

Nom: {name}
Email: {email}
Sujet: {subject}

Message:
{message}

---
Envoyé le {datetime.now().strftime('%Y-%m-%d à %H:%M:%S')}
"""
        
        msg.attach(MIMEText(body, 'plain', 'utf-8'))
        
        # Tenter d'envoyer l'email
        try:
            print(f"[DEBUG] Tentative de connexion au serveur SMTP...")
            server = smtplib.SMTP(smtp_host, smtp_port)
            server.starttls()  # Activer la sécurité
            print(f"[DEBUG] Tentative d'authentification...")
            server.login(smtp_user, smtp_pass)
            text = msg.as_string()
            print(f"[DEBUG] Envoi de l'email...")
            server.sendmail(smtp_user, destination_email, text)
            server.quit()
            print(f"[SUCCESS] Email envoyé avec succès à {destination_email}")
            
            # Enregistrer dans le fichier de logs pour backup
            log_message = f"""
=== Email envoyé avec succès ===
Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Nom: {name}
Email: {email}
Sujet: {subject}
Message: {message}
Destinataire: {destination_email}
Status: Envoyé avec succès
=====================================

"""
            
            logs_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'logs')
            os.makedirs(logs_dir, exist_ok=True)
            log_file = os.path.join(logs_dir, 'contact_messages.txt')
            with open(log_file, 'a', encoding='utf-8') as f:
                f.write(log_message)
            
            return jsonify({
                'success': True,
                'message': f'Email reçu à {destination_email}',
                'details': 'Message envoyé avec succès par email'
            }), 200
            
        except smtplib.SMTPAuthenticationError as e:
            error_msg = f"Erreur d'authentification SMTP: {str(e)}"
            print(f"[ERROR] {error_msg}")
            
            # Enregistrer l'erreur dans les logs
            log_message = f"""
=== Erreur d'envoi email (Authentification) ===
Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
Nom: {name}
Email: {email}
Sujet: {subject}
Message: {message}
Erreur: {error_msg}
=====================================

"""
            
            logs_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'logs')
            os.makedirs(logs_dir, exist_ok=True)
            log_file = os.path.join(logs_dir, 'contact_messages.txt')
            with open(log_file, 'a', encoding='utf-8') as f:
                f.write(log_message)
            
            return jsonify({
                'success': False,
                'message': f'Email non reçu à {destination_email}',
                'error': 'Erreur d\'authentification SMTP',
                'details': 'Vérifiez votre adresse email et votre mot de passe d\'application Gmail'
            }), 500
            
        except smtplib.SMTPConnectError as e:
            error_msg = f"Erreur de connexion SMTP: {str(e)}"
            print(f"[ERROR] {error_msg}")
            
            return jsonify({
                'success': False,
                'message': f'Email non reçu à {destination_email}',
                'error': 'Erreur de connexion au serveur SMTP',
                'details': 'Vérifiez votre connexion internet et les paramètres SMTP'
            }), 500
            
        except smtplib.SMTPException as e:
            error_msg = f"Erreur SMTP: {str(e)}"
            print(f"[ERROR] {error_msg}")
            
            return jsonify({
                'success': False,
                'message': f'Email non reçu à {destination_email}',
                'error': 'Erreur lors de l\'envoi de l\'email',
                'details': str(e)
            }), 500
        
    except Exception as e:
        error_msg = f"Erreur générale: {str(e)}"
        print(f"[ERROR] {error_msg}")
        
        return jsonify({
            'success': False,
            'message': f'Email non reçu à nourhenhamzaa@gmail.com',
            'error': 'Erreur lors du traitement du message',
            'details': str(e)
        }), 500