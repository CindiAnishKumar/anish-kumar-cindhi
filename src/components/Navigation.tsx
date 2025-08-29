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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-border/20 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-3 text-xl font-bold hover:scale-105 transition-all cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-neon">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-xl opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
            </div>
            <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              anish<span className="text-accent">.dev</span>
            </span>
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
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16  right-0 w-1/2 h-[50vh] overflow-y-auto bg-purple-800 glass-card border-l border-border/20 backdrop-blur-xl z-50">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </button>
              );
            })}
            
            {/* Mobile Resume Button */}
            <button
              onClick={() => {
                scrollToSection('resume');
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-neon transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
               Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;