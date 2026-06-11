import { useEffect, useState } from 'react'
import styles from './ProjectDetail.module.css'

function Screenshot({ src, caption }) {
  const [status, setStatus] = useState('loading') // loading | ok | error

  return (
    <div className={styles.shot}>
      {status === 'loading' && (
        <div className={styles.shotLoader}>
          <span className={styles.shotDots}>cargando preview</span>
        </div>
      )}
      {status === 'error' && (
        <div className={styles.shotError}>
          <span>No se pudo cargar la preview</span>
        </div>
      )}
      <img
        src={src}
        alt={caption}
        className={`${styles.shotImg} ${status === 'ok' ? styles.shotVisible : ''}`}
        onLoad={() => setStatus('ok')}
        onError={() => setStatus('error')}
      />
      {status === 'ok' && <div className={styles.shotCaption}>{caption}</div>}
    </div>
  )
}

export default function ProjectDetail({ project: p, onClose }) {
  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className={styles.panelHeader}>
          <div>
            <div className={styles.panelNum}>{p.num} /</div>
            <h2 className={styles.panelName}>{p.name}</h2>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={styles.panelBody}>

          {/* Tags */}
          <div className={styles.tags}>
            {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>

          {/* Descripción */}
          <div className={styles.descBlock}>
            {p.fullDesc.map((para, i) => (
              <p key={i} className={styles.descPara}>{para}</p>
            ))}
          </div>

          {/* Screenshots */}
          {p.screenshots.length > 0 && (
            <div className={styles.block}>
              <div className={styles.blockTitle}>
                <span className={styles.blockNum}>—</span> Capturas del proyecto
              </div>
              <div className={styles.screenshots}>
                {p.screenshots.map((s, i) => (
                  <Screenshot key={i} src={s.url} caption={s.caption} />
                ))}
              </div>
            </div>
          )}

          {p.screenshots.length === 0 && (
            <div className={styles.noScreenshot}>
              <span>Aplicación desktop — sin preview web disponible</span>
            </div>
          )}

          {/* Tecnologías detalladas */}
          <div className={styles.block}>
            <div className={styles.blockTitle}>
              <span className={styles.blockNum}>—</span> Stack tecnológico
            </div>
            <div className={styles.techGrid}>
              {p.techDetail.map(group => (
                <div key={group.cat} className={styles.techGroup}>
                  <div className={styles.techCat}>{group.cat}</div>
                  <div className={styles.techItems}>
                    {group.items.map(item => (
                      <span key={item} className={styles.techItem}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={styles.block}>
            <div className={styles.blockTitle}>
              <span className={styles.blockNum}>—</span> Links
            </div>
            <div className={styles.linkRow}>
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className={`${styles.link} ${styles.linkLive}`}>
                  🔗 Ver en vivo
                </a>
              )}
              <a href={p.backendRepo} target="_blank" rel="noopener noreferrer"
                className={`${styles.link} ${styles.linkGit}`}>
                ⬡ Backend (mío) — GitHub
              </a>
              {p.frontendRepo && (
                <a href={p.frontendRepo} target="_blank" rel="noopener noreferrer"
                  className={`${styles.link} ${styles.linkGit}`}>
                  ⬡ Frontend ({p.frontendAuthor}) — GitHub
                </a>
              )}
            </div>
            {p.note && <div className={styles.note}>{p.note}</div>}
          </div>

        </div>
      </div>
    </div>
  )
}
