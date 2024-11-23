import React from 'react';

const Portfolio = () => {
  const portfolioImages = [
    '/lovable-uploads/b861ca7f-8e35-43a6-9c34-28e7a0928398.png',
    '/lovable-uploads/7a94c616-ae96-4056-8ded-052afef3b069.png',
    '/lovable-uploads/082622d6-76ab-4044-ab90-f7e551ec7346.png',
    '/lovable-uploads/c42a5aae-9c46-4945-a401-9ccb9dbe15c8.png',
    '/lovable-uploads/6e8c4e8e-7588-4892-90f2-9595e47a7131.png'
  ];

  return (
    <div className="container py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl text-gray-600">
          Explore our latest AI-powered visuals that bring brands to life with style and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
};

export default Portfolio;