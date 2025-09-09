import { Camera, Palette, Zap } from 'lucide-react';
import journeyPhoto from '@/assets/journey-photo.jpg';

const About = () => {
  const skills = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing life\'s precious moments with a keen eye for detail and composition.'
    },
    {
      icon: Palette,
      title: 'Photoshop',
      description: 'Professional photo editing and digital art creation with advanced techniques.'
    },
    {
      icon: Zap,
      title: 'Lightroom',
      description: 'Expert color grading and photo enhancement to bring images to life.'
    }
  ];

  return (
    <section id="about" className="py-24 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            ABOUT
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Photography isn't just my hobby—it's my passion. As a student with an eye for capturing 
            the extraordinary in the ordinary, I specialize in visual storytelling that connects 
            with viewers on an emotional level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="card-hover bg-card p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <skill.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 card-hover">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as curiosity has evolved into a deep passion for photography. 
                Every frame I capture tells a unique story, whether it's the golden hour 
                light dancing through trees or the candid expression of a subject lost in thought.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through continuous learning and experimentation with Adobe Photoshop and Lightroom, 
                I've developed a distinctive style that emphasizes authentic moments and emotional depth.
              </p>
            </div>
            <div className="relative">
              <img 
                src={journeyPhoto} 
                alt="Photography journey - capturing moments behind the scenes"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;