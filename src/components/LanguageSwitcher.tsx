import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">EN</span>
      <Switch
        checked={language === 'pl'}
        onCheckedChange={(checked) => setLanguage(checked ? 'pl' : 'en')}
      />
      <span className="text-sm">PL</span>
    </div>
  );
};

export default LanguageSwitcher;