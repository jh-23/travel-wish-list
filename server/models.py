from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates 
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

# Models go here!

class User(db.Model, SerializerMixin):
    
    __tablename__ = 'users'
    
    serialize_rules=('-activity_destinations.user',)
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    _password_hash = db.Column(db.String(128), nullable=False)
    
    # relationship maps ActivityDestination to User
    activity_destinations = db.relationship('ActivityDestination', back_populates='user')
    
    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8')
        )
    
    # validation 
    @validates('username')
    def validate_username(self, key, username):
        if 4 <= len(username) <= 16:
            return username
        else:
            raise ValueError('Username must be between 4 and 16 characters, inclusive')
    
class Destination(db.Model, SerializerMixin):
    
    __tablename__ = 'destinations'
    
    serialize_rules = ('-activity_destinations.destination', '-activity_destinations')
    
    id = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String)
    country = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String)
    
    # relationship method that maps Destination to related ActivityDestination
    activity_destinations = db.relationship('ActivityDestination', back_populates='destination', cascade='all, delete-orphan')
    
class ActivityDestination(db.Model, SerializerMixin):
    
    __tablename__ = 'activity_destinations'
    
    id = db.Column(db.Integer, primary_key=True)
    
    serialize_rules = ('-destination.activity_destinations', '-activity.activity_destinations', '-user.activity_destinations')
    
    # Foreign Keys
    destination_id = db.Column(db.Integer, db.ForeignKey('destinations.id'))
    activity_id = db.Column(db.Integer, db.ForeignKey('activities.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    
    # relationship method maps the ActivityDestination to Destination
    destination = db.relationship('Destination', back_populates='activity_destinations')
    
    # relationship method maps the ActivityDestination to Activity
    activity = db.relationship('Activity', back_populates='activity_destinations')
    
    # relationship method maps the ActivityDestination to the User
    user = db.relationship('User', back_populates='activity_destinations')
    
    # route with session with user.  create a list of objects of activity_destinations
        
    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'destination_id': self.destination_id,
    #         'activity_id': self.activity_id,
    #         'user_id': self.user_id,
    #     }
    
class Activity(db.Model, SerializerMixin):
    
    __tablename__ = 'activities'
    
    serialize_rules = ('-activity_destinations.activity',)
    
    id = db.Column(db.Integer, primary_key=True)
    activity_name = db.Column(db.String, nullable=False)
    activity_description = db.Column(db.String, nullable=False)
    activity_image = db.Column(db.String, nullable=False)
    
    # relationship method that maps Activity to ActivityDestination
    activity_destinations = db.relationship('ActivityDestination', back_populates='activity', cascade='all, delete-orphan')
    
