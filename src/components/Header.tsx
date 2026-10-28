import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useI18n, type Lang } from "@/i18n/I18nContext";

export default function Header() {
  const { t, lang, setLang, dir } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks: { to: string; label: string }[] = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/sectors", label: t.nav.sectors },
    { to: "/products", label: t.nav.products },
    { to: "/departments", label: t.nav.departments },
    { to: "/contact", label: t.nav.contact },
  ];

  const langs: { code: Lang; label: string; flag: string }[] = [
    { code: "fr", label: "Français", flag: "FR" },
    { code: "en", label: "English", flag: "EN" },
    { code: "ar", label: "العربية", flag: "AR" },
  ];

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-steel-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3 group">
              {/* Logo image */}
              <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-xl shadow-lg shadow-primary-900/20 group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="ELASTOTECH Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Brand name */}
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    solid
                      ? active
                        ? "text-primary-600 bg-primary-50"
                        : "text-steel-700 hover:text-primary-600 hover:bg-primary-50"
                      : active
                        ? "text-white bg-white/15"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Phone (desktop) */}
            <a
              href="tel:+21673320533"
              className={`hidden xl:flex items-center gap-2 text-sm font-medium ${solid ? "text-steel-700" : "text-white/90"}`}
            >
              <Phone className="w-4 h-4" />
              +216 73 320 533
            </a>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  solid
                    ? "text-steel-700 hover:bg-steel-100"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{lang}</span>
              </button>
              {langOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLangOpen(false)}
                  />
                  <div
                    className={`absolute z-20 mt-2 ${dir === "rtl" ? "left-0" : "right-0"} w-44 bg-white rounded-xl shadow-xl shadow-steel-900/10 border border-steel-100 py-2 animate-fade-in`}
                  >
                    {langs.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                          lang === l.code
                            ? "text-primary-600 bg-primary-50 font-semibold"
                            : "text-steel-700 hover:bg-steel-50"
                        }`}
                      >
                        <span className="text-xs font-bold w-6 text-center rounded bg-steel-100 text-steel-600 py-0.5">
                          {l.flag}
                        </span>
                        {l.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA (desktop) */}
            <button
              onClick={() => navigate("/contact")}
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-accent-500/30"
            >
              {t.nav.quote}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg ${solid ? "text-steel-900" : "text-white"}`}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-steel-100 shadow-xl">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block w-full text-start px-4 py-3 font-medium rounded-lg transition-colors ${
                    active
                      ? "text-primary-600 bg-primary-50"
                      : "text-steel-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => navigate("/contact")}
              className="block w-full px-4 py-3 bg-accent-500 text-white font-semibold rounded-lg mt-2"
            >
              {t.nav.quote}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
