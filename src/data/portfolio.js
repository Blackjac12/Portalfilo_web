// Passafe screenshots
import p1 from '../assets/projects/passafe/p1.png'
import p2 from '../assets/projects/passafe/p2.png'
import p3 from '../assets/projects/passafe/p3.png'
import p4 from '../assets/projects/passafe/p4.png'
import p5 from '../assets/projects/passafe/p5.png'

// ARA screenshots
import ara1 from '../assets/projects/ara/ara1.png'
import ara2 from '../assets/projects/ara/ara2.png'
import ara3 from '../assets/projects/ara/ara3.png'

// Curriculums screenshots
import curr1 from '../assets/projects/curriculums/curr1.png'
import curr2 from '../assets/projects/curriculums/curr2.png'
import curr3 from '../assets/projects/curriculums/curr3.png'
import curr4 from '../assets/projects/curriculums/curr4.png'
import curr5 from '../assets/projects/curriculums/curr5.png'
import curr6 from '../assets/projects/curriculums/curr6.png'

export const projects = [
  {
    id: 'passafe',
    num: '01',
    name: 'Passafe',
    shortDesc: 'Plataforma educativa de seguridad y contraseñas con simulador de ataques reales.',
    tags: ['Spring Boot', 'PostgreSQL', 'JWT', 'Spring Security', 'Java'],
    live: 'https://frontend-passafe.vercel.app/',
    backendRepo: 'https://github.com/Blackjac12/Backed_passefe',
    frontendRepo: 'https://github.com/JuanseD/frontend_passafe',
    frontendAuthor: 'JuanseD',
    note: 'Backend desarrollado por mí · Frontend por colaborador JuanseD',
    fullDesc: [
      'Passafe es una aplicación web educativa desarrollada en el marco de la Universidad de Santander (UDES) para concientizar sobre la seguridad de contraseñas y los métodos de ataque más comunes.',
      'La plataforma permite simular ataques reales como Fuerza Bruta, Ataque de Diccionario, Relleno de Credenciales e Ingeniería Social usando datos ficticios, mostrando al usuario qué tan vulnerable puede ser una contraseña.',
      'Incluye módulos educativos sobre Normas ISO 27001/27002, Tips de Seguridad, Ingeniería Social y Normativa Colombiana. El backend gestiona la lógica de simulación, autenticación JWT y control de acceso por roles.',
    ],
    screenshots: [
      { url: p1, caption: 'Términos y condiciones de uso' },
      { url: p2, caption: 'Bienvenida — Módulos disponibles' },
      { url: p3, caption: 'Simulador de Ataque' },
      { url: p4, caption: 'Normas ISO 27001/27002' },
      { url: p5, caption: 'Tips de Seguridad' },
    ],
    techDetail: [
      { cat: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'BCrypt'] },
      { cat: 'Base de datos', items: ['PostgreSQL', 'Spring Data JPA', 'Hibernate'] },
      { cat: 'Infraestructura', items: ['Docker', 'CI/CD', 'Vercel (frontend)'] },
      { cat: 'Frontend', items: ['HTML', 'CSS', 'JavaScript (colaborador JuanseD)'] },
    ],
  },
  {
    id: 'simulador-ara',
    num: '02',
    name: 'Simulador de ARA',
    shortDesc: 'Simulación visual del servicio de cajas de Tienda Ara con métricas de teoría de colas.',
    tags: ['Java', 'Desktop', 'Simulación', 'Teoría de Colas'],
    live: null,
    backendRepo: 'https://github.com/Blackjac12/Simulador_de_ara',
    frontendRepo: null,
    frontendAuthor: null,
    note: 'Aplicación desktop — disponible vía repositorio GitHub',
    fullDesc: [
      'Simulador de escritorio desarrollado en Java que modela el comportamiento del servicio de cajas de Tienda Ara, aplicando conceptos de Teoría de Colas (M/M/c).',
      'El usuario configura parámetros del sistema: número de cajeros, clientes a simular, tiempo entre llegadas y tiempo de servicio. El motor calcula métricas teóricas como factor de utilización (ρ), probabilidad de sistema vacío (Po), longitud de cola (Lq) y tiempos de espera (Wq, Ws).',
      'La simulación se visualiza en tiempo real con una representación gráfica pixel-art de la tienda, donde los clientes se mueven entre las filas y las cajas, con indicadores de estado para cada cajero.',
    ],
    screenshots: [
      { url: ara1, caption: 'Configuración de parámetros del sistema' },
      { url: ara2, caption: 'Resultados teóricos — Métricas de colas' },
      { url: ara3, caption: 'Visualizador en tiempo real — Tienda Ara' },
    ],
    techDetail: [
      { cat: 'Lenguaje', items: ['Java'] },
      { cat: 'Interfaz gráfica', items: ['Java Swing', 'Pixel Art rendering'] },
      { cat: 'Algoritmos', items: ['Teoría de Colas M/M/c', 'Simulación de eventos'] },
      { cat: 'Arquitectura', items: ['Desktop App', 'MVC'] },
    ],
  },
  {
    id: 'curriculums',
    num: '03',
    name: 'Curriculums & Study Plans',
    shortDesc: 'Plataforma académica para gestión de planes de estudio de profesores de inglés — ISE.',
    tags: ['Spring Boot', 'PostgreSQL', 'JWT', 'Docker', 'CI/CD', 'Vue.js'],
    live: 'https://curriculum-study-plan-frontend.vercel.app/login',
    backendRepo: 'https://github.com/Blackjac12/curriculum-study-plan-baked',
    frontendRepo: 'https://github.com/Londad99/curriculum-study-plan-frontend',
    frontendAuthor: 'Londad99',
    note: 'Backend desarrollado por mí · Frontend por colaborador Londad99 · Proyecto ISE × UDES',
    fullDesc: [
      'Plataforma web desarrollada para ISE (Instituto de Superación en Inglés), una empresa de enseñanza de inglés, en convenio con la Universidad de Santander (UDES) como parte de las prácticas universitarias.',
      'El sistema permite a los profesores gestionar sus currículos académicos, crear planes de estudio con fechas específicas, asignar subtemas por sesión (Gramática, Vocabulario) y hacer seguimiento del progreso de cada grupo.',
      'El backend implementa un flujo completo de registro con verificación de cuenta por correo electrónico (código de 6 dígitos), sistema de roles dinámico con aprobación por administradores, autenticación JWT y gestión de usuarios. Desplegado con Docker y CI/CD.',
    ],
    screenshots: [
      { url: curr1, caption: 'Login — Bienvenida ISE' },
      { url: curr2, caption: 'Registro de usuario' },
      { url: curr3, caption: 'Verificación por código de correo' },
      { url: curr4, caption: 'Cuenta pendiente de aprobación' },
      { url: curr5, caption: 'Dashboard — Currículos por nivel' },
      { url: curr6, caption: 'Plan de estudio — Fechas y subtemas' },
    ],
    techDetail: [
      { cat: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'WebFlux'] },
      { cat: 'Base de datos', items: ['PostgreSQL', 'Spring Data JPA', 'Railway'] },
      { cat: 'Infraestructura', items: ['Docker', 'CI/CD', 'Vercel (frontend)'] },
      { cat: 'Frontend', items: ['Vue.js (colaborador Londad99)'] },
    ],
  },
]

export const skills = [
  { cat: 'Lenguaje principal', name: 'Java', desc: 'Backend empresarial, OOP, ecosistema Spring', level: 88 },
  { cat: 'Framework', name: 'Spring Boot', desc: 'REST APIs, Security, JPA, JWT, WebFlux', level: 85 },
  { cat: 'Runtime', name: 'Node.js', desc: 'Express, APIs asíncronas, servicios RESTful', level: 75 },
  { cat: 'Base de datos', name: 'PostgreSQL / MySQL', desc: 'Modelado relacional, consultas optimizadas', level: 82 },
  { cat: 'DevOps', name: 'Docker & CI/CD', desc: 'Contenedores, pipelines de integración continua', level: 72 },
  { cat: 'Seguridad', name: 'JWT & Spring Security', desc: 'Auth stateless, BCrypt, roles, filtros', level: 80 },
]
