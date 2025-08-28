import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding bg-card/10 border-t border-muted/20">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by{' '}
            <span className="text-gradient font-semibold">Cindi Anish Kumar</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 • Full-stack Developer • Let's build the future together ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;