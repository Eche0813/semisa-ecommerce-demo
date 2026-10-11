# 🚀 Semisa Web Solutions — Landing Page Oficial

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)

Sitio web oficial y centro de operaciones digital de **Semisa Web Solutions**. Esta plataforma está diseñada bajo una arquitectura moderna de Next.js (App Router), con una propuesta estética escandinava/minimalista caracterizada por tonos neutros, acentos metálicos (dorado/plateado) y tarjetas interactivas con efectos 3D.

---

## 🌟 Características Principales

- **Diseño UI/UX de Alto Nivel:** Fondo limpio con acentos cromáticos y tarjetas flotantes en capas 3D.
- **Arquitectura Totalmente Modular:** Separación estricta de responsabilidades en componentes independientes (`Navbar`, `HeroSection`, `ServicesSection`, `ShowcaseGrid`, `MethodologySection`, `Footer`).
- **Showcase & Portafolio Interactivo:** Sección dedicada a la exhibición de Demos en Vivo con enlaces directos a proyectos en producción y accesos a paneles administrativos.
- **Optimización & Rendimiento:** Estructura ligera con rendering optimizado y prevención de errores de hidratación mediante estados del lado del cliente.
- **Mantenibilidad:** Datos estáticos de servicios y demos centralizados en `data/agencyData.ts`.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Despliegue:** [Vercel Edge Network](https://vercel.com/)

---

## 📂 Estructura del Proyecto

```text
semisa-agency-web/
├── app/
│   ├── components/
│   │   ├── Footer.tsx             # Pie de página oficial con copyright dinámico
│   │   ├── HeroSection.tsx        # Sección principal con tarjetas 3D flotantes
│   │   ├── MethodologySection.tsx # Explicación de las 4 fases de trabajo (#nosotros)
│   │   ├── Navbar.tsx             # Navegación flotante con enlaces de ancla
│   │   ├── ServicesSection.tsx    # Cuadrícula de oferta de servicios (#servicios)
│   │   └── ShowcaseGrid.tsx       # Módulo de demos en vivo y catálogo de proyectos (#demos)
│   ├── globals.css                # Estilos globales y directivas de Tailwind CSS
│   ├── layout.tsx                 # Root layout del proyecto
│   └── page.tsx                   # Orquestador principal declarativo
├── data/
│   └── agencyData.ts              # Modelo de datos y catálogo de proyectos en vivo
├── public/                        # Recursos estáticos e isotipo
└── package.json