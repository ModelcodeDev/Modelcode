import { Link } from "react-router-dom";
import { Instagram, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  const { language, setLanguage } = useLanguage();
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
          <div className="flex items-center justify-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 focus:outline-none">
                <Languages className="h-5 w-5" />
                <span className="text-sm text-gray-300 hover:text-white cursor-pointer">
                  {t.changeLanguage}
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" side="top">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('pl')}>
                  Polski
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p>Made with ❤️ in Warsaw</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;