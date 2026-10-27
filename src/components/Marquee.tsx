import { useI18n } from '@/i18n/I18nContext';

export default function Marquee() {
  const { t } = useI18n();
  const items = t.marquee;

  return (
    <div className="bg-steel-900 py-4 overflow-hidden border-y border-steel-800">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-2xl font-display font-semibold text-steel-300 flex items-center gap-8">
            {item}
            <span className="w-2 h-2 rounded-full bg-accent-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
