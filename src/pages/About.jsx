import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/data';
import heroImg from '../assets/Hero Section.png';
import offClock1 from '../assets/Off the clock1.jpeg';
import offClock2 from '../assets/Off the clock2.jpeg';
import offClock3 from '../assets/Off the clock3.jpeg';
import { StaggerContainer, FadeInUp, InteractiveCard } from '../components/MotionWrappers';

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <div className="container-custom overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <FadeInUp>
          <span className="eyebrow block mb-6">{t.eyebrow}</span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-12">
            {t.headline}
          </h1>
          <div className="space-y-6 text-xl leading-relaxed text-[var(--color-body)] max-w-3xl mb-16">
            <p>
              <span className="text-white font-medium">{t.bio1.split('.')[0]}.</span>{t.bio1.substring(t.bio1.indexOf('.') + 1)}
            </p>
            <p>
              <span className="text-white font-medium">{t.bio2.split('.')[0]}.</span>{t.bio2.substring(t.bio2.indexOf('.') + 1)}
            </p>
          </div>
        </FadeInUp>
        
        <FadeInUp delay={0.2}>
          <motion.img 
            src={heroImg} 
            alt="Ahmed Bawazir" 
            loading="lazy"
            className="w-full aspect-[4/5] md:aspect-[21/9] object-cover object-top bg-neutral-900 rounded-2xl shadow-2xl" 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </FadeInUp>
      </section>

      {/* Experience */}
      <section className="pb-24 overflow-hidden">
        <FadeInUp>
          <h2 className="text-3xl font-bold mb-12">{t.experienceHeading}</h2>
        </FadeInUp>
        <StaggerContainer className="flex flex-col gap-12">
          {t.experienceItems.map((exp, i) => (
            <FadeInUp key={i} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="w-12 h-12 rounded-full bg-neutral-800 shrink-0 flex items-center justify-center text-xs text-neutral-500">Logo</div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.company} <span className="text-neutral-500 font-normal">/ {exp.role}</span></h3>
                  <span className="text-sm text-[var(--color-secondary)]">{exp.date}</span>
                </div>
                <p className="text-[var(--color-body)] leading-relaxed max-w-2xl">{exp.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </StaggerContainer>
      </section>

      {/* Tool Stack */}
      <section className="pb-24 overflow-hidden">
        <FadeInUp>
          <h2 className="text-3xl font-bold mb-12">{t.toolHeading}</h2>
        </FadeInUp>
        <StaggerContainer className="flex flex-wrap items-center gap-4 md:gap-8">
          {t.tools.map((tool, i) => (
            <FadeInUp key={i}>
              <InteractiveCard className="flex items-center gap-3 bg-neutral-900/50 py-2 px-4 rounded-full cursor-default">
                <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-500">Ico</div>
                <span className="text-white font-medium text-sm">{tool}</span>
              </InteractiveCard>
            </FadeInUp>
          ))}
        </StaggerContainer>
      </section>

      {/* Off the clock */}
      <section className="pb-32 overflow-hidden">
        <FadeInUp>
          <h2 className="text-3xl font-bold mb-8">{t.offClockHeading}</h2>
          <p className="text-lg text-[var(--color-body)] mb-12 max-w-2xl leading-relaxed">
            {t.offClockText}
          </p>
        </FadeInUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeInUp>
            <InteractiveCard className="h-full">
              <img src={offClock1} alt="Off the clock 1" loading="lazy" className="w-full aspect-square object-cover bg-neutral-900 rounded-xl" />
            </InteractiveCard>
          </FadeInUp>
          <FadeInUp>
            <InteractiveCard className="h-full">
              <img src={offClock2} alt="Off the clock 2" loading="lazy" className="w-full aspect-square object-cover bg-neutral-900 rounded-xl" />
            </InteractiveCard>
          </FadeInUp>
          <FadeInUp>
            <InteractiveCard className="h-full">
              <img src={offClock3} alt="Off the clock 3" loading="lazy" className="w-full aspect-square object-cover bg-neutral-900 rounded-xl" />
            </InteractiveCard>
          </FadeInUp>
        </StaggerContainer>
      </section>
    </div>
  );
}
