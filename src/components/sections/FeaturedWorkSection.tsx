import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export const FeaturedWorkSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const portfolioPreviewImages = [
    '/lovable-uploads/b861ca7f-8e35-43a6-9c34-28e7a0928398.png',
    '/lovable-uploads/7a94c616-ae96-4056-8ded-052afef3b069.png',
    '/lovable-uploads/082622d6-76ab-4044-ab90-f7e551ec7346.png',
  ];

  return (
    <section id="sessions-section" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title text-center mb-16">{t.checkOurSessions}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {portfolioPreviewImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              <img
                src={image}
                alt={`Portfolio preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/portfolio">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              {t.viewPortfolio} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};