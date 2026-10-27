import PageHero from '@/components/PageHero';
import Products from '@/components/Products';
import { useI18n } from '@/i18n/I18nContext';

export default function ProductsPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        title={t.products.title}
        subtitle={t.products.subtitle}
        image="https://images.pexels.com/photos/4238222/pexels-photo-4238222.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Products />
    </>
  );
}
