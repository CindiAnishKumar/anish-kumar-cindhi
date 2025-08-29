import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import developerHero from '@/assets/heroimage.png';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
  
  const professions = [
    'Full Stack Developer',
    'Java | Spring Boot Developer',
    'MERN Stack Developer',
    'DevOps Engineer'
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const currentProfession = professions[currentProfessionIndex];
    let i = 0;
    
    const typeWriter = () => {
      if (i < currentProfession.length) {
        setDisplayText(currentProfession.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      } else {
        // Wait 2 seconds before moving to next profession
        setTimeout(() => {
          setCurrentProfessionIndex((prev) => (prev + 1) % professions.length);
        }, 2000);
      }
    };

    // Clear text before starting new profession
    setDisplayText('');
    setTimeout(typeWriter, 500);
  }, [currentProfessionIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      {/* Floating particles background */}
      <div className="floating-particles">
        <div className="particle w-2 h-2 top-1/4 left-1/4" style={{ animationDelay: '0s' }}></div>
        <div className="particle w-3 h-3 top-3/4 left-1/3" style={{ animationDelay: '2s' }}></div>
        <div className="particle w-1 h-1 top-1/2 right-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="particle w-2 h-2 top-1/6 right-1/3" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-16 lg:pt-0">
          {/* Content - Text First on Mobile */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left order-1 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-base md:text-lg text-muted-foreground/80 mb-2">
                  Hi there 👋 I'm
                </p>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gradient break-words">
                  CINDHI ANISH KUMAR
                </h1>
                
                <div className="h-8 md:h-10 flex items-center justify-center lg:justify-start mt-4">
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-mono break-words">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-neon flex items-center gap-2 mx-auto lg:mx-0"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Image - Second on Mobile */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2 w-full">
            <div className="relative w-full max-w-xs lg:max-w-sm">
              <img 
                src={developerHero} 
                alt="Developer working at desk with code editor" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;