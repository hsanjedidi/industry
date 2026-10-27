import PageHero from '@/components/PageHero';
import Sectors from '@/components/Sectors';
import { useI18n } from '@/i18n/I18nContext';

export default function SectorsPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        title={t.sectors.title}
        subtitle={t.sectors.subtitle}
        image="https://images.pexels.com/photos/33122147/pexels-photo-33122147.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Sectors />
    </>
  );
}
