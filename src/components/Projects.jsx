import { useState } from 'react';
import { projects } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const mono = { fontFamily: "'Space Mono', monospace" };

function ProjectCard({ project, isOpen, onToggle }) {
  const { id, name, desc, tags, liveUrl, backendUrl, frontendUrl, frontendAuthor, note, isDesktop } = project;

  return (
    <div
      style={{ background: isOpen ? 'var(--bg3)' : 'var(--card)', transition: 'background 0.2s' }}
    >
      <div
        className="hoverable"
        onClick={onToggle}
        style={{ padding: '1.8rem 2rem', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.5rem', alignItems: 'center' }}
        onMouseEnter={e => { if (!isOpen) e.currentTarget.parentElement.style.background = 'var(--bg3)'; }}
        onMouseLeave={e => { if (!isOpen) e.currentTarget.parentElement.style.background = 'var(--card)'; }}
      >
        <div style={{ ...mono, fontSize: 10, color: 'var(--muted)', width: 22 }}>{id}</div>

        <div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            {tags.map(t => (
              <span key={t} style={{
                ...mono, fontSize: 9, padding: '2px 9px',
                color: 'var(--accent2)', border: '0.5px solid rgba(14,165,233,0.25)',
                letterSpacing: '0.05em',
              }}>{t}</span>
            ))}
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.3rem' }}>{name}</div>
          <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.75 }}>{desc}</div>
        </div>

        <div style={{ ...mono, fontSize: 16, color: isOpen ? 'var(--accent)' : 'var(--muted)', transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'all 0.2s' }}>
          →
        </div>
      </div>

      {isOpen && (
        <div style={{
          borderTop: '0.5px solid var(--border)',
          padding: '1.2rem 2rem',
          display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          animation: 'fadeIn 0.2s ease',
        }}>
          <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}`}</style>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" style={{
                ...mono, fontSize: 10, padding: '7px 16px',
                background: 'var(--accent)', color: '#07090f',
                textDecoration: 'none', letterSpacing: '0.06em',
                clipPath: 'polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#00fbb5'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >
                🔗 Ver en vivo
              </a>
            )}
            {backendUrl && (
              <a href={backendUrl} target="_blank" rel="noreferrer" style={{
                ...mono, fontSize: 10, padding: '7px 16px',
                color: 'var(--muted)', border: '0.5px solid var(--border2)',
                textDecoration: 'none', letterSpacing: '0.06em', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--muted)'; }}
              >
                ⬡ {isDesktop ? 'Ver repositorio' : 'Backend (mío)'}
              </a>
            )}
            {frontendUrl && (
              <a href={frontendUrl} target="_blank" rel="noreferrer" style={{
                ...mono, fontSize: 10, padding: '7px 16px',
                color: 'var(--muted)', border: '0.5px solid var(--border2)',
                textDecoration: 'none', letterSpacing: '0.06em', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--muted)'; }}
              >
                ⬡ Frontend ({frontendAuthor})
              </a>
            )}
          </div>
          <div style={{ ...mono, fontSize: 10, color: 'var(--muted)', fontStyle: 'italic', maxWidth: 320 }}>{note}</div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="proyectos" style={{ padding: '90px 2.5rem', maxWidth: 1080, margin: '0 auto' }}>
      <SectionHeader num="03" title="Proyectos" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', border: '0.5px solid var(--border)' }}>
        {projects.map(p => (
          <ProjectCard
            key={p.id}
            project={p}
            isOpen={openId === p.id}
            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
          />
        ))}
      </div>
    </section>
  );
}
