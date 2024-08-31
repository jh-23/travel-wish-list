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
        
        destination_3 = (Destination(
            city="Rome",
            state="N/A",
            country="Italy",
            image="https://www.citalia.com/-/media/bynder/citalia-non-geography/blogs/rome-city-guide/blog-rome-300273-2022-rome-shutterstock_1417390817-hybris.jpg?rev=6e4a0e96269a4345a799296d555a0c24&h=480.375&w=1081.5"
        ))
        
        destination_4 = (Destination(
            city="Munich",
            state="N/A",
            country="Germany",
            image="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1000,h_562/w_61,x_11,y_11,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/z715zihpimytmgagayfe/MunichChristmasMarketTour.jpg"
        ))
        
        destination_5 = (Destination(
            city="Mexico City",
            state="N/A",
            country="Mexico",
            image="https://media.cntraveler.com/photos/640b605c63c7e54952eb4d22/4:3/w_1600%2Ch_1200%2Cc_limit/Mexico%2520City_GettyImages-638920569.jpg"
        ))
        
        destination_6 = (Destination(
            city="Melbourne",
            state="N/A",
            country="Australia",
            image="https://www.travelandleisure.com/thmb/2dm9PhvurpcG5g3D2r1Heq0wUsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/melbourne-australia-MELBOURNETG0721-62ff9ae2570945ec80160ddf46ee7cb1.jpg"
        ))
        
        destinations_to_add.append(destination_1)
        destinations_to_add.append(destination_2)
        destinations_to_add.append(destination_3)
        destinations_to_add.append(destination_4)
        destinations_to_add.append(destination_5)
        destinations_to_add.append(destination_6)
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
        
        activity_destination_5 = (ActivityDestination(
            destination_id=3,
            activity_id=5
        ))
        
        activity_destination_6 = (ActivityDestination(
            destination_id=3,
            activity_id=6
        ))
        
        activity_destination_7 = (ActivityDestination(
            destination_id=3,
            activity_id=7
        ))
        
        activity_destination_8 = (ActivityDestination(
            destination_id=3,
            activity_id=8
        ))
        
        activity_destination_9 = (ActivityDestination(
            destination_id=3,
            activity_id=9
        ))
        
        activity_destination_10 = (ActivityDestination(
            destination_id=4,
            activity_id=10
        ))
        
        activity_destination_11 = (ActivityDestination(
            destination_id=4,
            activity_id=11
        ))
        
        activity_destination_12 = (ActivityDestination(
            destination_id=1,
            activity_id=12
        ))
        
        activity_destination_13 = (ActivityDestination(
            destination_id=1,
            activity_id=13
        ))
        
        activity_destination_14 = (ActivityDestination(
            destination_id = 3,
            activity_id = 14
        ))
        
        activity_destination_15 = (ActivityDestination(
            destination_id = 3,
            activity_id = 15
        ))
        
        activity_destination_16 = (ActivityDestination(
            destination_id = 5,
            activity_id = 16
        ))
        
        activity_destination_17 = (ActivityDestination(
            destination_id = 5,
            activity_id = 17
        ))
        
        activity_destination_18 = (ActivityDestination(
            destination_id = 5,
            activity_id = 18
        ))
        
        activity_destination_19 = (ActivityDestination(
            destination_id=6,
            activity_id = 19
        ))
        
        activity_destination_20 = (ActivityDestination(
            destination_id = 6,
            activity_id = 20
        ))
        
        activity_destination_21 = (ActivityDestination(
            destination_id = 6,
            activity_id = 21
        ))
        
        activity_destinations_to_add.append(activity_destination_1)
        activity_destinations_to_add.append(activity_destination_2)
        activity_destinations_to_add.append(activity_destination_3)
        activity_destinations_to_add.append(activity_destination_4)
        activity_destinations_to_add.append(activity_destination_5)
        activity_destinations_to_add.append(activity_destination_6)
        activity_destinations_to_add.append(activity_destination_7)
        activity_destinations_to_add.append(activity_destination_8)
        activity_destinations_to_add.append(activity_destination_9)
        activity_destinations_to_add.append(activity_destination_10)
        activity_destinations_to_add.append(activity_destination_11)
        activity_destinations_to_add.append(activity_destination_12)
        activity_destinations_to_add.append(activity_destination_13)
        activity_destinations_to_add.append(activity_destination_14)
        activity_destinations_to_add.append(activity_destination_15)
        activity_destinations_to_add.append(activity_destination_16)
        activity_destinations_to_add.append(activity_destination_17)
        activity_destinations_to_add.append(activity_destination_18)
        activity_destinations_to_add.append(activity_destination_19)
        activity_destinations_to_add.append(activity_destination_20)
        activity_destinations_to_add.append(activity_destination_21)
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
        
        activity_5 = (Activity(
            activity_name = "Colosseum",
            activity_description = "The ancient Flavian Amphitheater was built by the Flavian emperors in 70 C.E. as a gift to the Roman people. As the largest Roman theater ever built, it was designed to house over 50,000 people, and had played host to gladiator games, plays and even public executions. ",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/4d/99/13/caption.jpg?w=1400&h=800&s=1"
        ))
        
        activity_6 = (Activity(
            activity_name = "Fontana di Trevi",
            activity_description = "Certainly the most famous and photographed fountain in Rome, legend has it that whoever throws a coin into the pond will return to Rome.",
            activity_image= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/97/ba/6b/exterieur.jpg?w=1400&h=800&s=1"
        ))
        
        activity_7 = (Activity(
            activity_name = "Palatine Hill",
            activity_description = "The commercial, political and religious center of ancient Rome, which features the Arch of Septimus Severus, Temple of Saturn, Arch of Titus and the House of the Vestals.",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f7/f0/b1/img-20171013-132257-069.jpg?w=1100&h=-1&s=1"
        ))
        
        activity_8 = (Activity(
            activity_name="Palazzo Colonna - Galleria Colonna",
            activity_description="Right in the center of Rome, close to Piazza Venezia, Palazzo Colonna is one of the greatest Barocco Palaces of the eternal city. The impressive Colonna's Collections of paintings, sculptures and furniture from the 14th to the 18th century are unique and part of the roman history. The Colonna Gallery is open to the public every Saturday morning from 9 am to 1,15 pm (last entrance) from Via della Pilotta 17. All other days, including Saturday afternoon, private visits by appointment. Free guided tour (every Saturday): - in Italian at 10.00 And 11.00 Am - in French at 10.30 Am - in English at 12 am Private visits on request are available every day of the year. We also recommend a visit to the stunning Princess Isabelle Apartment with its incredible Van Wittel and Flemish Collections and the Pinturicchio frescoes.",
            activity_image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/6f/6b/99/the-ballroom-hall.jpg?w=1400&h=800&s=1"
        ))
        
        activity_9 = (Activity(
            activity_name = "St. Peter's Basilica",
            activity_description="Arguably one of the finest Cathedrals in the entire world, St. Peter's is the spiritual center of the Vatican and the product of many of Italy's great Renaissance's architects, among them Bramante, Raphael and Michelangelo.",
            activity_image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/b8/76/87/photo7jpg.jpg?w=1800&h=1000&s=1"
        ))
        
        activity_10 = (Activity(
            activity_name = "BMW Museum",
            activity_description="Hundreds of thousands of people visit BMW's four-cilinder BMW tower and the bowl-shaped museum next to it each year. The museum showcases the technical development of cars and motorcycles and also has some exhibits about the history of the company. Many old cars and motorcycles are on display along a spiral ramp that curls along the inside of the bowl-shaped building.",
            activity_image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/10/c9/d0/bmw-museum.jpg?w=1800&h=1000&s=1" 
        ))
        
        activity_11 = (Activity(
            activity_name = "Oktoberfest",
            activity_description = "A raucous celebration of Bavarian culture, Munich's Oktoberfest is one of the world's oldest, biggest, and longest parties. Dating back to 1810, the event these days kicks off when the mayor taps the first keg at noon on the third Saturday of September. Some 6 million revelers spend the ensuing 16 days clinking and drinking 1-liter beer steins, eating sausages and doughy pretzels, and swooshing through the air aboard carnival rides. Technically a folk festival rather than a beer festival, Oktoberfest features plenty of merrymakers in traditional lederhosen and dirndl dresses belting out old Bavarian songs in giant tents and beer gardens. Regardless of attire, though, anyone is welcome to link arms and join the fun.",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c9/00/32/caption.jpg?w=1400&h=-1&s=1" 
        ))
        
        activity_12 = (Activity(
            activity_name="Central Park",
            activity_description="For more than 150 years, visitors have flocked to Central Park's 843 green acres in the heart of Manhattan. Since 1980, the Park has been managed by the Central Park Conservancy, in partnership with the public. Central Park is open 6 am to 1 am daily. Visit the official website of Central Park to learn more about Park happenings and activities and to learn how you to help Central Park!",
            activity_image="https://olmsted.org/wp-content/uploads/2023/06/Park-Aerial_20190604_04-1-scaled.jpg"
        ))
        
        activity_13 = (Activity(
            activity_name = "The National 9/11 Memorial & Museum",
            activity_description = "Through commemoration, exhibitions and educational programs, The National September 11 Memorial & Museum, a nonprofit in New York City, remembers and honors the 2,983 people killed in the horrific attacks of September 11, 2001, and February 26, 1993, as well as those who risked their lives to save others and all who demonstrated extraordinary compassion in the aftermath of the attacks.",
            activity_image = "https://assets.simpleviewinc.com/simpleview/image/upload/q_75/v1/crm/newyorkstate/9-11-memorial-03-marley-white_08304459-fd51-e9bc-1df612407cbe64fb.jpg"
        ))
        
        activity_14 = (Activity(
            activity_name = "Lindenhof Hill",
            activity_description = "Lindenhofplatz is a nice quiet park, overlooking the city; where Rietberg Museum is located.",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/0d/a7/66/zurich-seen-from-lindenhof.jpg?w=1800&h=1000&s=1"
        ))
        
        activity_15 = (Activity(
            activity_name = "Grossmünster",
            activity_description = "This 12th-century cathedral has both historical and architectural significance: Ulrich Zwingli led an important sect of the Reformation from here in the early 1500s, and the cathedral's twin towers serve as perhaps the most recognizable landmarks in modern Zürich.",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/2e/e8/78/grossmunster-church.jpg?w=1400&h=800&s=1"
        ))
        
        activity_16 = (Activity(
            activity_name = "Museo Nacional de Antropologia",
            activity_description = "Considered one of the world's most comprehensive natural history museums, this famous institution houses four square kilometers of exhibits in 23 exhibition halls.",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/26/fa/3e/photo1jpg.jpg?w=1400&h=800&s=1"
        ))
        
        activity_17 = (Activity(
            activity_name = "Palacio de Bellas Artes",
            activity_description = "This historic white marble building serves as both the city's top performance hall and an art museum.",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/32/f5/de/dscn0175-largejpg.jpg?w=1800&h=1000&s=1"
        ))
    
        activity_18 = (Activity(
            activity_name = "Museo del Templo Mayor",
            activity_description = "The ruins of the temple the Aztecs believed to be center of the universe.",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/74/36/57/caption.jpg?w=1400&h=800&s=1"
        ))
        
        activity_19 = (Activity(
            activity_name = "Royal Botanic Gardens Victoria",
            activity_description = "Visit Melbourne's inner-city oasis. Over 10,000 plant species from around the world are presented in a kaleidoscope of colour and texture. Sweeping lawns, tranquil lakes and majestic trees are home to an amazing range of wildlife.",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ee/06/9a/the-rose-collection-in.jpg?w=1400&h=800&s=1"
        ))
        
        activity_20 = (Activity(
            activity_name = "Melbourne Cricket Ground (MCG)",
            activity_description = "The Melbourne Cricket Ground (MCG) is Australia's largest, oldest and most popular sporting venue. The MCG has hosted plenty of international cricket, including the first-ever Test and the 1992 World Cup final, countless VFL/AFL Grand Finals, the 1956 Olympic Games and 2006 Commonwealth Games. It also hosted the final of ICC Cricket World Cup 2015. Other sporting spectacles include FIFA World Cup soccer qualifiers, rugby league home and away matches and State of Origin and international rugby union clashes. Apart from its sporting events, the MCG has also witnessed many blockbuster music concerts, and even Pope John Paul II held a mass there when he visited Melbourne in 1986. The MCG has a total capacity of 100,024 people, comprising 95,024 seats and 5000 standing room spaces. The stadium also houses the National Sports Museum, which includes some of the most priceless pieces of memorabilia in Australian sporting history.",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/03/99/2019-preliminary-final.jpg?w=1400&h=800&s=1"
        ))
        
        activity_21 = (Activity(
            activity_name = "Werribee Open Range Zoo",
            activity_description = "Experience an African adventure just 30 minutes from Melbourne. You'll find an amazing array of animals living on 225 hectares of wide, open savannah. On the Pula Reserve Walking Trail, come face-to-face with amazing gorillas, a pride of lions, see monkeys and cheetahs at play and feel the sand between your toes at the new Hippo Beach! Included in your admission price is a 40 minute safari tour where you will find rhinoceros, giraffes, zebras and antelopes grazing together on the picturesque savannah. Experience Slumber Safari, where you stay overnight in our luxury safari tents overlooking the savannah. Your stay includes amazing close-up animal encounters, drinks and dips at sunset, and a sumptuous African feast!",
            activity_image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/a6/8a/24/dsc01319-largejpg.jpg?w=800&h=500&s=1"
        ))
    
        activities_to_add.append(activity_1)
        activities_to_add.append(activity_2)
        activities_to_add.append(activity_3)
        activities_to_add.append(activity_4)
        activities_to_add.append(activity_5)
        activities_to_add.append(activity_6)
        activities_to_add.append(activity_7)
        activities_to_add.append(activity_8)
        activities_to_add.append(activity_9)
        activities_to_add.append(activity_10)
        activities_to_add.append(activity_11)
        activities_to_add.append(activity_12)
        activities_to_add.append(activity_13)
        activities_to_add.append(activity_14)
        activities_to_add.append(activity_15)
        activities_to_add.append(activity_16)
        activities_to_add.append(activity_17)
        activities_to_add.append(activity_18)
        activities_to_add.append(activity_19)
        activities_to_add.append(activity_20)
        activities_to_add.append(activity_21)
        db.session.add_all(activities_to_add)
        
        db.session.commit()