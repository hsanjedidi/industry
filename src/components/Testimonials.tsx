import { Quote, Star, MessageSquare, ThumbsUp, Heart } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import BgIcons from '@/components/BgIcons';

function TestimonialCard({ name, role, quote, index }: { name: string; role: string; quote: string; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''} bg-white rounded-2xl p-8 shadow-lg shadow-steel-900/5 border border-steel-100 hover:shadow-xl transition-shadow flex flex-col`}
    >
      <Quote className="w-10 h-10 text-primary-200 mb-4" />
      <p className="text-steel-700 leading-relaxed mb-6 flex-1 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center font-display font-bold text-sm">
          {initials}
        </div>
        <div>
          <div className="font-semibold text-steel-900 text-sm">{name}</div>
          <div className="text-xs text-steel-500">{role}</div>
        </div>
        <div className="ltr:ml-auto rtl:mr-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <section className="py-24 lg:py-32 bg-steel-50 relative overflow-hidden">
      <BgIcons icons={[Quote, MessageSquare, ThumbsUp, Heart, Star]} variant="light" count={5} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14`}>
          <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-sm font-semibold rounded-full mb-4">
            {t.testimonials.badge}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-steel-900 leading-tight">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <TestimonialCard key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
