import { useLanguage } from '../context/LanguageContext';
import { content } from '../content/data';
import { StaggerContainer, FadeInUp, InteractiveCard } from '../components/MotionWrappers';

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  return (
    <div className="container-custom overflow-hidden">
      <section className="section-padding pt-32">
        <FadeInUp>
          <span className="eyebrow block mb-6">{t.eyebrow}</span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-12">
            {t.headline}
          </h1>
        </FadeInUp>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <StaggerContainer>
            <FadeInUp>
              <p className="text-lg text-[var(--color-body)] leading-relaxed mb-8">
                {t.subHeading}
              </p>
            </FadeInUp>
            <ul className="space-y-4 text-[var(--color-body)]">
              {t.listItems.map((item, i) => (
                <FadeInUp key={i} className="flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1.5 leading-none">&bull;</span>
                  <span><strong className="text-white">{item.term}</strong> {item.text}</span>
                </FadeInUp>
              ))}
            </ul>
          </StaggerContainer>
          
          <FadeInUp delay={0.2}>
            <InteractiveCard className="bg-[var(--color-card-bg)] p-8 rounded-2xl">
              <form 
                action="https://formsubmit.co/ahmad.hatem959@gmail.com" 
                method="POST" 
                className="flex flex-col gap-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="Request from Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">{t.form.name}</label>
                  <input type="text" id="name" name="name" required className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-secondary)] transition-colors" placeholder={lang === 'en' ? "Jane Doe" : "فلان الفلاني"} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">{t.form.email}</label>
                  <input type="email" id="email" name="email" required className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-secondary)] transition-colors" placeholder={lang === 'en' ? "jane@example.com" : "email@example.com"} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">{t.form.message}</label>
                  <textarea id="message" name="message" required rows="5" className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-secondary)] transition-colors resize-none" placeholder={lang === 'en' ? "Tell me about your project..." : "أخبرني عن مشروعك..."}></textarea>
                </div>
                <button type="submit" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto self-start mt-2">
                  {t.form.submit}
                </button>
              </form>
            </InteractiveCard>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
