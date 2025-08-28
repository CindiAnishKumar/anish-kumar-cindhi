import React from 'react';
import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient-accent">
          About Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Full-Stack Developer</span> and 
                final year Computer Science Engineering student at RGUKT Basar.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey spans from <span className="text-secondary font-semibold">Spring Boot</span> backend 
                development to <span className="text-accent font-semibold">React.js frontend</span> crafting, 
                with growing expertise in <span className="text-primary font-semibold">Cloud & DevOps</span> practices.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always excited to learn new technologies and contribute to innovative 
                projects that make a real-world impact. Currently exploring 
                <span className="text-secondary font-semibold"> AI/ML</span> and 
                <span className="text-accent font-semibold"> microservices architecture</span>.
              </p>
            </div>
          </div>

          {/* Right: Profile Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Cindhi Anish Kumar - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;