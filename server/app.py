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
        
        destination_list = [destination.to_dict() for destination in Destination.query.all()]
        
        response = make_response(
            destination_list,
            200
        )
        
        return response 
    
api.add_resource(AllDestinations, '/alldestinations')


    
    
    
    




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

