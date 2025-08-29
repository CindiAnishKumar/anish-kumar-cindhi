import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Award, BookOpen, Cloud } from 'lucide-react';

const certificates = [
  {
    title: 'IIITH Remote Internship',
    subtitle: 'Introduction to Natural Language Processing',
    issuer: 'IIIT Hyderabad',
    year: '2023',
    icon: BookOpen,
    color: 'from-primary to-secondary'
  },
  {
    title: 'AWS Cloud DevOps Internship',
    subtitle: 'Cloud & DevOps Practices',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: Cloud,
    color: 'from-secondary to-accent'
  },
  {
    title: 'UWH Certificate',
    subtitle: 'Soft Skills Development Program',
    issuer: 'UWH Training Institute',
    year: '2023',
    icon: Award,
    color: 'from-accent to-primary'
  }
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient-accent">
          Certificates & Training
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-gradient mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.subtitle}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    {cert.issuer}
                  </span>
                  <Badge variant="secondary" className="bg-muted/50">
                    {cert.year}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;