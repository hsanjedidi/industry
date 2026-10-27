import PageHero from '@/components/PageHero';
import Services from '@/components/Services';
import Materials from '@/components/Materials';
import { useI18n } from '@/i18n/I18nContext';

export default function ServicesPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        title={t.services.title}
        subtitle={t.services.subtitle}
        image="https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Services />
      <Materials />
    </>
  );
}
