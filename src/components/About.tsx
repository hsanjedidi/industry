import { CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import { useCountUp } from '@/hooks/useCountUp';


function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  const count = useCountUp(value, 2000, visible);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl lg:text-5xl font-bold text-primary-600 tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-steel-500 mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);

  return (
    <section className="py-24 lg:py-32 bg-white mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-16 items-center`}>
          {/* Images */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-steel-900/20">
              <img
                src="https://images.pexels.com/photos/37668423/pexels-photo-37668423.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Engineer"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 ltr:-right-4 rtl:-left-4 w-2/3 rounded-2xl overflow-hidden shadow-2xl shadow-steel-900/30 border-4 border-white hidden sm:block">
              <img
                src="https://images.pexels.com/photos/19895875/pexels-photo-19895875.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Industrial pipes"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="absolute -top-6 ltr:-left-6 rtl:-right-6 bg-accent-500 text-white rounded-2xl px-6 py-4 shadow-xl shadow-accent-500/40">
              <div className="font-display text-3xl font-bold">20+</div>
              <div className="text-sm text-white/90">ans d'expérience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
              {t.about.badge}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-steel-900 leading-tight mb-6">
              {t.about.title}
            </h2>
            <p className="text-steel-600 leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-steel-600 leading-relaxed mb-8">{t.about.p2}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {t.about.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-steel-900 text-sm">{f.title}</div>
                    <div className="text-sm text-steel-500">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-steel-100">
              {t.about.stats.map((s, i) => (
                <StatCounter key={i} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
