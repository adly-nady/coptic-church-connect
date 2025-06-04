
import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Car, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Map = () => {
  const [activeLocation, setActiveLocation] = useState('main');

  const locations = [
    {
      id: 'main',
      name: 'Main Church',
      address: '123 Faith Street, Orthodox City, OC 12345',
      phone: '(555) 123-4567',
      email: 'info@stmarkcoptic.org',
      description: 'Our main sanctuary where we hold Divine Liturgy, Vespers, and major celebrations.',
      services: ['Divine Liturgy', 'Vespers', 'Weddings', 'Funerals'],
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 'community',
      name: 'Community Center',
      address: '125 Faith Street, Orthodox City, OC 12345',
      phone: '(555) 123-4568',
      email: 'community@stmarkcoptic.org',
      description: 'Modern facility for youth programs, events, and community gatherings.',
      services: ['Youth Ministry', 'Community Events', 'Sunday School', 'Meetings'],
      coordinates: { lat: 40.7138, lng: -74.0070 }
    },
    {
      id: 'bookstore',
      name: 'Church Bookstore',
      address: '127 Faith Street, Orthodox City, OC 12345',
      phone: '(555) 123-4569',
      email: 'bookstore@stmarkcoptic.org',
      description: 'Religious books, icons, and Orthodox Christian resources.',
      services: ['Religious Books', 'Icons', 'Church Supplies', 'Gifts'],
      coordinates: { lat: 40.7118, lng: -74.0050 }
    }
  ];

  const currentLocation = locations.find(loc => loc.id === activeLocation);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-orthodox-burgundy mb-6">
            Visit Our Church
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find us in the heart of Orthodox City, where our doors are always open to welcome you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location Sidebar */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-orthodox-burgundy mb-4">
              Our Locations
            </h2>
            {locations.map((location) => (
              <Card 
                key={location.id}
                className={`cursor-pointer transition-all duration-200 ${
                  activeLocation === location.id 
                    ? 'border-orthodox-gold bg-orthodox-ivory-dark' 
                    : 'border-orthodox-gold-light hover:border-orthodox-gold'
                }`}
                onClick={() => setActiveLocation(location.id)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-orthodox-burgundy font-serif text-lg">
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mt-0.5 text-orthodox-gold flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mock Map */}
            <Card className="border-orthodox-gold-light">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-blue-100 to-green-100 h-80 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-orthodox-burgundy mx-auto mb-4" />
                      <h3 className="font-serif text-xl font-bold text-orthodox-burgundy mb-2">
                        {currentLocation?.name}
                      </h3>
                      <p className="text-gray-600 max-w-sm">
                        Interactive map will be displayed here with precise location and directions.
                      </p>
                      <Button 
                        className="mt-4 bg-orthodox-burgundy hover:bg-orthodox-burgundy-light text-white"
                        onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(currentLocation?.address || '')}`)}
                      >
                        <Car className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                  
                  {/* Mock location markers */}
                  <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-orthodox-burgundy rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-orthodox-gold rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-orthodox-burgundy rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Details */}
            {currentLocation && (
              <Card className="border-orthodox-gold-light">
                <CardHeader>
                  <CardTitle className="text-orthodox-burgundy font-serif text-2xl">
                    {currentLocation.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {currentLocation.description}
                  </p>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-orthodox-burgundy mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-orthodox-gold flex-shrink-0" />
                          <span className="text-sm text-gray-600">{currentLocation.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-orthodox-gold" />
                          <a href={`tel:${currentLocation.phone}`} className="text-sm text-orthodox-burgundy hover:text-orthodox-gold">
                            {currentLocation.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-orthodox-gold" />
                          <a href={`mailto:${currentLocation.email}`} className="text-sm text-orthodox-burgundy hover:text-orthodox-gold">
                            {currentLocation.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-orthodox-burgundy mb-3">Available Services</h4>
                      <div className="space-y-1">
                        {currentLocation.services.map((service, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <ArrowRight className="w-3 h-3 text-orthodox-gold" />
                            <span className="text-sm text-gray-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Service Times */}
        <Card className="mt-12 border-orthodox-gold-light">
          <CardHeader>
            <CardTitle className="text-orthodox-burgundy font-serif text-2xl flex items-center">
              <Clock className="w-6 h-6 mr-3 text-orthodox-gold" />
              Service Times
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-orthodox-ivory-dark rounded-lg">
                <h4 className="font-semibold text-orthodox-burgundy mb-2">Divine Liturgy</h4>
                <p className="text-gray-600">Sundays 9:00 AM</p>
              </div>
              <div className="text-center p-4 bg-orthodox-ivory-dark rounded-lg">
                <h4 className="font-semibold text-orthodox-burgundy mb-2">Vespers</h4>
                <p className="text-gray-600">Saturdays 6:00 PM</p>
              </div>
              <div className="text-center p-4 bg-orthodox-ivory-dark rounded-lg">
                <h4 className="font-semibold text-orthodox-burgundy mb-2">Bible Study</h4>
                <p className="text-gray-600">Wednesdays 7:00 PM</p>
              </div>
              <div className="text-center p-4 bg-orthodox-ivory-dark rounded-lg">
                <h4 className="font-semibold text-orthodox-burgundy mb-2">Youth Meeting</h4>
                <p className="text-gray-600">Fridays 7:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Directions Note */}
        <div className="mt-8 text-center bg-orthodox-burgundy text-white rounded-lg p-6">
          <h3 className="font-serif text-xl font-bold mb-2">First Time Visiting?</h3>
          <p className="text-orthodox-ivory-dark mb-4">
            We'd love to welcome you! Parking is available on-site, and our ushers will be happy to help you find your way.
          </p>
          <Button 
            size="lg" 
            className="bg-orthodox-gold text-orthodox-burgundy hover:bg-orthodox-gold-light font-semibold"
          >
            Plan Your Visit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Map;
