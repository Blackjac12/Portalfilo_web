import { profile } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const mono = { fontFamily: "'Space Mono', monospace" };
const Pulse = () => (
  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
);

const contactLinks = [
  { href: 'https://github.com/Blackjac12', icon: '⬡', label: 'github.com/Blackjac12' },
  { href: `mailto:${profile.email}`, icon: '@', label: profile.email },
  { href: profile.linkedin, icon: 'in', label: 'LinkedIn' },
];

export default function Contact() {
  return (
    <section id="contacto" style={{ padding: '90px 2.5rem', maxWidth: 1080, margin: '0 auto' }}>
      <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.6)}}`}</style>
      <SectionHeader num="04" title="Contacto" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
        <div>
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.95, marginBottom: '1.5rem' }}>
            ¿Tienes un proyecto en mente o quieres colaborar?{' '}
            <strong style={{ color: 'var(--text)' }}>Estoy disponible para proyectos freelance</strong>{' '}
            y oportunidades de trabajo. No dudes en escribirme.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {contactLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, ...mono, fontSize: 11, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                <div style={{ width: 28, height: 28, border: '0.5px solid var(--border2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>
                  {icon}
                </div>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--card)', border: '0.5px solid var(--border)', borderRadius: 8, padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              ...mono, fontSize: 14, fontWeight: 700, color: '#07090f', marginBottom: '1rem',
            }}>JSE</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.2rem' }}>{profile.fullname}</div>
            <div style={{ ...mono, fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em' }}>BACKEND DEVELOPER · UDES · CÚCUTA</div>
          </div>

          <div>
            <div style={{ ...mono, fontSize: 10, color: 'var(--muted)', marginBottom: '0.8rem' }}>STACK PRINCIPAL</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '1.2rem' }}>
              {['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'].map(t => (
                <span key={t} style={{ ...mono, fontSize: 9, padding: '3px 10px', border: '0.5px solid var(--border2)', color: 'var(--accent2)' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, ...mono, fontSize: 10, color: 'var(--muted)', paddingTop: '1.2rem', borderTop: '0.5px solid var(--border)' }}>
              <Pulse /> Disponible para proyectos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
