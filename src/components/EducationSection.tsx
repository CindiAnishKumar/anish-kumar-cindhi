import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "RGUKT Basar (Rajiv Gandhi University of Knowledge Technologies)",
      duration: "2021 - 2025",
      location: "Nirmal, Telangana",
      status: "Fresher",
      grade: "CGPA: 8.4/10",
      highlights: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Web Technologies",
        "LLMS"
      ]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "RGUKT Basar (Rajiv Gandhi University of Knowledge Technologies)",
      duration: "2019 - 2021",
      location: "Nirmal, Telangana",
      status: "Completed",
      grade: "CGPA: 9.67/10",
      highlights: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "English"
      ]
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

        <div className="space-y-6 lg:space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 lg:p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                {/* Header with icon and status */}
                <div className="flex items-start justify-between gap-4">
                  <div className="bg-primary/20 backdrop-blur-md rounded-full p-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      {edu.status}
                    </Badge>
                    <div className="flex items-center gap-2 text-accent">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-semibold mb-4 text-lg">
                    {edu.institution}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {edu.highlights && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">📚 Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs px-2 py-1 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
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