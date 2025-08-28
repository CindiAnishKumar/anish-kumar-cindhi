import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const ResumeSection = () => {
  const handleDownload = () => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = '/resume-cindi-anish-kumar.pdf'; // You would put your actual resume file here
    link.download = 'Cindi_Anish_Kumar_Resume.pdf';
    link.click();
  };

  const handleView = () => {
    // Open resume in new tab
    window.open('/resume-cindi-anish-kumar.pdf', '_blank');
  };

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      content: 'B.Tech in CSE - RGUKT Basar (Final Year)'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      content: '2+ Internships in Cloud & DevOps'
    },
    {
      icon: Award,
      title: 'Achievements',
      content: 'SIH 2023 Participant, NMMS Scholar'
    },
    {
      icon: FileText,
      title: 'Projects',
      content: '15+ Full-Stack Projects Completed'
    }
  ];

  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Resume & CV
          </h2>
          <p className="text-xl text-muted-foreground">
            Download or view my complete professional profile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Preview Card */}
          <Card className="glass-card p-8 rounded-2xl text-center">
            <div className="mb-6">
              <div className="w-24 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <FileText size={48} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gradient-accent mb-2">
                Professional Resume
              </h3>
              <p className="text-muted-foreground text-sm">
                Complete overview of my skills, experience, and achievements
              </p>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={handleDownload}
                variant="neon" 
                className="w-full py-3"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
              <Button 
                onClick={handleView}
                variant="ghost-neon" 
                className="w-full py-3"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Online
              </Button>
            </div>
          </Card>

          {/* Quick Highlights */}
          <Card className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gradient-accent mb-6">
              Quick Highlights
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-center text-muted-foreground">
                📧 For detailed portfolio or custom CV format, 
                <span className="text-primary font-semibold"> contact me directly</span>
              </p>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <Card className="glass-card p-6 rounded-2xl mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">4+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">8+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ResumeSection;