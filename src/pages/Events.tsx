
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Holy Week Services",
      date: "April 28 - May 5, 2024",
      time: "Various Times",
      location: "Main Sanctuary",
      category: "liturgical",
      description: "Join us for the most sacred week in the Orthodox calendar with special services each day.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=250&fit=crop",
      attendees: "All Ages Welcome"
    },
    {
      id: 2,
      title: "Youth Group Meeting",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Community Center",
      category: "youth",
      description: "Weekly gathering for teens and young adults featuring fellowship, discussion, and activities.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop",
      attendees: "Ages 13-25"
    },
    {
      id: 3,
      title: "Community Food Drive",
      date: "May 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Church Parking Lot",
      category: "service",
      description: "Help us collect and distribute food to families in need in our local community.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop",
      attendees: "Volunteers Needed"
    },
    {
      id: 4,
      title: "Bible Study",
      date: "Every Wednesday",
      time: "7:00 PM - 8:30 PM",
      location: "Fellowship Hall",
      category: "education",
      description: "Deep dive into Scripture with Father Michael, exploring both Old and New Testament.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      attendees: "All Ages Welcome"
    },
    {
      id: 5,
      title: "Church Picnic",
      date: "June 22, 2024",
      time: "12:00 PM - 5:00 PM",
      location: "Riverside Park",
      category: "social",
      description: "Annual church picnic with food, games, and fellowship for the whole family.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
      attendees: "All Families"
    },
    {
      id: 6,
      title: "Vespers Service",
      date: "Every Saturday",
      time: "6:00 PM - 7:00 PM",
      location: "Main Sanctuary",
      category: "liturgical",
      description: "Traditional evening prayer service preparing hearts for Sunday's Divine Liturgy.",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=250&fit=crop",
      attendees: "All Ages Welcome"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events', color: 'bg-orthodox-burgundy' },
    { id: 'liturgical', label: 'Liturgical', color: 'bg-orthodox-gold' },
    { id: 'youth', label: 'Youth', color: 'bg-blue-500' },
    { id: 'education', label: 'Education', color: 'bg-green-500' },
    { id: 'service', label: 'Service', color: 'bg-purple-500' },
    { id: 'social', label: 'Social', color: 'bg-orange-500' }
  ];

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.category === selectedFilter);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-500';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-orthodox-burgundy mb-6">
            Church Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for worship, fellowship, and service opportunities throughout the year.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedFilter === category.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(category.id)}
              className={selectedFilter === category.id 
                ? "bg-orthodox-burgundy hover:bg-orthodox-burgundy-light text-white" 
                : "border-orthodox-burgundy text-orthodox-burgundy hover:bg-orthodox-burgundy hover:text-white"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300 border-orthodox-gold-light overflow-hidden">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className={`absolute top-3 right-3 ${getCategoryColor(event.category)} text-white`}
                >
                  {categories.find(c => c.id === event.category)?.label}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-orthodox-burgundy font-serif">
                  {event.title}
                </CardTitle>
                <CardDescription>
                  {event.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-orthodox-gold" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-orthodox-gold" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-orthodox-gold" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-orthodox-gold" />
                    {event.attendees}
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-orthodox-burgundy hover:bg-orthodox-burgundy-light text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-orthodox-ivory-dark rounded-lg p-8">
          <h2 className="font-serif text-2xl font-bold text-orthodox-burgundy mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-6">
            Don't miss out on upcoming events and special announcements. 
            Follow us to stay updated with all church activities.
          </p>
          <Button 
            size="lg" 
            className="bg-orthodox-gold text-orthodox-burgundy hover:bg-orthodox-gold-light font-semibold"
          >
            Subscribe to Updates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
