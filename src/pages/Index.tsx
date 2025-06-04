
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-orthodox-burgundy to-orthodox-burgundy-light flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to St. Mark Coptic Orthodox Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orthodox-ivory-dark animate-fade-in">
            A community of faith rooted in ancient tradition, serving with modern love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-orthodox-gold text-orthodox-burgundy hover:bg-orthodox-gold-light font-semibold"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-orthodox-gold text-orthodox-gold hover:bg-orthodox-gold hover:text-orthodox-burgundy"
            >
              <Link to="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-orthodox-burgundy mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the rich traditions of the Coptic Orthodox faith and find your place in our loving community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300 border-orthodox-gold-light">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-orthodox-burgundy rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-orthodox-gold" />
              </div>
              <CardTitle className="text-orthodox-burgundy">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="mb-4">
                Join us for Holy Week services, youth gatherings, and community outreach programs.
              </CardDescription>
              <Button asChild variant="outline" className="border-orthodox-burgundy text-orthodox-burgundy hover:bg-orthodox-burgundy hover:text-white">
                <Link to="/events">View Calendar</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-orthodox-gold-light">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-orthodox-burgundy rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orthodox-gold" />
              </div>
              <CardTitle className="text-orthodox-burgundy">Ministries</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="mb-4">
                Explore our various ministries including Sunday School, Youth Group, and community service.
              </CardDescription>
              <Button asChild variant="outline" className="border-orthodox-burgundy text-orthodox-burgundy hover:bg-orthodox-burgundy hover:text-white">
                <Link to="/services">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-orthodox-gold-light">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-orthodox-burgundy rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orthodox-gold" />
              </div>
              <CardTitle className="text-orthodox-burgundy">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="mb-4">
                Find our location and get directions to join us for worship and fellowship.
              </CardDescription>
              <Button asChild variant="outline" className="border-orthodox-burgundy text-orthodox-burgundy hover:bg-orthodox-burgundy hover:text-white">
                <Link to="/map">Get Directions</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-orthodox-gold-light">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-orthodox-burgundy rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-orthodox-gold" />
              </div>
              <CardTitle className="text-orthodox-burgundy">Ask Questions</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="mb-4">
                Have questions about our faith or church? Our clergy are here to help and guide you.
              </CardDescription>
              <Button asChild variant="outline" className="border-orthodox-burgundy text-orthodox-burgundy hover:bg-orthodox-burgundy hover:text-white">
                <Link to="/qa">Ask Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Saint of the Day Section */}
      <section className="py-16 bg-orthodox-ivory-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-orthodox-burgundy mb-8">
            Saint of the Day
          </h2>
          <Card className="border-orthodox-gold">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-orthodox-burgundy mb-4">
                Saint Mark the Evangelist
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Saint Mark, the author of the second Gospel, was a companion of both Saint Peter and Saint Paul. 
                He is considered the founder of the Coptic Orthodox Church in Alexandria. His unwavering faith 
                and dedication to spreading the Gospel continues to inspire our community today.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orthodox-burgundy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Join Our Community of Faith
          </h2>
          <p className="text-xl mb-8 text-orthodox-ivory-dark">
            Whether you're seeking spiritual growth, community fellowship, or answers to life's questions, 
            you'll find a warm welcome at St. Mark Coptic Orthodox Church.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-orthodox-gold text-orthodox-burgundy hover:bg-orthodox-gold-light font-semibold"
          >
            <Link to="/about">Get to Know Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
