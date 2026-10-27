import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Award, Linkedin, Facebook, Instagram } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

export default function Footer() {
  const { t } = useI18n();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/sectors', label: t.nav.sectors },
    { to: '/products', label: t.nav.products },
    { to: '/departments', label: t.nav.departments },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-steel-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-lg">ELASTO<span className="text-accent-500">TECH</span></div>
                <div className="text-[10px] font-medium tracking-wider uppercase text-steel-400">Elastomers Solutions</div>
              </div>
            </Link>
            <p className="text-steel-400 text-sm leading-relaxed mb-5">{t.footer.desc}</p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-accent-400">
              <Award className="w-4 h-4" />
              {t.footer.certified}
            </div>
            <div className="flex gap-2 mt-5">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-steel-400 hover:bg-accent-500 hover:text-white hover:border-accent-500 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-white">{t.footer.links}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-steel-400 hover:text-accent-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-white">{t.footer.services}</h3>
            <ul className="space-y-2.5">
              {t.services.items.slice(0, 5).map((s, i) => (
                <li key={i}>
                  <Link to="/services" className="text-steel-400 hover:text-accent-400 text-sm transition-colors text-start">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4 text-white">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-steel-400">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-500 flex-shrink-0" />
                {t.contact.info.addressVal}
              </li>
              <li className="flex items-center gap-3 text-sm text-steel-400">
                <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span>
                  <a href={`tel:${t.contact.info.phoneVal1.replace(/\s/g, '')}`} className="hover:text-accent-400 transition-colors block">{t.contact.info.phoneVal1}</a>
                  <a href={`tel:${t.contact.info.phoneVal2.replace(/\s/g, '')}`} className="hover:text-accent-400 transition-colors block">{t.contact.info.phoneVal2}</a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-steel-400">
                <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <a href={`mailto:${t.contact.info.emailVal}`} className="hover:text-accent-400 transition-colors">{t.contact.info.emailVal}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-sm">
            © {new Date().getFullYear()} ElastoTech. {t.footer.rights}
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-steel-400 hover:text-accent-400 text-sm font-medium transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
