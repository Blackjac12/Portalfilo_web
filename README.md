# Portfolio — Juan Sebastián Estupiñán Ramírez

Portafolio personal construido con **React + Vite**.

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev
# → http://localhost:5173

# 3. Build para producción
npm run build

# 4. Preview del build
npm run preview
```

## Estructura del proyecto

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx              # Entrada
│   ├── App.jsx               # Componente raíz
│   ├── styles/
│   │   └── global.css        # Variables CSS y estilos globales
│   ├── data/
│   │   └── portfolio.js      # ← TUS DATOS (proyectos, skills)
│   ├── hooks/
│   │   ├── useCursor.js      # Cursor personalizado
│   │   └── useScrollReveal.js # Animaciones al hacer scroll
│   ├── components/
│   │   ├── Cursor.jsx
│   │   └── Navbar.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       └── Contact.jsx
```

## Personalizar

- **Proyectos y skills**: edita `src/data/portfolio.js`
- **Correo / LinkedIn**: edita `src/sections/Contact.jsx`
- **Colores**: edita las variables en `src/styles/global.css`

## Deploy en Vercel

```bash
npm install -g vercel
vercel
```

O conecta el repositorio en vercel.com y despliega automáticamente.
