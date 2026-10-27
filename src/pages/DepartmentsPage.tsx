import PageHero from '@/components/PageHero';
import Departments from '@/components/Departments';
import { useI18n } from '@/i18n/I18nContext';

export default function DepartmentsPage() {
  const { t } = useI18n();
  return (
    <>
      <PageHero
        title={t.departments.title}
        subtitle={t.departments.subtitle}
        image="https://images.pexels.com/photos/19895875/pexels-photo-19895875.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Departments />
    </>
  );
}
