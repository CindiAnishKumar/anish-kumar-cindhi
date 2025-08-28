import React from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin, Sparkles } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'cindidev@example.com',
    href: 'mailto:cindidev@example.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/cindianish',
    href: 'https://github.com/cindianish'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/cindianish',
    href: 'https://linkedin.com/in/cindianish'
  }
];

const ContactSection = () => {

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Let's build something amazing together <Sparkles className="inline w-5 h-5 text-accent" />
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <Card className="glass-card p-6 lg:p-8 rounded-2xl max-w-2xl w-full">
            <h3 className="text-xl lg:text-2xl font-bold mb-6 text-gradient-accent">
              Let's Connect
            </h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/20 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="font-semibold text-primary truncate">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="border-t border-border/20 pt-6">
              <h4 className="text-lg font-bold mb-4 text-gradient-accent">
                What I'm Looking For
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 shrink-0"></span>
                  <span className="text-sm">Full-stack Development Opportunities</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 shrink-0"></span>
                  <span className="text-sm">Open Source Collaborations</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></span>
                  <span className="text-sm">Freelance Projects</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 shrink-0"></span>
                  <span className="text-sm">Tech Community Connections</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;