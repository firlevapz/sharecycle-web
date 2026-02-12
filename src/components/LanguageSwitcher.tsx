import { useI18n } from "@/i18n/I18nProvider";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "de" : "en")}
      className="fixed top-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm font-medium text-foreground shadow-md hover:shadow-lg transition-all duration-200"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4 text-primary" />
      {lang === "en" ? "DE" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
