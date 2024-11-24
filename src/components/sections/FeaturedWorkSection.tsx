import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

export const FeaturedWorkSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const portfolioPreviewImages = [
    '/lovable-uploads/5d54a823-f480-4c6e-93be-fec308e54686.png',
    '/lovable-uploads/42ad349a-fcb0-4b0b-a2d7-46b0c60c1e6e.png',
    '/lovable-uploads/e2c68ed5-b3dd-4c44-b76f-c7652d398c8c.png',
  ];

  return (
    <section id="sessions-section" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title text-center mb-16">{t.checkOurSessions}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {portfolioPreviewImages.map((image, index) => (
            <div 
              key={index}
              className="relative w-full overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              <img
                src={image}
                alt={`Portfolio preview ${index + 1}`}
                className="w-full h-auto object-contain"
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