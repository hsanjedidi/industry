import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import BgIcons from '@/components/BgIcons';
import { Cog, Boxes, Layers, CircleDot } from 'lucide-react';

const productImages = [
  'https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/38427501/pexels-photo-38427501.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7565157/pexels-photo-7565157.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7565172/pexels-photo-7565172.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/36449414/pexels-photo-36449414.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/39345876/pexels-photo-39345876.png?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/33813584/pexels-photo-33813584.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4238222/pexels-photo-4238222.jpeg?auto=compress&cs=tinysrgb&w=800',
];

function ProductCard({ title, desc, img, index }: { title: string; desc: string; img: string; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''} group relative rounded-2xl overflow-hidden bg-steel-900 shadow-lg cursor-pointer`}
    >
      <img
        src={img}
        alt={title}
        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
        <h3 className="font-display text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-white/70 line-clamp-2">{desc}</p>
      </div>
      <div className="absolute top-4 ltr:right-4 rtl:left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M7 17L17 7M17 7H8M17 7v9" />
        </svg>
      </div>
    </div>
  );
}

export default function Products() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  const [filter, setFilter] = useState<string>('all');

  const filters = [
    { key: 'all', label: t.products.filters.all },
    { key: 'rollers', label: t.products.filters.rollers },
    { key: 'wheels', label: t.products.filters.wheels },
    { key: 'parts', label: t.products.filters.parts },
    { key: 'coating', label: t.products.filters.coating },
  ];

  const filtered = filter === 'all'
    ? t.products.items
    : t.products.items.filter((p) => p.cat === filter);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <BgIcons icons={[Cog, Boxes, Layers, CircleDot]} variant="light" count={5} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-10`}>
          <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-600 text-sm font-semibold rounded-full mb-4">
            {t.products.badge}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-steel-900 leading-tight mb-4">
            {t.products.title}
          </h2>
          <p className="text-steel-500 text-lg">{t.products.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.key
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-steel-100 text-steel-600 hover:bg-steel-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <ProductCard
              key={p.title + i}
              title={p.title}
              desc={p.desc}
              img={productImages[i % productImages.length]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
