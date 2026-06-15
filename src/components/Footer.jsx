import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/data';

export default function Footer() {
  const { lang, toggleLanguage } = useLanguage();
  const t = content[lang].footer;

  return (
    <footer className="w-full bg-[var(--color-bg)] py-12 border-t border-neutral-900 mt-20">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[var(--color-secondary)]">
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/ahemdhbawazir" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/autim-d" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:ahmad.hatem959@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div>{t.copyright}</div>
          <button onClick={toggleLanguage} className="flex items-center gap-1 text-sm font-medium tracking-wide focus:outline-none">
            <span className={lang === 'en' ? 'text-white' : 'text-[#999]'}>EN</span>
            <span className="text-[#999]">/</span>
            <span className={lang === 'ar' ? 'text-white' : 'text-[#999]'}>AR</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
