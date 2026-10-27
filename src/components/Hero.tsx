import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Award, Factory } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

const slides = [
  {
    img: 'https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    img: 'https://images.pexels.com/photos/38427501/pexels-photo-38427501.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    img: 'https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
];

export default function Hero() {
  const { t, dir } = useI18n();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const slideTexts = [
    { title: t.hero.slide1, desc: t.hero.slide1Desc },
    { title: t.hero.slide2, desc: t.hero.slide2Desc },
    { title: t.hero.slide3, desc: t.hero.slide3Desc },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 hero-grad" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            {t.hero.tagline}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 animate-fade-in-up">
            {t.hero.title}
          </h1>

          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {t.hero.subtitle}
          </p>

          {/* Slide-specific text */}
          <div className="mb-8 h-14 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-out"
              style={{ transform: `translateY(-${current * 56}px)` }}
            >
              {slideTexts.map((s, i) => (
                <div key={i} className="h-14 flex items-center gap-3 text-white">
                  <div className="w-8 h-px bg-accent-400" />
                  <span className="font-display font-semibold text-lg">{s.title}</span>
                  <span className="text-white/60 text-sm hidden sm:inline">— {s.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => navigate('/services')}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all shadow-xl shadow-accent-500/30 hover:shadow-accent-500/40 hover:-translate-y-0.5"
            >
              {t.hero.cta1}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all"
            >
              {t.hero.cta2}
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/15">
            {[
              { icon: Award, label: t.footer.certified },
              { icon: Factory, label: t.about.stats[1].label },
              { icon: ShieldCheck, label: t.about.features[0].title },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70">
                <item.icon className="w-5 h-5 text-accent-400" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <button
          onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          {dir === 'rtl' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-accent-400' : 'w-1.5 bg-white/40'}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((c) => (c + 1) % slides.length)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
        >
          {dir === 'rtl' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>
    </section>
  );
}
