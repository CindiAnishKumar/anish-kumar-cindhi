import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import InternshipsSection from '@/components/InternshipsSection';
import EducationSection from '@/components/EducationSection';
import CertificatesSection from '@/components/CertificatesSection';
import AchievementsSection from '@/components/AchievementsSection';

import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="internships">
        <InternshipsSection />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="certificates">
        <CertificatesSection />
      </div>
      <div id="achievements">
        <AchievementsSection />
      </div>
      <div id="resume">
        <ResumeSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
