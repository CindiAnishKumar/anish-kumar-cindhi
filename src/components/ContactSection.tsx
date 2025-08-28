import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Send, Sparkles } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Message from ' + formData.name);
      const body = encodeURIComponent(
        `Hi Cindhi,\n\nI came across your portfolio and would like to get in touch.\n\n---\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'General Inquiry'}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      );
      const mailtoLink = `mailto:cindidev@example.com?subject=${subject}&body=${body}`;
      
      // Create a temporary link element and click it to ensure proper email client opening
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Show success message
      alert('Opening your email app with the message ready to send! 📧');
      
    } catch (error) {
      console.error('Error opening email client:', error);
      // Fallback: Copy email to clipboard or show contact info
      const fallbackMessage = `Please contact me directly at:\n\nEmail: cindidev@example.com\nPhone: +91 98765 43210\n\nOr connect with me on LinkedIn: linkedin.com/in/cindianish`;
      alert(fallbackMessage);
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="glass-card p-6 lg:p-8 rounded-2xl">
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

          {/* Contact Form */}
          <Card className="glass-card p-6 lg:p-8 rounded-2xl">
            <h3 className="text-xl lg:text-2xl font-bold mb-6 text-gradient-accent">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/20 border-border/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/20 border-border/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-muted/20 border-border/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-muted/20 border-border/20 focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full btn-neon text-white font-semibold py-3 gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;