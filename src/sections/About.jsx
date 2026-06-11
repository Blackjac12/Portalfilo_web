import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

export default function About() {
  const ref = useScrollReveal()
  return (
    <section id="sobre" className={styles.section}>
      <div ref={ref} className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>01 /</span>
          <h2 className={styles.title}>Sobre mí</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>Soy estudiante de <strong>Ingeniería de Software</strong> en la Universidad de Santander (UDES), con especialización en desarrollo backend y arquitectura de sistemas.</p>
            <p>Me especializo en construir <strong>APIs REST seguras</strong>, diseñar bases de datos eficientes y desarrollar soluciones de backend con tecnologías como <strong>Spring Boot, Node.js y Java</strong>.</p>
            <p>He participado en proyectos reales: sistemas de seguridad con autenticación avanzada, plataformas académicas con CI/CD y aplicaciones de escritorio para simulación.</p>
          </div>
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span className={`${styles.dot} ${styles.d1}`} />
              <span className={`${styles.dot} ${styles.d2}`} />
              <span className={`${styles.dot} ${styles.d3}`} />
              <span className={styles.termTitle}>profile.json</span>
            </div>
            <div className={styles.termBody}>
              <div><span className={styles.tp}>$</span> <span className={styles.tc}>cat profile.json</span></div>
              <div><span className={styles.to}>{'{'}</span></div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>"nombre"</span>: <span className={styles.tv}>"Juan Sebastián Estupiñán"</span>,</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>"alias"</span>: <span className={styles.tv}>"Blackjac12"</span>,</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>"rol"</span>: <span className={styles.tv}>"Backend Developer"</span>,</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>"ciudad"</span>: <span className={styles.tv}>"Cúcuta, Colombia"</span>,</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>"universidad"</span>: <span className={styles.tv}>"UDES"</span>,</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>"stack"</span>: [<span className={styles.tv}>"Java"</span>, <span className={styles.tv}>"Spring Boot"</span>],</div>
              <div>&nbsp;&nbsp;<span className={styles.tk}>"disponible"</span>: <span className={styles.tp}>true</span></div>
              <div><span className={styles.to}>{'}'}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
