import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Cloud, Award } from 'lucide-react';

const internships = [
  {
    title: 'Cloud/DevOps Internship',
    company: 'Abhi Trainings',
    duration: '3 Months',
    description: 'Gained hands-on experience with cloud infrastructure, containerization, and DevOps practices.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'],
    achievements: ['Deployed scalable applications', 'Automated deployment pipelines', 'Cloud cost optimization']
  }
];

const InternshipsSection = () => {
  return (
    <section id="internships" className="section-padding bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {internships.map((internship, index) => (
            <Card key={internship.title} className="glass-card p-6 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gradient-accent mb-2">
                      {internship.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="font-semibold text-primary">{internship.company}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{internship.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {internship.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-muted/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {internship.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-center text-sm text-muted-foreground">
                            <Award className="w-3 h-3 mr-2 text-accent" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;