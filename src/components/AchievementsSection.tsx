import React from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Star, Award, Users } from 'lucide-react';

const achievements = [
  {
    title: 'Smart India Hackathon 2023',
    description: 'Participated and selected in campus rounds for the prestigious national-level hackathon',
    icon: Trophy,
    highlight: 'Campus Selection',
    year: '2023'
  },
  {
    title: 'Polycet Exam Excellence',
    description: 'Achieved 2047 Rank in Telangana State Polytechnic Common Entrance Test',
    icon: Star,
    highlight: 'State Rank',
    year: '2019'
  },
  {
    title: 'NMMS Scholarship',
    description: 'Selected for National Means-cum-Merit Scholarship Test for academic excellence',
    icon: Award,
    highlight: 'Scholarship Award',
    year: '2018'
  }
];

const responsibilities = [
  {
    title: 'Code Club Member',
    role: 'Publicity Team',
    organization: 'RGUKT Basar',
    description: 'Promoted coding culture and organized technical events for student community',
    icon: Users
  },
  {
    title: 'Fresher\'s Event Host',
    role: 'Event Organizer',
    organization: 'RGUKT Basar',
    description: 'Successfully hosted and coordinated fresher welcome events for new students',
    icon: Star
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Achievements & Leadership
        </h2>
        
        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-accent">
            🏆 Academic & Competition Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="glass-card p-6 rounded-2xl group pulse-glow"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-1 bg-primary/20 text-primary rounded-full font-semibold">
                        {achievement.highlight}
                      </span>
                      <span>{achievement.year}</span>
                    </div>
                    <h4 className="font-bold text-gradient-accent text-lg">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Positions of Responsibility */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-accent">
            👥 Positions of Responsibility
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {responsibilities.map((responsibility, index) => (
              <Card 
                key={responsibility.title}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <responsibility.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-gradient text-lg">
                      {responsibility.title}
                    </h4>
                    <div className="text-sm text-primary font-semibold">
                      {responsibility.role} • {responsibility.organization}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {responsibility.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;