import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Materials from '@/components/Materials';
import Sectors from '@/components/Sectors';
import Products from '@/components/Products';
import Departments from '@/components/Departments';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import { useReveal } from '@/hooks/useReveal';

function CtaBanner() {
  const { t, dir } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  return (
    <section className="py-20 bg-steel-950 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`}>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
          {t.contact.title}
        </h2>
        <p className="text-steel-300 text-lg mb-8">{t.contact.subtitle}</p>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all shadow-xl shadow-accent-500/30 hover:-translate-y-0.5"
        >
          {t.nav.quote}
          <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Materials />
      <Sectors />
      <Products />
      <Departments />
      <Testimonials />
      <Partners />
      <CtaBanner />
    </>
  );
}
