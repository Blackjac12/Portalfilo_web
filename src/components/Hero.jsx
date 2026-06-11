import { profile } from '../data/portfolio';

const Pulse = () => (
  <span style={{
    width: 7, height: 7, borderRadius: '50%',
    background: 'var(--accent)',
    display: 'inline-block',
    animation: 'pulse 2s infinite',
  }} />
);

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '100px 2.5rem 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.6)} }
        .hero-grid-bg {
          position:absolute;inset:0;
          background-image:linear-gradient(rgba(0,229,160,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,160,.04) 1px,transparent 1px);
          background-size:50px 50px;
          mask-image:radial-gradient(ellipse at 60% 40%,rgba(0,0,0,.5),transparent 70%);
          pointer-events:none;
        }
        .btn-p { clip-path: polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%); }
        .btn-p:hover { background: #00fbb5 !important; transform: translateY(-2px); }
        .btn-o:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
      `}</style>

      <div className="hero-grid-bg" />

      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: 11,
        color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase',
        marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
        Backend Developer · {profile.city}
      </div>

      <h1 style={{ fontSize: 'clamp(3rem,8vw,6.5rem)', fontWeight: 800, lineHeight: 0.92, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
        <span style={{ display: 'block' }}>{profile.name}</span>
        <span style={{ display: 'block' }}>Sebastián</span>
        <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1.5px rgba(241,245,249,.2)' }}>
          Estupiñán
        </span>
      </h1>

      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--muted)',
        marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <Pulse /> Ingeniería de Software · {profile.university} · Especialista Backend &amp; APIs
      </div>

      <p style={{ maxWidth: 460, fontSize: 15, color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
        Construyo sistemas backend robustos, APIs RESTful y arquitecturas escalables. Apasionado por la seguridad, la integración continua y las soluciones que resuelven problemas reales.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
        <a href="#proyectos" className="btn-p" style={{
          padding: '11px 26px', background: 'var(--accent)', color: '#07090f',
          fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700,
          letterSpacing: '0.1em', textDecoration: 'none', transition: 'all 0.2s',
        }}>
          Ver proyectos
        </a>
        <a href="#contacto" className="btn-o" style={{
          padding: '11px 26px', background: 'transparent', color: 'var(--text)',
          fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: '0.1em',
          textDecoration: 'none', border: '0.5px solid var(--border2)', transition: 'all 0.2s',
        }}>
          Contacto
        </a>
      </div>

      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {profile.stats.map(s => (
          <div key={s.label} style={{ borderLeft: '2px solid var(--border2)', paddingLeft: '1rem' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: 800, lineHeight: 1 }}>
              {s.value.includes('+')
                ? <>{s.value.replace('+','')}<span style={{ color: 'var(--accent)' }}>+</span></>
                : s.value
              }
            </div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted)', marginTop: 4, letterSpacing: '0.08em' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
