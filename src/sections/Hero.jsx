import styles from './Hero.module.css'

export default function Hero() {
  const scroll = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridBg} />
      <p className={styles.eyebrow}>Backend Developer · Cúcuta, Colombia</p>
      <h1 className={styles.name}>
        <span>Juan</span>
        <span>Sebastián</span>
        <span className={styles.outline}>Estupiñán</span>
      </h1>
      <div className={styles.role}>
        <span className={styles.pulse} />
        Ingeniería de Software · UDES · Especialista Backend &amp; APIs
      </div>
      <p className={styles.bio}>
        Construyo sistemas backend robustos, APIs RESTful y arquitecturas escalables.
        Apasionado por la <strong>seguridad</strong>, la{' '}
        <strong>integración continua</strong> y las soluciones que resuelven problemas reales.
      </p>
      <div className={styles.ctas}>
        <button className={styles.btnP} onClick={() => scroll('#proyectos')}>Ver proyectos</button>
        <button className={styles.btnO} onClick={() => scroll('#contacto')}>Contacto</button>
      </div>
      <div className={styles.stats}>
        {[
          { n: '3+', l: 'años experiencia' },
          { n: '3', l: 'proyectos reales' },
          { n: '10+', l: 'tecnologías' },
        ].map(s => (
          <div key={s.l} className={styles.stat}>
            <div className={styles.statN}>{s.n}</div>
            <div className={styles.statL}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
