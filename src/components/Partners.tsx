import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import BgIcons from '@/components/BgIcons';
import { Handshake, Users, Building, Briefcase } from 'lucide-react';

const partners = ['CEMENTCO', 'ATLAS PRINT', 'MINEX', 'AGRO MED', 'PETRO TN', 'BTP PLUS', 'STEEL WORKS', 'PACK CARTON'];

export default function Partners() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="py-20 bg-white border-y border-steel-100 relative overflow-hidden">
      <BgIcons icons={[Handshake, Users, Building, Briefcase]} variant="light" count={5} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center mb-10`}>
          <span className="inline-block px-4 py-1.5 bg-steel-100 text-steel-600 text-sm font-semibold rounded-full mb-3">
            {t.partners.badge}
          </span>
          <h2 className="font-display text-2xl font-bold text-steel-900">{t.partners.title}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {partners.map((p, i) => (
            <div
              key={i}
              className="h-20 rounded-xl bg-steel-50 border border-steel-100 flex items-center justify-center group hover:bg-primary-50 hover:border-primary-100 transition-all"
            >
              <span className="font-display font-bold text-steel-400 group-hover:text-primary-600 transition-colors text-sm tracking-tight">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
