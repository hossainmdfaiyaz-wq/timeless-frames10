import { Camera, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border section-padding py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-accent" />
            <span className="text-2xl font-display font-bold gradient-text">FAIYAZ</span>
          </div>
          
          {/* Tagline */}
          <p className="text-muted-foreground mb-6">
            Capturing moments, telling stories through the lens.
          </p>
          
          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>&copy; 2024 MD FAIYAZ HOSSAIN. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for photography enthusiasts.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;