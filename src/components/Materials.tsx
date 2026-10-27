import { useState } from 'react';
import { Atom, Boxes, Flame, Cpu, Hammer, Combine, Beaker, Microscope } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import BgIcons from '@/components/BgIcons';

const icons = [Atom, Boxes, Flame, Cpu, Hammer, Combine];
const accentColors = [
  'from-primary-500 to-primary-700',
  'from-accent-500 to-accent-700',
  'from-rose-500 to-rose-700',
  'from-cyan-500 to-cyan-700',
  'from-amber-500 to-amber-700',
  'from-emerald-500 to-emerald-700',
];

function MaterialCard({ icon: Icon, title, desc, color, delay }: {
  icon: typeof Atom;
  title: string;
  desc: string;
  color: string;
  delay: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} ${visible ? 'is-visible' : ''} group relative bg-white rounded-2xl p-6 border border-steel-100 hover:border-transparent hover:shadow-xl hover:shadow-steel-900/10 transition-all duration-300 overflow-hidden cursor-pointer`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${color} text-white mb-4 group-hover:bg-white/20 transition-all`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-display text-lg font-bold text-steel-900 group-hover:text-white transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-steel-600 group-hover:text-white/90 transition-colors leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Materials() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <BgIcons icons={[Atom, Beaker, Flame, Microscope, Cpu, Combine]} variant="light" count={6} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14`}>
          <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-sm font-semibold rounded-full mb-4">
            {t.materials.badge}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-steel-900 leading-tight mb-4">
            {t.materials.title}
          </h2>
          <p className="text-steel-500 text-lg">{t.materials.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.materials.items.map((m, i) => (
            <MaterialCard
              key={i}
              icon={icons[i % icons.length]}
              title={m.title}
              desc={m.desc}
              color={accentColors[i % accentColors.length]}
              delay={(i % 3) + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
