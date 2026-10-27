import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, MessageSquare, MailOpen } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';
import { useReveal } from '@/hooks/useReveal';
import BgIcons from '@/components/BgIcons';

export default function Contact() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const infoItems = [
    { icon: MapPin, label: t.contact.info.address, value: t.contact.info.addressVal },
    { icon: Phone, label: t.contact.info.phone, value: `${t.contact.info.phoneVal1} · ${t.contact.info.phoneVal2}` },
    { icon: Mail, label: t.contact.info.email, value: t.contact.info.emailVal },
    { icon: Clock, label: t.contact.info.hours, value: t.contact.info.hoursVal },
  ];

  return (
    <section className="py-24 lg:py-32 bg-steel-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/14804699/pexels-photo-14804699.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-steel-950 via-steel-950/95 to-steel-950/90" />
      <BgIcons icons={[Mail, MailOpen, MessageSquare, Phone, Send]} variant="dark" count={6} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-12 items-start`}>
          {/* Left: Info */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent-500/15 text-accent-400 text-sm font-semibold rounded-full mb-4">
              {t.contact.badge}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              {t.contact.title}
            </h2>
            <p className="text-steel-300 text-lg mb-10">{t.contact.subtitle}</p>

            <div className="space-y-5">
              {infoItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-500 group-hover:border-accent-500 transition-all">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-steel-400 text-sm font-medium mb-0.5">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/30">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t.contact.form.name} value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder={t.contact.form.namePh} required />
                <Field label={t.contact.form.email} type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder={t.contact.form.emailPh} required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t.contact.form.phone} type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder={t.contact.form.phonePh} />
                <Field label={t.contact.form.subject} value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} placeholder={t.contact.form.subjectPh} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-steel-700 mb-1.5">{t.contact.form.message}</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.form.messagePh}
                  className="w-full px-4 py-3 rounded-xl border border-steel-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none text-steel-900 placeholder:text-steel-400"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-400 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-accent-500/30"
              >
                {status === 'sending' ? (
                  t.contact.form.sending
                ) : (
                  <>
                    {t.contact.form.send}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium animate-fade-in">
                  <CheckCircle2 className="w-5 h-5" />
                  {t.contact.form.success}
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-rose-600 text-sm font-medium">
                  <AlertCircle className="w-5 h-5" />
                  {t.contact.form.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', required }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-steel-700 mb-1.5">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-steel-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-steel-900 placeholder:text-steel-400"
      />
    </div>
  );
}
