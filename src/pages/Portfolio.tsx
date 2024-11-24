import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const portfolioImages = [
    '/lovable-uploads/7c0f567a-21de-4c4a-83bc-5d23877f9bab.png',
    '/lovable-uploads/dbe79a89-2cb0-4b96-8668-90847ea434ad.png',
    '/lovable-uploads/6e4e0b26-89b1-4fed-b559-55c1ecfbd97f.png',
    '/lovable-uploads/911efd21-132c-4c07-874c-8a9c355f3c23.png',
    '/lovable-uploads/a9334f62-882a-4a5a-92c2-416143e4da4b.png',
    '/lovable-uploads/82d48da6-7d9c-4c79-ac36-e55dd47d8ecd.png',
    '/lovable-uploads/95bfb61b-b4ce-43ca-b7b2-c75fadcbc74d.png',
    '/lovable-uploads/4b2b116a-ffef-4a19-a585-3edd83e17d17.png',
    '/lovable-uploads/bbe0b908-6035-4827-aef3-b7466585a4c6.png',
    '/lovable-uploads/61dfb1cd-71f0-4ca4-91d5-9c19d752aea8.png'
  ];

  return (
    <div className="container py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl text-gray-600">
          Explore our latest AI-powered visuals that bring brands to life with style and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {portfolioImages.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
          >
            <img
              src={image}
              alt={`Portfolio item ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center py-16 bg-black/5 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Brand?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's create stunning visuals that capture your brand's essence and elevate your online presence.
        </p>
        <Link to="/contact">
          <Button size="lg" className="text-lg px-8 py-6">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;