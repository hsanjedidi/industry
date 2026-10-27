import {
  Warehouse,
  Atom,
  Cog,
  Workflow,
  ShieldCheck,
  DraftingCompass,
  Wrench,
  Gauge,
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import BgIcons from '@/components/BgIcons';

const icons = [Warehouse, Atom, Cog, Workflow, ShieldCheck, DraftingCompass, Wrench, Gauge];

function DepartmentCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: typeof Warehouse;
  title: string;
  desc: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 4) + 1} ${visible ? 'is-visible' : ''} group relative bg-white rounded-2xl p-7 border border-steel-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-steel-900/10 hover:-translate-y-1`}
    >
      {/* Decorative number */}
      <div className="absolute ltr:right-5 rtl:left-5 top-5 font-display text-5xl font-bold text-steel-100 group-hover:text-primary-50 transition-colors duration-500 select-none">
        {num}
      </div>

      {/* Hover accent line */}
      <div className="absolute top-0 ltr:left-0 rtl:right-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent-500 to-accent-600 transition-all duration-500" />

      <div className="relative">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-lg shadow-primary-900/30 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="font-display text-xl font-bold text-steel-900 mb-3 leading-tight">{title}</h3>
        <p className="text-steel-600 leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default function Departments() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="py-24 lg:py-32 bg-steel-50 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 ltr:right-0 rtl:left-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 ltr:left-0 rtl:right-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <BgIcons icons={[Warehouse, Atom, Cog, Workflow, ShieldCheck, Gauge]} variant="light" count={8} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14`}>
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
            {t.departments.badge}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-steel-900 leading-tight mb-4">
            {t.departments.title}
          </h2>
          <p className="text-steel-500 text-lg">{t.departments.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.departments.items.map((item, i) => (
            <DepartmentCard
              key={i}
              icon={icons[i % icons.length]}
              title={item.title}
              desc={item.desc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
