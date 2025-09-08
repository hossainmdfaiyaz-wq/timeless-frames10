import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Portfolio images from your Pexels collection
  const portfolioItems = [
    {
      id: 1,
      title: 'Ethereal Portrait',
      category: 'Portrait',
      description: 'Capturing the delicate beauty of natural light and emotion.',
      image: 'https://images.pexels.com/photos/30967658/pexels-photo-30967658.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Urban Expression',
      category: 'Street',
      description: 'Dynamic street photography showcasing urban life and energy.',
      image: 'https://images.pexels.com/photos/33018195/pexels-photo-33018195.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Natural Beauty',
      category: 'Portrait',
      description: 'Intimate portrait celebrating authentic human connection.',
      image: 'https://images.pexels.com/photos/32278938/pexels-photo-32278938.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Artistic Vision',
      category: 'Creative',
      description: 'Contemporary composition exploring form and artistic expression.',
      image: 'https://images.pexels.com/photos/32615675/pexels-photo-32615675.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Golden Moment',
      category: 'Portrait',
      description: 'Warm lighting capturing a perfect moment of natural grace.',
      image: 'https://images.pexels.com/photos/30205895/pexels-photo-30205895.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Contemporary Style',
      category: 'Fashion',
      description: 'Modern fashion photography with bold composition and style.',
      image: 'https://images.pexels.com/photos/31650086/pexels-photo-31650086.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="portfolio" className="py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            PORTFOLIO
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of my best work, showcasing the stories and emotions 
            captured through my lens. Each image represents a unique moment in time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl card-hover cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <Eye className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{item.category}</p>
                  <p className="text-sm opacity-75">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="https://www.pexels.com/@timeless-frames-2148645600"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View Full Gallery on Pexels
          </a>
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={portfolioItems[selectedImage].image}
              alt={portfolioItems[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;