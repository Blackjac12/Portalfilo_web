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
              <a href="mailto:viennet18@outlook.es" className={styles.clink}>
                <div className={styles.icon}>@</div>
                viennet18@outlook.es
              </a>
              <a href="tel:+573022655579" className={styles.clink}>
                <div className={styles.icon}>☎</div>
                (+57) 302 2655579
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
