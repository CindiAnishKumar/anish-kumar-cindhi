import React, { useEffect, useState } from 'react';
import { Home, User, Code, Briefcase, Mail, Menu, X, FileText } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: 'hero', icon: Home },
    { name: 'About', href: 'about', icon: User },
    { name: 'Projects', href: 'projects', icon: Code },
    { name: 'Experience', href: 'internships', icon: Briefcase },
    { name: 'Contact', href: 'contact', icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-3 text-xl font-bold hover:scale-105 transition-all cursor-pointer"
          >
            {/* Desktop: Logo first, then name */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-neon">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-xl opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
              </div>
              <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                anish<span className="text-accent">.dev</span>
              </span>
            </div>
            
            {/* Mobile: Name first, then logo */}
            <div className="sm:hidden flex items-center gap-2">
              <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-lg">
                anish<span className="text-accent">.dev</span>
              </span>
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center shadow-neon">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-lg opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href
                      ? 'text-primary bg-primary/10 shadow-neon'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </button>
              );
            })}
            
            {/* Download Resume Button */}
            <button
              onClick={() => scrollToSection('resume')}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-neon transition-all duration-300 hover:scale-105"
            >
              📄 Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors z-50 relative"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Slide-in Drawer */}
      <div className={`md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 max-w-[85vw] glass-card border-l border-border/20 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 space-y-4 overflow-y-auto h-full">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeSection === item.href
                      ? 'text-primary bg-primary/15 shadow-neon'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
          
          {/* Mobile Resume Button */}
          <button
            onClick={() => {
              scrollToSection('resume');
              setIsMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-neon transition-all duration-300 hover:scale-105 mt-6"
          >
            <FileText className="w-5 h-5" />
            📄 Download Resume
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-16"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;