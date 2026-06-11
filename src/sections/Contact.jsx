import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useScrollReveal()
  return (
    <section id="contacto" className={styles.section}>
      <div ref={ref} className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>04 /</span>
          <h2 className={styles.title}>Contacto</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.grid}>
          <div>
            <p className={styles.text}>
              ¿Tienes un proyecto en mente o quieres colaborar? Estoy{' '}
              <strong>disponible para proyectos</strong> y oportunidades. No dudes en escribirme.
            </p>
            <div className={styles.links}>
              <a href="https://github.com/Blackjac12" target="_blank" rel="noopener noreferrer" className={styles.clink}>
                <div className={styles.icon}>⬡</div>
                github.com/Blackjac12
              </a>
              <a href="mailto:tuemail@gmail.com" className={styles.clink}>
                <div className={styles.icon}>@</div>
                tuemail@gmail.com
              </a>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className={styles.clink}>
                <div className={styles.icon}>in</div>
                LinkedIn
              </a>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <div className={styles.avatar}>JSE</div>
              <div className={styles.cardName}>Juan Sebastián Estupiñán</div>
              <div className={styles.cardSub}>BACKEND DEVELOPER · UDES · CÚCUTA</div>
              <div className={styles.stackLabel}>STACK PRINCIPAL</div>
              <div className={styles.stackTags}>
                {['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'].map(t => (
                  <span key={t} className={styles.stag}>{t}</span>
                ))}
              </div>
            </div>
            <div className={styles.avail}>
              <span className={styles.pulse} />
              Disponible para proyectos
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
