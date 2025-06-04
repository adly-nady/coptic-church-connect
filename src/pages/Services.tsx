
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const ministries = [
    {
      id: 'sunday-school',
      title: 'Sunday School',
      category: 'Education',
      description: 'Comprehensive religious education for children and adults, covering Bible studies, church history, and Coptic language.',
      servants: ['Father Michael', 'Sister Mary', 'Deacon John'],
      schedule: 'Sundays 10:30 AM - 12:00 PM',
      location: 'Education Wing',
      ageGroup: 'All Ages',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop'
    },
    {
      id: 'youth-ministry',
      title: 'Youth Ministry',
      category: 'Youth',
      description: 'Dynamic program for teenagers and young adults featuring fellowship, Bible study, service projects, and fun activities.',
      servants: ['Father David', 'Youth Leader Sarah', 'Volunteer Team'],
      schedule: 'Fridays 7:00 PM - 9:00 PM',
      location: 'Community Center',
      ageGroup: 'Ages 13-25',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop'
    },
    {
      id: 'choir',
      title: 'Church Choir',
      category: 'Worship',
      description: 'Sacred music ministry preserving traditional Coptic hymns while incorporating contemporary Christian music.',
      servants: ['Cantor Michael', 'Music Director Anna'],
      schedule: 'Thursdays 7:00 PM - 8:30 PM',
      location: 'Main Sanctuary',
      ageGroup: 'Ages 12+',
      image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=250&fit=crop'
    },
    {
      id: 'community-service',
      title: 'Community Service',
      category: 'Service',
      description: 'Outreach programs serving the local community through food drives, charity work, and assistance to those in need.',
      servants: ['Deacon Mark', 'Service Committee'],
      schedule: 'Various Times',
      location: 'Community Outreach',
      ageGroup: 'All Welcome',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop'
    },
    {
      id: 'womens-ministry',
      title: "Women's Ministry",
      category: 'Fellowship',
      description: 'Supportive community for women featuring Bible study, prayer meetings, and social activities focused on spiritual growth.',
      servants: ['Sister Margaret', 'Women Leadership Team'],
      schedule: 'Saturdays 2:00 PM - 4:00 PM',
      location: 'Fellowship Hall',
      ageGroup: 'Adult Women',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop'
    },
    {
      id: 'mens-fellowship',
      title: "Men's Fellowship",
      category: 'Fellowship',
      description: 'Brotherhood focused on spiritual development, community service, and supporting each other in faith and family life.',
      servants: ['Brother Joseph', 'Men Leadership Team'],
      schedule: 'Saturdays 8:00 AM - 10:00 AM',
      location: 'Community Center',
      ageGroup: 'Adult Men',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    }
  ];

  const categories = [
    { name: 'Education', color: 'bg-blue-500' },
    { name: 'Youth', color: 'bg-green-500' },
    { name: 'Worship', color: 'bg-orthodox-gold' },
    { name: 'Service', color: 'bg-purple-500' },
    { name: 'Fellowship', color: 'bg-orange-500' }
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : 'bg-gray-500';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-orthodox-burgundy mb-6">
            Ministries & Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover ways to grow in faith, serve others, and build meaningful connections within our church community.
          </p>
        </div>

        {/* Ministry Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className={`${category.color} text-white rounded-lg p-4 mb-2`}>
                <span className="font-semibold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ministries.map((ministry) => (
            <Card key={ministry.id} className="hover:shadow-lg transition-shadow duration-300 border-orthodox-gold-light overflow-hidden">
              <div className="relative">
                <img 
                  src={ministry.image} 
                  alt={ministry.title}
                  className="w-full h-48 object-cover"
                />
                <Badge 
                  className={`absolute top-3 right-3 ${getCategoryColor(ministry.category)} text-white`}
                >
                  {ministry.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-orthodox-burgundy font-serif">
                  {ministry.title}
                </CardTitle>
                <CardDescription>
                  {ministry.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-orthodox-gold" />
                    {ministry.schedule}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-orthodox-gold" />
                    {ministry.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-orthodox-gold" />
                    {ministry.ageGroup}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-orthodox-burgundy mb-2">Leaders:</h4>
                  <div className="flex flex-wrap gap-1">
                    {ministry.servants.map((servant, index) => (
                      <Badge key={index} variant="outline" className="border-orthodox-gold text-orthodox-burgundy">
                        {servant}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-orthodox-burgundy hover:bg-orthodox-burgundy-light text-white"
                >
                  <Link to={`/services/${ministry.id}`}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-orthodox-burgundy text-white rounded-lg p-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-xl mb-6 text-orthodox-ivory-dark">
            Whether you're new to faith or a lifelong believer, there's a place for you in our ministries. 
            Come and be part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orthodox-gold text-orthodox-burgundy hover:bg-orthodox-gold-light font-semibold"
            >
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-orthodox-gold text-orthodox-gold hover:bg-orthodox-gold hover:text-orthodox-burgundy"
            >
              Visit This Sunday
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
