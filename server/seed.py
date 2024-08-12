#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Destination, ActivityDestination, Activity

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        User.query.delete()
        Destination.query.delete()
        ActivityDestination.query.delete()
        Activity.query.delete()
        
        # Seed database
        
        users_to_add = []
        
        user_1 = (User(
            username="billyjane",
        ))
        user_1.password_hash = "welttraveler8"
        
        user_2 = (User(
            username="sarahjane"
        ))
        user_2.password_hash = "8675309hi"
        
        users_to_add.append(user_1)
        users_to_add.append(user_2)
        db.session.add_all(users_to_add)
        
        #destinations
        
        destinations_to_add = []
        
        destination_1 = (Destination(
            city= "New York City",
            state= "NY",
            country= "USA",
            image="https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428.jpg?w=2048&h=1366"
        ))
        
        destination_2 = (Destination(
            city="Zurich",
            state="N/A",
            country="Switzerland",
            image="https://i.natgeofe.com/n/ba9f1ab4-3abe-4b95-a884-90fc45d17db3/city-aerial-zurich-switzerland.jpg?w=2880&h=2158"
        ))
        
        destinations_to_add.append(destination_1)
        destinations_to_add.append(destination_2)
        db.session.add_all(destinations_to_add)
        
        #activity_Destinations
        
        activity_destinations_to_add = []
        
        activity_destination_1 = (ActivityDestination(
            destination_id=1,
            activity_id=1
        ))
        
        activity_destination_2 = (ActivityDestination(
            destination_id=1,
            activity_id=2
        ))
        
        activity_destination_3 = (ActivityDestination(
            destination_id=2,
            activity_id=3
        ))
        
        activity_destination_4 = (ActivityDestination(
            destination_id=2,
            activity_id=4
        ))
        
        activity_destinations_to_add.append(activity_destination_1)
        activity_destinations_to_add.append(activity_destination_2)
        activity_destinations_to_add.append(activity_destination_3)
        activity_destinations_to_add.append(activity_destination_4)
        db.session.add_all(activity_destinations_to_add)
        
        # Activities
        
        activities_to_add = []
        
        activity_1 = (Activity(
            activity_name = "Ellis Island",
            activity_description = "Ellis Island is a federally owned island in New York Harbor, situated within the U.S. states of New Jersey and New York. Ellis Island was once the busiest immigrant inspection and processing station in the United States. From 1892 to 1954, nearly 12 million immigrants arriving at the Port of New York and New Jersey were processed there.[6] It has been part of the Statue of Liberty National Monument since 1965 and is accessible to the public only by ferry. The north side of the island is a national museum of immigration, while the south side of the island, including the Ellis Island Immigrant Hospital, is open to the public through guided tours.",
            activity_image = "https://www.statueofliberty.org/wp-content/uploads/2020/08/APS_5690-scaled.jpg"
        ))
        
        activity_2 = (Activity(
            activity_name="The Metropolitan Museum of Art",
            activity_description = "The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone to experience and enjoy. The Museum lives in two iconic sites in New York City—The Met Fifth Avenue and The Met Cloisters. Millions of people also take part in The Met experience online.  Since its founding in 1870, The Met has always aspired to be more than a treasury of rare and beautiful objects. Every day, art comes alive in the Museum's galleries and through its exhibitions and events, revealing new ideas and unexpected connections across time and across cultures.",
            activity_image = "https://cdn.sanity.io/images/cctd4ker/production/909fa245367580e643fff7bedf1f5ca129443163-1200x630.jpg?w=600&q=75&auto=format"
        ))
    
        activity_3 = (Activity(
            activity_name="Old Town",
            activity_description="Also known as Alstadt, Zurich's historical center is a cool mix of old and new. It's home to iconic churches like the twin towers of Grossmunster as well as Fraumunster, which is famous for its stained glass windows. You can also climb up Lindenhof Hill for a bird's eye view of the town and walk the pedestrianized streets of Niederdorf and Limmatquai—they are lively with shops by day and packed with nightlife as the sun goes down. Join a walking tour to explore the medieval alleyways or hop on a cruise along River Limmat for a different view of the picturesque Old Town. ",
            activity_image="https://travel.usnews.com/images/Zurich_Sunrise.jpg"
        ))
        
        activity_4 = (Activity(
            
            activity_name="Uetliberg",
            activity_description="Standing an impressive 2,858 feet above sea level, Uetliberg offers some of the best views of Zurich and the surrounding alps. Once at the top, travelers will find multiple trails through the dense and ancient yew tree groves for hiking, extreme mountain biking and sledding. Paragliding at the mountain's peak is another popular pastime here.",
            activity_image="https://travel.usnews.com/dims4/USNEWS/7f74556/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FUetliberg_Mountain_Stanley_Chen_Xi_Getty.jpg"
        ))
    
        activities_to_add.append(activity_1)
        activities_to_add.append(activity_2)
        activities_to_add.append(activity_3)
        activities_to_add.append(activity_4)
        db.session.add_all(activities_to_add)
        
        db.session.commit()