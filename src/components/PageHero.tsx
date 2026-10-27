import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  const { t, dir } = useI18n();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-grad" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-4 animate-fade-in">
          <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
          <ChevronRight className={`w-4 h-4 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
          <span className="text-white font-medium">{title}</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/75 mt-4 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
