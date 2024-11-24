import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 bg-black/80 text-white text-center">
      <div className="container">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <a 
              href="https://www.instagram.com/modelcode.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.instagram.com/modelcode.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {t.followUs}
            </a>
          </div>
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
          <p>Made with ❤️ in Warsaw</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;