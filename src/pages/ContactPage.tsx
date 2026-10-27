import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';
import { useI18n } from '@/i18n/I18nContext';

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        image="https://images.pexels.com/photos/14804699/pexels-photo-14804699.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Contact />
    </>
  );
}
