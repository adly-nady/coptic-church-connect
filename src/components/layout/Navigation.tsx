
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/services', label: 'Services' },
    { path: '/map', label: 'Location' },
    { path: '/qa', label: 'Q&A' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-orthodox-burgundy text-orthodox-ivory shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orthodox-gold rounded-full flex items-center justify-center">
                <span className="text-orthodox-burgundy font-bold text-sm">✚</span>
              </div>
              <span className="font-serif font-semibold text-lg">St. Mark Coptic Orthodox Church</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                  isActive(item.path)
                    ? "bg-orthodox-gold text-orthodox-burgundy"
                    : "text-orthodox-ivory hover:bg-orthodox-burgundy-light hover:text-orthodox-gold"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-orthodox-ivory hover:bg-orthodox-burgundy-light"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slide-in-right">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-orthodox-burgundy-light">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                    isActive(item.path)
                      ? "bg-orthodox-gold text-orthodox-burgundy"
                      : "text-orthodox-ivory hover:bg-orthodox-gold hover:text-orthodox-burgundy"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
