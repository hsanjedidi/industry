import PageHero from '@/components/PageHero';
import About from '@/components/About';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import { useI18n } from '@/i18n/I18nContext';

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        title={t.about.title}
        subtitle={t.about.badge}
        image="https://images.pexels.com/photos/37668423/pexels-photo-37668423.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <About />
      <Testimonials />
      <Partners />
    </>
  );
}
