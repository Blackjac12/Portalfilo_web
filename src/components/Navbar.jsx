import styles from './Navbar.module.css'

const links = [
  { href: '#sobre', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#proyectos', label: 'projects' },
  { href: '#contacto', label: 'contact' },
]

export default function Navbar() {
  const scroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>JSE<span>.</span>DEV</div>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => scroll(e, l.href)}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
