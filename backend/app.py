import os
from datetime import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# Enable CORS for frontend communications
CORS(app)

# SQLite Database Configuration
db_path = os.path.join(os.path.dirname(__file__), 'roasters.db')
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

from extensions import db
from models import (
    ContactMessage,
    Registration,
    Donation,
    Fixture,
    Coach,
    Category,
    Player,
    Program,
    FAQ,
    GalleryItem
)

db.init_app(app)

# Seed Initial Data if Empty
def seed_data():
    if Fixture.query.count() == 0:
        initial_fixtures = [
            Fixture(opponent='Nairobi Juniors', date='Saturday, June 8', time='3:00 PM', match_type='Upcoming', status='Scheduled'),
            Fixture(opponent='Valley United', date='Saturday, June 15', time='2:30 PM', match_type='Upcoming', status='Scheduled'),
            Fixture(opponent='Eastside FC', date='Saturday, June 1', time='4:00 PM', match_type='Result', status='Won 2-1')
        ]
        db.session.bulk_save_objects(initial_fixtures)

    if Coach.query.count() == 0:
        initial_coaches = [
            Coach(name='Emmanuel Kadenge', role='Founder & Head Coach', experience='1 year of leading the team, guiding multiple squads, and building a legacy of excellence in youth talent development.'),
            Coach(name='Victoria Kasyoka', role='Assistant Coach', experience='Supports weekly practice plans and player development across the squad.'),
            Coach(name='Reinhard Mutiso', role='Assistant Coach', experience='Focuses on tactical training and match preparation for the first team.', object_position='center 15%'),
            Coach(name='Derrick Amboka', role='Goalkeeping Coach', experience='Specializes in goalkeeper technique, distribution, and shot-stopping drills.'),
            Coach(name='Alson Angaluki', role='Defending & Midfield Coach', experience='Develops transitional play and defensive organization across the team.', object_position='center 10%'),
            Coach(name='Stanclous Lwaki', role='Team Secretary', experience='Manages team operations, communications, and logistics for every matchday.'),
            Coach(name='Felix Achira', role='Technical Analyst', experience='Provides match analysis, opponent scouting, and performance insights.')
        ]
        db.session.bulk_save_objects(initial_coaches)

    if Category.query.count() == 0:
        initial_categories = [
            Category(cat_id='senior', title='Senior Team', description='Our first team of experienced players competing at the highest club level.'),
            Category(cat_id='u13', title='Under-13 Team', description='Developing young talent with energy, teamwork, and coaching support.'),
            Category(cat_id='u9', title='Under-9 Team', description='Foundational training for the club’s youngest football stars.')
        ]
        db.session.bulk_save_objects(initial_categories)
        db.session.commit()  # commit to make categories available for players seeding

        initial_players = [
            # Senior Team
            Player(name='Mason Vale', position='Forward', number=9, description='Prolific striker with a sharp eye for goal.', category_cat_id='senior'),
            Player(name='Peter Omwami', position='Defender', number=4, description='Reliable center-back with strong leadership.', category_cat_id='senior'),
            Player(name='Bryan Kibet', position='Midfielder', number=6, description='Box-to-box midfielder with excellent passing range.', category_cat_id='senior'),
            # U13 Team
            Player(name='Junior Otieno', position='Midfielder', number=12, description='Energetic youth midfielder with great vision.', category_cat_id='u13'),
            Player(name='Sammy Njoroge', position='Forward', number=7, description='Promising young striker with a fast first step.', category_cat_id='u13'),
            Player(name='Noah Mwangi', position='Defender', number=2, description='Calm and composed young fullback with strong tackling.', category_cat_id='u13'),
            # U9 Team
            Player(name='Little Alex', position='Attacker', number=3, description='Up-and-coming youngster full of energy and joy.', category_cat_id='u9'),
            Player(name='Emma Achieng', position='Midfielder', number=10, description='Creative dribbler who loves to find space.', category_cat_id='u9')
        ]
        db.session.bulk_save_objects(initial_players)

    if Program.query.count() == 0:
        initial_programs = [
            Program(prog_id='football-dev', title='Football Development', description='Core training focused on fundamental football skills, tactics, and match preparation for all age groups.'),
            Program(prog_id='goalkeeper', title='Goalkeeper Training', description='Specialized coaching for goalkeepers including distribution, shot-stopping, and positioning drills.'),
            Program(prog_id='fitness', title='Fitness & Conditioning', description='Physical development program to build strength, endurance, and athletic performance.'),
            Program(prog_id='mentorship', title='Academic Mentorship', description='Support for players to balance education with football, ensuring long-term success both on and off the pitch.'),
            Program(prog_id='leadership', title='Leadership Training', description='Develop leadership qualities, team communication, and decision-making skills for emerging team leaders.'),
            Program(prog_id='scouting', title='Talent Scouting', description='Identification and development of emerging talents within the club and from partner organizations.')
        ]
        db.session.bulk_save_objects(initial_programs)

    if FAQ.query.count() == 0:
        initial_faqs = [
            FAQ(question='How do I register my child?', answer='You can register through our Register Now button or contact us directly via the contact form or WhatsApp.'),
            FAQ(question='What age groups do you have?', answer='We have three main categories: U9, U13, and Senior teams. Check our Teams section for more details.'),
            FAQ(question='When are training sessions?', answer='Training schedules vary by age group. Contact us for specific schedules for your desired category.'),
            FAQ(question='What is the registration fee?', answer='Please reach out to us directly via WhatsApp or contact form for current pricing and membership options.')
        ]
        db.session.bulk_save_objects(initial_faqs)

    if GalleryItem.query.count() == 0:
        initial_gallery = [
            GalleryItem(title='Matchday Highlights', media_type='Video', caption='Watch our best moments from recent matches.', image_url='https://via.placeholder.com/300x200?text=Match+Video'),
            GalleryItem(title='Senior Team Training', media_type='Photo', caption='Focused drills from the senior squad preparing for upcoming matches.', image_url='https://via.placeholder.com/300x200?text=Training+Session'),
            GalleryItem(title='U-13 Match Day', media_type='Photo', caption='Young players building confidence and skills on the pitch.', image_url='https://via.placeholder.com/300x200?text=U13+Match'),
            GalleryItem(title='Team Celebrations', media_type='Video', caption='Victory celebrations and team spirit in action.', image_url='https://via.placeholder.com/300x200?text=Celebrations'),
            GalleryItem(title='U-9 Development Session', media_type='Photo', caption='The youngest squad learning the fundamentals of football.', image_url='https://via.placeholder.com/300x200?text=U9+Training'),
            GalleryItem(title='Tournament Highlights', media_type='Video', caption='Roasters FC competing in major tournaments.', image_url='https://via.placeholder.com/300x200?text=Tournament')
        ]
        db.session.bulk_save_objects(initial_gallery)
    
    db.session.commit()

# Initialize database tables and seed data
with app.app_context():
    db.create_all()
    seed_data()

# API Endpoints
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'status': 'success',
        'message': 'Welcome to Roasters FC Backend API',
        'endpoints': {
            'fixtures': '/api/fixtures',
            'coaching_staff': '/api/coaching-staff',
            'categories': '/api/categories',
            'players': '/api/players',
            'programs': '/api/programs',
            'faqs': '/api/faqs',
            'gallery': '/api/gallery'
        }
    })

@app.route('/api/fixtures', methods=['GET'])
def get_fixtures():
    fixtures = Fixture.query.all()
    return jsonify([{
        'id': f.id,
        'opponent': f.opponent,
        'date': f.date,
        'time': f.time,
        'type': f.match_type,
        'status': f.status
    } for f in fixtures])

@app.route('/api/coaching-staff', methods=['GET'])
def get_coaching_staff():
    coaches = Coach.query.all()
    return jsonify([{
        'id': c.id,
        'name': c.name,
        'role': c.role,
        'experience': c.experience,
        'objectPosition': c.object_position
    } for c in coaches])

@app.route('/api/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    return jsonify([{
        'id': c.cat_id,
        'title': c.title,
        'description': c.description
    } for c in categories])

@app.route('/api/players', methods=['GET'])
def get_players():
    category_filter = request.args.get('category')
    if category_filter:
        players = Player.query.filter_by(category_cat_id=category_filter).all()
    else:
        players = Player.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'position': p.position,
        'number': p.number,
        'description': p.description,
        'category': p.category_cat_id
    } for p in players])

@app.route('/api/programs', methods=['GET'])
def get_programs():
    programs = Program.query.all()
    return jsonify([{
        'id': p.prog_id,
        'title': p.title,
        'description': p.description
    } for p in programs])

@app.route('/api/faqs', methods=['GET'])
def get_faqs():
    faqs = FAQ.query.all()
    return jsonify([{
        'id': f.id,
        'question': f.question,
        'answer': f.answer
    } for f in faqs])

@app.route('/api/gallery', methods=['GET'])
def get_gallery():
    items = GalleryItem.query.all()
    return jsonify([{
        'id': i.id,
        'title': i.title,
        'type': i.media_type,
        'caption': i.caption,
        'image': i.image_url
    } for i in items])

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    if not data or not data.get('name') or not data.get('email'):
        return jsonify({'error': 'Name and Email are required'}), 400
    
    new_reg = Registration(
        name=data['name'],
        email=data['email'],
        phone=data.get('phone'),
        team=data.get('team', 'u9')
    )
    db.session.add(new_reg)
    db.session.commit()
    return jsonify({'success': True, 'message': 'Registration request saved successfully!'})

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    if not data or not data.get('name') or not data.get('email') or not data.get('message'):
        return jsonify({'error': 'Name, Email, and Message are required'}), 400
    
    new_msg = ContactMessage(
        name=data['name'],
        email=data['email'],
        phone=data.get('phone'),
        message=data['message']
    )
    db.session.add(new_msg)
    db.session.commit()
    return jsonify({'success': True, 'message': 'Message sent and stored successfully!'})

@app.route('/api/donate', methods=['POST'])
def donate():
    data = request.json
    if not data or not data.get('name') or not data.get('email'):
        return jsonify({'error': 'Name and Email are required'}), 400
    
    new_donation = Donation(
        name=data['name'],
        email=data['email'],
        support_type=data.get('supportType', 'Club Membership'),
        message=data.get('message')
    )
    db.session.add(new_donation)
    db.session.commit()
    return jsonify({'success': True, 'message': 'Thank you! Donation record stored successfully.'})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'error': 'Email and password are required'}), 400
    
    email = data['email']
    password = data['password']
    
    # Accept any non-empty password for mock login sessions
    if len(password) >= 4:
        return jsonify({'success': True, 'message': f'Welcome back, {email.split("@")[0]}!'})
    else:
        return jsonify({'error': 'Invalid credentials. Password must be at least 4 characters.'}), 401

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
