import { Mountain, Building2, HardHat, Printer, Fuel, Wheat, Factory, Layers, Pickaxe, Truck } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import BgIcons from '@/components/BgIcons';

const icons = [Mountain, Building2, HardHat, Printer, Fuel, Wheat, Factory, Layers];

function SectorCard({ icon: Icon, title, desc, index }: {
  icon: typeof Mountain;
  title: string;
  desc: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 4) + 1} ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-xl bg-steel-900 h-64 cursor-pointer`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-900/80 to-steel-800/40 transition-all duration-500 group-hover:from-primary-900 group-hover:via-primary-800/80" />
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="absolute -bottom-4 -right-4 w-40 h-40 text-white" />
      </div>
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-accent-500 group-hover:border-accent-500 transition-all">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-display text-lg font-bold text-white mb-2 leading-tight">{title}</h3>
        <p className="text-sm text-white/70 leading-relaxed line-clamp-2">{desc}</p>
      </div>
    </div>
  );
}

export default function Sectors() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="py-24 lg:py-32 bg-steel-50 relative overflow-hidden">
      <BgIcons icons={[Mountain, Building2, Pickaxe, Truck, Factory, Fuel]} variant="light" count={7} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14`}>
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
            {t.sectors.badge}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-steel-900 leading-tight mb-4">
            {t.sectors.title}
          </h2>
          <p className="text-steel-500 text-lg">{t.sectors.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.sectors.items.map((s, i) => (
            <SectorCard key={i} icon={icons[i % icons.length]} title={s.title} desc={s.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
