import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import invoiceImg from '@/assets/QuickInvoice.png';
import complainImg from '@/assets/HCMS.png';
import bankingImg from '@/assets/bankingimag.png';
import examImg from '@/assets/e-examination-portal.png';

const projects = [
  {
    title: 'Quick Invoice Generator',
    description: 'A streamlined web application for generating professional invoices with real-time calculations, PDF export, and client management features.',
    techStack: ['React.js', 'Spring Boot', 'MongoDB', 'Clerk','Cloudinary'],
    highlights: ['Secure authentication & webhook integration using Clerk', 'PDF export with jsPDF and html2canvas', 'Email sharing with automatic PDF attachments'],
    image: invoiceImg,
    githubUrl: 'https://github.com/CindiAnishKumar/QuickInvoice-Invoice-Generator',
    demoUrl: 'https://invoice-generator-demo.vercel.app',
    featured: true
  },
  {
    title: 'Complain Hub System',
    description: 'Comprehensive complaint management system with role-based access, ticket tracking, and automated notifications for efficient issue resolution.',
    techStack: [ 'React.js','Node Js', 'MonogDb', 'Tailwind CSS'],
    highlights: ['Role-based access for students and wardens', 'Integrated Google Maps API for location context and navigation', 'Categorical Classified Complaints'],
    image: complainImg,
    githubUrl: 'https://github.com/CindiAnishKumar/Hostel-Complaint-Management-System',
    demoUrl: 'https://complain-hub-demo.netlify.app',
    featured: true
  },
  {
    title: 'Banking Management System',
    description: 'A desktop-based banking application enabling users to manage accounts, perform secure transactions, and access real-time financial reports with a persistent MySQL backend.',
    techStack: ['Java', 'Swing ', 'AWT','MySQL' ],
    highlights: [ 'User-friendly GUI built with Java Swing and AWT','Real-time deposit, withdrawal, and transfer transactions', 'Transaction history and balance tracking',],
    image: bankingImg,
    githubUrl: 'https://github.com/cindianish/banking-system',
    demoUrl: 'https://banking-system-demo.herokuapp.com',
    featured: false
  },
  {
    title: 'E-Examination Portal',
    description: 'Digital examination platform with automated grading, time management, and comprehensive analytics for educational institutions.',
    techStack: ['React.js','PHP',  'MySql', 'WebSocket'],
    highlights: ['Automated grading ','Secure Exam submission.', 'Real-time monitoring', ],
    image: examImg,
    githubUrl: 'https://github.com/CindiAnishKumar/e-examination-portal',
    demoUrl: 'https://e-exam-portal-demo.com',
    featured: false
  }
];

const ProjectsSection = () => {
  const handleGithubClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          🚀 <span className="text-gradient">My Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`glass-card overflow-hidden rounded-2xl group hover:scale-[1.02] transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary/30' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-primary/30">
                    Featured Project
                  </Badge>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gradient-accent">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center">
                        <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-muted/50 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleGithubClick(project.githubUrl)}
                    className="btn-ghost-neon px-4 py-2 rounded-lg text-sm flex items-center gap-2 flex-1 justify-center hover:scale-105 transition-transform"
                  >
                    <Github size={16} />
                    Code
                  </button>
                  <button 
                    onClick={() => handleDemoClick(project.demoUrl)}
                    className="btn-neon px-4 py-2 rounded-lg text-sm flex items-center gap-2 flex-1 justify-center hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;