
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const clergy = [
    {
      name: "Father Michael Mikhail",
      title: "Senior Pastor",
      bio: "Father Michael has served our community for over 15 years, bringing deep theological knowledge and pastoral care to our congregation.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Father David Dimitri",
      title: "Associate Pastor",
      bio: "Father David specializes in youth ministry and has been instrumental in growing our Sunday School program.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Deacon Mark Safwat",
      title: "Deacon",
      bio: "Deacon Mark assists in liturgical services and leads our community outreach programs.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const timeline = [
    {
      year: "1985",
      event: "Church Founded",
      description: "St. Mark Coptic Orthodox Church was established by a small group of faithful families."
    },
    {
      year: "1992",
      event: "First Building",
      description: "Construction completed on our first church building to accommodate our growing congregation."
    },
    {
      year: "2005",
      event: "Community Center",
      description: "Added a community center to host youth programs, events, and educational activities."
    },
    {
      year: "2018",
      event: "Sanctuary Expansion",
      description: "Expanded the main sanctuary to welcome more families and enhance our worship experience."
    },
    {
      year: "2024",
      event: "Digital Ministry",
      description: "Launched online services and digital outreach to serve our community better."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-orthodox-burgundy mb-6">
            About Our Church
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our rich history, dedicated clergy, and the ancient traditions that guide our faith community.
          </p>
        </div>

        {/* Church History */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-orthodox-burgundy mb-8 text-center">
            Our History
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-orthodox-gold-light">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  St. Mark Coptic Orthodox Church has been a cornerstone of faith in our community for nearly four decades. 
                  Founded in 1985 by a devoted group of Coptic Orthodox families, our church has grown from a small gathering 
                  to a vibrant community of over 200 families.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  We are proud to preserve the ancient traditions of the Coptic Orthodox Church, which traces its roots back 
                  to Saint Mark the Evangelist in first-century Alexandria. Our liturgy, practiced in both Coptic and English, 
                  connects us to nearly 2,000 years of unbroken Christian tradition.
                </p>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-orthodox-burgundy mb-6 text-center">
                Church Timeline
              </h3>
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="bg-orthodox-gold text-orthodox-burgundy font-bold py-2 px-3 rounded-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Card className="border-orthodox-gold-light">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-orthodox-burgundy mb-2">{item.event}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clergy Section */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-orthodox-burgundy mb-8 text-center">
            Our Clergy
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our dedicated priests and deacons are here to guide, support, and serve our community 
            with wisdom, compassion, and unwavering faith.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clergy.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-orthodox-gold-light">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-orthodox-gold"
                    />
                  </div>
                  <CardTitle className="text-orthodox-burgundy font-serif">{member.name}</CardTitle>
                  <CardDescription className="text-orthodox-gold font-semibold">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mt-16 bg-orthodox-ivory-dark rounded-lg p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-orthodox-burgundy mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              To preserve and share the ancient faith of the Coptic Orthodox Church while building a loving, 
              inclusive community that serves God and neighbors. We strive to nurture spiritual growth, 
              provide pastoral care, and extend Christ's love through worship, education, and service to all.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
