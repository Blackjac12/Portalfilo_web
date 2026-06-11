export default function SectionHeader({ num, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.8rem' }}>
      <span style={{
        fontFamily: "'Space Mono', monospace", fontSize: 11,
        color: 'var(--accent)', letterSpacing: '0.12em',
      }}>
        {num} /
      </span>
      <h2 style={{ fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{title}</h2>
      <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
    </div>
  );
}
