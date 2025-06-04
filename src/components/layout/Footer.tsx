
import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orthodox-burgundy text-orthodox-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orthodox-gold rounded-full flex items-center justify-center">
                <span className="text-orthodox-burgundy font-bold">✚</span>
              </div>
              <h3 className="font-serif font-semibold text-xl">St. Mark Coptic Orthodox Church</h3>
            </div>
            <p className="text-orthodox-ivory-dark mb-4">
              A community of faith dedicated to preserving the ancient Coptic Orthodox tradition while serving our local community with love and compassion.
            </p>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-orthodox-gold" />
              Service Times
            </h4>
            <div className="space-y-2 text-orthodox-ivory-dark">
              <div>
                <strong>Divine Liturgy:</strong> Sundays 9:00 AM
              </div>
              <div>
                <strong>Vespers:</strong> Saturdays 6:00 PM
              </div>
              <div>
                <strong>Bible Study:</strong> Wednesdays 7:00 PM
              </div>
              <div>
                <strong>Youth Meeting:</strong> Fridays 7:00 PM
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orthodox-gold" />
              Contact Information
            </h4>
            <div className="space-y-2 text-orthodox-ivory-dark">
              <div>123 Faith Street<br />Orthodox City, OC 12345</div>
              <div>Phone: (555) 123-4567</div>
              <div>Email: info@stmarkcoptic.org</div>
            </div>
          </div>
        </div>

        <div className="border-t border-orthodox-burgundy-light mt-8 pt-8 text-center text-orthodox-ivory-dark">
          <p>&copy; 2024 St. Mark Coptic Orthodox Church. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with love for our community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
