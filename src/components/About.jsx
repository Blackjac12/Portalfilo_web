import { profile } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const termLines = [
  { type: 'cmd', text: 'cat profile.json' },
  { type: 'brace', text: '{' },
  { type: 'kv', k: '"nombre"', v: `"${profile.fullname}"` },
  { type: 'kv', k: '"alias"', v: `"${profile.alias}"` },
  { type: 'kv', k: '"rol"', v: '"Backend Developer"' },
  { type: 'kv', k: '"ciudad"', v: `"${profile.city}"` },
  { type: 'kv', k: '"universidad"', v: `"${profile.university}"` },
  { type: 'arr', k: '"stack"', v: ['Java', 'Spring Boot', 'Node.js'] },
  { type: 'bool', k: '"disponible"', v: 'true' },
  { type: 'brace', text: '}' },
];

const mono = { fontFamily: "'Space Mono', monospace" };

export default function About() {
  return (
    <section id="sobre" style={{ padding: '90px 2.5rem', maxWidth: 1080, margin: '0 auto' }}>
      <SectionHeader num="01" title="Sobre mí" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

        <div>
          {profile.bio.map((p, i) => (
            <p key={i} style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.95, marginBottom: '1rem' }}
               dangerouslySetInnerHTML={{ __html: p.replace(/(Spring Boot|Node\.js|Java|APIs REST seguras|CI\/CD|JWT)/g, '<strong style="color:var(--text)">$1</strong>') }} />
          ))}
        </div>

        <div style={{ background: 'var(--card)', border: '0.5px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ background: 'var(--bg3)', padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 7, borderBottom: '0.5px solid var(--border)' }}>
            {['#ff5f57','#febc2e','#28c840'].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
            ))}
            <span style={{ ...mono, fontSize: 10, color: 'var(--muted)', marginLeft: 'auto' }}>profile.json</span>
          </div>
          <div style={{ padding: 18, ...mono, fontSize: 11, lineHeight: 2.1 }}>
            <div><span style={{ color: 'var(--accent)' }}>$ </span><span style={{ color: 'var(--text)' }}>cat profile.json</span></div>
            <div style={{ color: 'var(--muted)' }}>{'{'}</div>
            {[
              ['"nombre"', `"${profile.fullname}"`],
              ['"alias"', `"${profile.alias}"`],
              ['"rol"', '"Backend Developer"'],
              ['"ciudad"', `"${profile.city}"`],
              ['"universidad"', `"${profile.university}"`],
            ].map(([k, v]) => (
              <div key={k}>&nbsp;&nbsp;<span style={{ color: 'var(--accent2)' }}>{k}</span>: <span style={{ color: 'var(--accent3)' }}>{v}</span>,</div>
            ))}
            <div>&nbsp;&nbsp;<span style={{ color: 'var(--accent2)' }}>"stack"</span>: [<span style={{ color: 'var(--accent3)' }}>"Java"</span>, <span style={{ color: 'var(--accent3)' }}>"Spring Boot"</span>, <span style={{ color: 'var(--accent3)' }}>"Node.js"</span>],</div>
            <div>&nbsp;&nbsp;<span style={{ color: 'var(--accent2)' }}>"disponible"</span>: <span style={{ color: 'var(--accent)' }}>true</span></div>
            <div style={{ color: 'var(--muted)' }}>{'}'}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
