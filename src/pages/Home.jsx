import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/data';
import project1 from '../assets/Digital Seaport Management System.png';
import project2 from '../assets/Massar Cover page.png';
import project3 from '../assets/n8n.png';
import { StaggerContainer, FadeInUp, InteractiveCard, TypingText } from '../components/MotionWrappers';

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];
  const projectImages = [project1, project2, project3];

  return (
    <div className="container-custom">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <TypingText text={t.hero.headline} className="text-5xl md:text-7xl font-bold leading-tight mb-8" />
        
        <FadeInUp delay={0.2}>
          <p className="text-lg md:text-xl text-[var(--color-body)] max-w-2xl mb-12">
            {t.hero.subtitle}
          </p>
        </FadeInUp>
        
        <FadeInUp delay={0.3} className="flex flex-wrap items-center gap-4 mb-16">
          <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-colors">
            {t.hero.contactBtn}
          </Link>
          <a href="#" className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition-colors">
            {t.hero.cvBtn}
          </a>
        </FadeInUp>
        
        <StaggerContainer delayOrder={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.hero.stats.map((stat, i) => (
            <FadeInUp key={i}>
              <InteractiveCard className="bg-[var(--color-card-bg)] p-8 rounded-2xl h-full">
                <div className="text-4xl font-bold text-white mb-4">{stat.metric}</div>
                <p className="text-sm text-[var(--color-body)] leading-relaxed">{stat.text}</p>
              </InteractiveCard>
            </FadeInUp>
          ))}
        </StaggerContainer>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding border-t border-neutral-900 overflow-hidden">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">{t.work.heading}</h2>
        </FadeInUp>
        
        <StaggerContainer delayOrder={0.2} className="flex flex-col gap-24">
          {t.work.items.map((work, i) => (
            <FadeInUp key={i}>
              <InteractiveCard className="group cursor-pointer block w-full">
                <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-neutral-900 rounded-xl mb-8 overflow-hidden relative">
                  <img src={projectImages[i]} alt={work.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-800"></div>
                  <span className="text-xs font-semibold tracking-wider text-[var(--color-secondary)] uppercase">{work.tag} &middot; {work.time}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold group-hover:underline decoration-1 underline-offset-4">{work.title}</h3>
              </InteractiveCard>
            </FadeInUp>
          ))}
        </StaggerContainer>
      </section>

      {/* Two-Column Teaser */}
      <section id="leadership" className="section-padding border-t border-neutral-900 overflow-hidden">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          <FadeInUp>
            <h3 className="text-2xl font-bold mb-6 text-white">{t.teaser.leadHeading}</h3>
            <p className="text-[var(--color-body)] mb-6 leading-relaxed">
              {t.teaser.leadText}
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-white font-medium hover:opacity-70 transition-opacity">
              {t.teaser.readMore} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h3 className="text-2xl font-bold mb-6 text-white">{t.teaser.solveHeading}</h3>
            <p className="text-[var(--color-body)] mb-6 leading-relaxed">
              {t.teaser.solveText}
            </p>
            <Link to="/solutions" className="inline-flex items-center gap-2 text-white font-medium hover:opacity-70 transition-opacity">
              {t.teaser.readMore} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </FadeInUp>
        </StaggerContainer>
      </section>

      {/* Lab Section */}
      <section id="lab" className="section-padding border-t border-neutral-900 overflow-hidden">
        <FadeInUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.lab.heading}</h2>
          <p className="text-lg text-[var(--color-body)] max-w-2xl mb-8 leading-relaxed">
            {t.lab.text}
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:opacity-70 transition-opacity">
            {t.lab.link} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </FadeInUp>
      </section>
    </div>
  );
}
