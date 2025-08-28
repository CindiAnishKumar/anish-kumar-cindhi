import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "RGUKT Basar (Rajiv Gandhi University of Knowledge Technologies)",
      year: "2021 - 2025",
      location: "Nirmal, Telangana",
      description: "Final year student specializing in Software Engineering, Data Structures & Algorithms, and Web Technologies."
    },
    {
      degree: "Intermediate (MPC)",
      institution: "RGUKT Basar",
      year: "2019 - 2021",
      location: "Nirmal, Telangana",
      description: "Completed with Mathematics, Physics, Chemistry focus."
    }
  ];

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-accent">
            🎓 Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and learning milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 backdrop-blur-md rounded-full p-2 mt-1">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-md text-primary font-semibold mb-2">
                    {edu.institution}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;