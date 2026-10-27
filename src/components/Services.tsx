import { Cog, Layers, Wrench, RefreshCw, Boxes, CircleDot, ArrowUpRight, Settings, Hammer } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import BgIcons from '@/components/BgIcons';

const icons = [Cog, Layers, Wrench, RefreshCw, Boxes, CircleDot];

function ServiceCard({ icon: Icon, title, desc, delay, linkLabel, rtl }: {
  icon: typeof Cog;
  title: string;
  desc: string;
  delay: number;
  linkLabel: string;
  rtl: boolean;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} ${visible ? 'is-visible' : ''} group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:shadow-steel-900/10 transition-all duration-500 hover:-translate-y-1 border border-steel-100 overflow-hidden`}
    >
      <div className="absolute top-0 ltr:right-0 rtl:left-0 w-32 h-32 bg-primary-50 rounded-full -translate-y-12 ltr:translate-x-12 rtl:-translate-x-12 transition-transform group-hover:scale-150 duration-500" />
      <div className="relative">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-lg shadow-primary-900/30 mb-5 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="font-display text-xl font-bold text-steel-900 mb-3">{title}</h3>
        <p className="text-steel-600 leading-relaxed text-sm">{desc}</p>
        <div className="flex items-center gap-2 mt-5 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          <span>{linkLabel}</span>
          <ArrowUpRight className={`w-4 h-4 ${rtl ? '-scale-x-100' : ''}`} />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto`}>
      <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
        {badge}
      </span>
      <h2 className="font-display text-3xl lg:text-4xl font-bold text-steel-900 leading-tight mb-4">
        {title}
      </h2>
      <p className="text-steel-500 text-lg">{subtitle}</p>
    </div>
  );
}

export default function Services() {
  const { t, dir } = useI18n();
  const rtl = dir === 'rtl';

  return (
    <section className="py-24 lg:py-32 bg-steel-50 relative overflow-hidden">
      <BgIcons icons={[Cog, Settings, CircleDot, Wrench, Boxes, Hammer]} variant="light" count={7} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge={t.services.badge} title={t.services.title} subtitle={t.services.subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {t.services.items.map((item, i) => (
            <ServiceCard
              key={i}
              icon={icons[i % icons.length]}
              title={item.title}
              desc={item.desc}
              delay={(i % 4) + 1}
              linkLabel={t.nav.about}
              rtl={rtl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
