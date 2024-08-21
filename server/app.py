#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource
from flask_cors import CORS
from sqlalchemy.exc import IntegrityError

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Destination, ActivityDestination, Activity

@app.before_request
def check_if_logged_in():
    open_access_list = [
        'signup',
        'login',
        'check_session'
    ]

    if (request.endpoint) not in open_access_list and (not session.get('user_id')):
        return {'error': '401 Unauthorized'}, 401
    
# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'    

class AllDestinations(Resource):
    
    def get(self):
        
        destination_list = [destination.to_dict(only=('id', 'city', 'state', 'country', 'image')) for destination in Destination.query.all()]
        
        response = make_response(
            destination_list,
            200
        )
        
        return response 
    
    def post(self):
        
        json = request.get_json()
        
        user = User.query.filter(User.id == session['user_id']).first()
        
        new_destination = Destination(
            city = json.get('city'),
            state = json.get('state'),
            country = json.get('country'),
            image = json.get('image')
        )
        
        db.session.add(new_destination)
        db.session.commit()
        
        response_dict = new_destination.to_dict()
        
        response = make_response(
            response_dict,
            201
        )
    
        return response
    
api.add_resource(AllDestinations, '/all_destinations')

class ActivityByDestination(Resource):
    
    def get(self, id):
        
        destination = Destination.query.filter_by(id=id).first()
        
        if not destination:
            return make_response({'error': 'Destination not found'}, 404)
        
        activity_destinations = ActivityDestination.query.filter_by(destination_id=id).all()
        
        response_list = [activity_destination.activity.to_dict(only=('id', 'activity_name', 'activity_description', 'activity_image')) for activity_destination in activity_destinations]
        
        response = make_response(
            response_list,
            200
        )
        
        return response
    
    def post(self, id):
        
        user = User.query.filter(User.id == session['user_id']).first()
        
        json = request.get_json()
        
        added_activity_destination = ActivityDestination(
            destination_id = json.get('destination_id'),
            activity_id = json.get('activity_id'),
            user_id = user.id
        )
        
        db.session.add(added_activity_destination)
        db.session.commit()
        
        response_dict = added_activity_destination.to_dict()
        
        response = make_response(
            response_dict,
            201
        )
        
        return response
        
    
api.add_resource(ActivityByDestination, '/activity_by_destination/<int:id>')

# Make route for activity_destinations of a user.

class UserAddedActivityDestinations(Resource):
    
    def get(self):
    
        user = User.query.filter(User.id == session['user_id']).first()
    
        user_activity_destinations_list = [activity_destinations.to_dict(only=('destination', 'activity', 'user')) for activity_destinations in user.activity_destinations]

        response = make_response(
            user_activity_destinations_list,
            200
        )
    
        return response 

api.add_resource(UserAddedActivityDestinations, '/added_activity_by_destination')

class AllActivities(Resource):
    
    def get(self):
        
        activity_list = [activity.to_dict(only=('id', 'activity_name', 'activity_description', 'activity_image')) for activity in Activity.query.all()]
        
        response = make_response(
            activity_list,
            200
        )
        
        return response
    
    def post(self):
        
        json = request.get_json()
        
        new_activity = Activity(
            activity_name = json.get('activity_name'),
            activity_description = json.get('activity_description'),
            activity_image = json.get('activity_image')
        )
        
        db.session.add(new_activity)
        db.session.commit()
        
        response_dict = new_activity.to_dict()
        
        response = make_response(
            response_dict,
            201
        )
        
        return response
        
api.add_resource(AllActivities, '/all_activities')


class ActivityByID(Resource):
    
    def patch(self, id):
        
        json = request.get_json()
    
        activity = Activity.query.filter(Activity.id == id).first()
        
        for attr in json:
            setattr(activity, attr, json[attr])
            
        db.session.add(activity)
        db.session.commit()
        
        response = make_response(
            activity.to_dict(),
            200
        )
        
        return response
    
    def delete(self, id):
        
        activity = Activity.query.filter_by(id=id).first()
        db.session.delete(activity)
        db.session.commit()
        
        response = make_response(
            {'message': 'successful deletion of activity'},
            202
        )
        
        return response

api.add_resource(ActivityByID, '/activity/<int:id>')

class AddActivityDestination(Resource):
    
    def post(self):
        
        json = request.get_json()
        
        new_activity_destination = ActivityDestination(
            destination_id = json.get('destination_id'),
            activity_id = json.get('activity_id')
        )
        
        db.session.add(new_activity_destination)
        db.session.commit()
        
        response_dict = new_activity_destination.to_dict()
        
        response = make_response(
            response_dict,
            201
        )
        
        return response

api.add_resource(AddActivityDestination, '/add_activity_destination')
        

class Login(Resource):
    
    def post(self):
        
        username = request.get_json()['username']
        user = User.query.filter(User.username == username).first()
        
        password = request.get_json()['password']
        
        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
            return user.to_dict()
        
        else:
            return {'error': 'Invalid username or password'}, 401
    
api.add_resource(Login, '/login')

class Logout(Resource):
    
    def delete(self):
        if session['user_id'] != None:
            session['user_id'] = None
            return {}, 204
        elif session['user_id'] == None:
            return {'error': 'message'}, 401

api.add_resource(Logout, '/logout', endpoint='logout')

class CheckSession(Resource):
    
    def get(self):
        
        user_id = session['user_id']
        user = User.query.filter(User.id == user_id).first()
        
        if user:
            response = make_response(
                user.to_dict(),
                200
            )
        else:
            response = make_response(
                {'message': 'error'},
                401
            )
            
        return response
    
api.add_resource(CheckSession, '/check_session', endpoint='check_session')

class Signup(Resource):
    
    def post(self):
        

        json = request.get_json()
        user = User(
            username=json.get('username')
        )
        user.password_hash = json['password']
        
        try:
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            return user.to_dict(), 201
        except IntegrityError:
            return {'error': 'invalid login credentials'}
        
api.add_resource(Signup, '/signup', endpoint='signup')





if __name__ == '__main__':
    app.run(port=5555, debug=True)

