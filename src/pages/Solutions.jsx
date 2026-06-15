import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/data';
import { StaggerContainer, FadeInUp } from '../components/MotionWrappers';

export default function Solutions() {
  const { lang } = useLanguage();
  const t = content[lang].solutions;

  return (
    <div className="container-custom overflow-hidden">
      <section className="section-padding pt-32">
        <FadeInUp>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            {t.heroHeading}
          </h1>
          <p className="text-xl text-[var(--color-body)] max-w-2xl">
            {t.heroSub}
          </p>
        </FadeInUp>
      </section>

      <section className="pb-32 overflow-hidden">
        <FadeInUp className="mb-12">
          <h2 className="text-2xl font-bold text-white">{t.problemsHeading}</h2>
        </FadeInUp>
        
        <StaggerContainer className="flex flex-col border-t border-neutral-900">
          {t.items.map((item, index) => (
            <FadeInUp key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 border-b border-neutral-900">
              {/* Problem Column */}
              <div className="flex items-start gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <h3 className="text-xl font-medium text-[var(--color-body)] leading-relaxed">
                  {item.problem}
                </h3>
              </div>
              
              {/* Solution Column */}
              <div className="flex items-start gap-4">
                <div className="mt-2 w-2 h-2 rounded-full bg-green-500 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">{item.solutionTitle}</h4>
                  <p className="text-[var(--color-body)] leading-relaxed">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
