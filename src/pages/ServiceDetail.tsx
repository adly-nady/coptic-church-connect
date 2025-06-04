
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // This would normally come from an API or database
  const serviceDetails = {
    'sunday-school': {
      title: 'Sunday School',
      category: 'Education',
      description: 'Our Sunday School program provides comprehensive religious education for all ages, from toddlers to adults. We focus on Bible studies, church history, Coptic traditions, and moral teachings that help build strong foundations of faith.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
      schedule: [
        { time: '10:30 AM - 11:15 AM', group: 'Ages 3-6: Bible Stories & Crafts' },
        { time: '10:30 AM - 11:30 AM', group: 'Ages 7-12: Bible Study & Activities' },
        { time: '10:30 AM - 12:00 PM', group: 'Teens: Advanced Bible Study' },
        { time: '11:30 AM - 12:30 PM', group: 'Adult Class: Theology & History' }
      ],
      servants: [
        {
          name: 'Father Michael Mikhail',
          role: 'Lead Teacher - Adult Class',
          bio: 'Father Michael oversees the adult education program and teaches advanced theology.',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
        },
        {
          name: 'Sister Mary Habib',
          role: 'Children\'s Coordinator',
          bio: 'Sister Mary has been teaching children for over 10 years with a passion for making faith fun.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face'
        },
        {
          name: 'Deacon John Salib',
          role: 'Youth Teacher',
          bio: 'Deacon John connects with teens through interactive discussions and practical faith applications.',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
        }
      ],
      requirements: 'Open to all ages. Children under 5 should be accompanied by a parent.',
      contact: 'sundayschool@stmarkcoptic.org'
    },
    'youth-ministry': {
      title: 'Youth Ministry',
      category: 'Youth',
      description: 'Our Youth Ministry creates a vibrant community for teenagers and young adults to grow in faith, build friendships, and serve others. We combine traditional Orthodox teachings with contemporary approaches to engage young hearts and minds.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop',
      schedule: [
        { time: '7:00 PM - 7:30 PM', group: 'Opening Prayer & Fellowship' },
        { time: '7:30 PM - 8:15 PM', group: 'Bible Study or Topic Discussion' },
        { time: '8:15 PM - 8:45 PM', group: 'Activities & Games' },
        { time: '8:45 PM - 9:00 PM', group: 'Closing Prayer & Announcements' }
      ],
      servants: [
        {
          name: 'Father David Dimitri',
          role: 'Youth Pastor',
          bio: 'Father David brings energy and wisdom to guide our youth in their spiritual journey.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
        },
        {
          name: 'Sarah Mikhail',
          role: 'Youth Leader',
          bio: 'Sarah organizes activities and mentors young women in the group.',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
        }
      ],
      requirements: 'Ages 13-25. Regular attendance encouraged for building strong relationships.',
      contact: 'youth@stmarkcoptic.org'
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen py-12 text-center">
        <h1 className="text-2xl font-bold text-orthodox-burgundy">Service not found</h1>
        <Link to="/services" className="text-orthodox-gold hover:underline mt-4 inline-block">
          Return to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/services" 
          className="inline-flex items-center text-orthodox-burgundy hover:text-orthodox-gold mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <Badge className="bg-orthodox-gold text-orthodox-burgundy mb-4">
                {service.category}
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-8 border-orthodox-gold-light">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed text-gray-700">
              {service.description}
            </p>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="mb-8 border-orthodox-gold-light">
          <CardHeader>
            <CardTitle className="flex items-center text-orthodox-burgundy font-serif">
              <Calendar className="w-5 h-5 mr-2 text-orthodox-gold" />
              Weekly Schedule - Sundays
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {service.schedule.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-orthodox-ivory-dark rounded-lg">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <Clock className="w-4 h-4 mr-2 text-orthodox-gold" />
                    <span className="font-semibold text-orthodox-burgundy">{item.time}</span>
                  </div>
                  <span className="text-gray-600 sm:text-right">{item.group}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Servants/Leaders */}
        <Card className="mb-8 border-orthodox-gold-light">
          <CardHeader>
            <CardTitle className="flex items-center text-orthodox-burgundy font-serif">
              <Users className="w-5 h-5 mr-2 text-orthodox-gold" />
              Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.servants.map((servant, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img 
                    src={servant.image} 
                    alt={servant.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orthodox-gold"
                  />
                  <div>
                    <h4 className="font-semibold text-orthodox-burgundy">{servant.name}</h4>
                    <p className="text-orthodox-gold font-medium text-sm">{servant.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{servant.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Requirements & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-orthodox-gold-light">
            <CardHeader>
              <CardTitle className="text-orthodox-burgundy font-serif">Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{service.requirements}</p>
            </CardContent>
          </Card>

          <Card className="border-orthodox-gold-light">
            <CardHeader>
              <CardTitle className="flex items-center text-orthodox-burgundy font-serif">
                <Mail className="w-5 h-5 mr-2 text-orthodox-gold" />
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                For questions or to get involved:
              </p>
              <a 
                href={`mailto:${service.contact}`}
                className="text-orthodox-gold hover:text-orthodox-burgundy font-medium"
              >
                {service.contact}
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-orthodox-burgundy text-white border-orthodox-burgundy">
          <CardContent className="p-8 text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">
              Ready to Join {service.title}?
            </h2>
            <p className="text-orthodox-ivory-dark mb-6">
              Come and be part of our growing community. No prior experience necessary - just bring an open heart!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orthodox-gold text-orthodox-burgundy hover:bg-orthodox-gold-light font-semibold"
              >
                Join This Ministry
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-orthodox-gold text-orthodox-gold hover:bg-orthodox-gold hover:text-orthodox-burgundy"
              >
                Visit This Sunday
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetail;
