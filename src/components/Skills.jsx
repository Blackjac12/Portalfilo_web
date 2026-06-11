import { skills } from '../data/portfolio';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '90px 2.5rem', maxWidth: 1080, margin: '0 auto' }}>
      <SectionHeader num="02" title="Habilidades" />
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px', background: 'var(--border)', border: '0.5px solid var(--border)',
      }}>
        {skills.map(sk => (
          <SkillCard key={sk.name} {...sk} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ cat, name, desc, level }) {
  return (
    <div
      className="hoverable"
      style={{ background: 'var(--card)', padding: '1.3rem', position: 'relative', overflow: 'hidden', transition: 'background 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg3)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--card)'}
    >
      <style>{`.sk-bar-before { position:absolute;top:0;left:0;width:2px;height:0;background:var(--accent);transition:height .3s; } .sk-wrap:hover .sk-bar-before { height:100%; }`}</style>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>{cat}</div>
      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: '0.3rem' }}>{name}</div>
      <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</div>
      <div style={{ marginTop: '0.9rem', height: 2, background: 'var(--border)' }}>
        <div style={{ height: '100%', width: `${level}%`, background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }} />
      </div>
    </div>
  );
}
