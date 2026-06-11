import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/portfolio'
import ProjectDetail from './ProjectDetail'
import styles from './Projects.module.css'

function ProjectCard({ p, onDetail }) {
  return (
    <div className={styles.card} onClick={() => onDetail(p)}>
      <div className={styles.main}>
        <div className={styles.num}>{p.num}</div>
        <div className={styles.info}>
          <div className={styles.tags}>
            {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
          <div className={styles.name}>{p.name}</div>
          <div className={styles.desc}>{p.shortDesc}</div>
        </div>
        <button className={styles.btnMore} onClick={e => { e.stopPropagation(); onDetail(p) }}>
          ＋ Ver más
        </button>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useScrollReveal()
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="proyectos" className={styles.section}>
        <div ref={ref} className={styles.inner}>
          <div className={styles.header}>
            <span className={styles.num}>03 /</span>
            <h2 className={styles.title}>Proyectos</h2>
            <div className={styles.line} />
          </div>
          <div className={styles.list}>
            {projects.map(p => (
              <ProjectCard key={p.id} p={p} onDetail={setSelected} />
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <ProjectDetail project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
