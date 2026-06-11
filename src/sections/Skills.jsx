import { useScrollReveal } from '../hooks/useScrollReveal'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useScrollReveal()
  return (
    <section id="skills" className={styles.section}>
      <div ref={ref} className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>02 /</span>
          <h2 className={styles.title}>Habilidades</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.grid}>
          {skills.map(sk => (
            <div key={sk.name} className={styles.card}>
              <div className={styles.cat}>{sk.cat}</div>
              <div className={styles.name}>{sk.name}</div>
              <div className={styles.desc}>{sk.desc}</div>
              <div className={styles.barWrap}>
                <div className={styles.bar} style={{ width: `${sk.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
