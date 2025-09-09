import { ArrowDown, Camera } from 'lucide-react';
import profilePicture from '@/assets/profile-picture-new.jpg';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/70 rounded-full blur-3xl"></div>
      </div>

      <div className="section-padding relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img src={profilePicture} alt="MD FAIYAZ HOSSAIN" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-accent shadow-2xl" />
              <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-2">
                <Camera className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="hero-title mb-6">
            FAIYAZ
            <br />
            HOSSAIN
          </h1>

          {/* Bio */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Capturing moments, telling stories through the lens.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#portfolio" className="btn-accent">
              View Portfolio
            </a>
            <a href="#about" className="btn-outline">
              Learn More
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;