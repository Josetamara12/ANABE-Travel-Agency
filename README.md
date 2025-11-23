README – ANABÈ TRAVEL

Prototipo funcional – Arquitectura de Software

ANABÈ TRAVEL es una plataforma web diseñada para facilitar la búsqueda, exploración y reserva de destinos turísticos, alojamientos, transporte y servicios relacionados. Su objetivo es ofrecer una experiencia intuitiva, ordenada y moderna, construida con Next.js y aplicando buenas prácticas arquitectónicas, patrones de diseño y principios SOLID.

Este repositorio contiene el prototipo funcional desarrollado como parte del entregable académico del curso de Arquitectura de Software.

1. Tecnologías principales

- Next.js 14 (App Router)
- React + TypeScript
- TailwindCSS
- shadcn/ui
- Iconografía SVG
- Node.js
- Bundler: Turbopack

2. Arquitectura utilizada

La arquitectura del proyecto se basa en:

- Frontend desacoplado con Next.js App Router
- Arquitectura modular por rutas
- Componentes reutilizables bajo Atomic Design

- Patrones de diseño aplicados:
  - Repository
  - Strategy
  - Adapter
  - Factory Method
  - Singleton
  - Dependency Injection
- Cumplimiento de principios SOLID
- Modelado con Modelo C4 (Niveles 1, 2 y 3)

- Diagramas UML:
  _ Diagrama de clases
  _ Diagrama de componentes \* Diagrama de despliegue
  El objetivo es lograr un sistema escalable, mantenible y extensible.

3. Estructura del Proyecto

ANABE-Travel-Agency/
│── public/ # Recursos estáticos (imágenes, íconos)
│── src/
│ ├── app/
│ │ ├── dashboard/ # Módulos principales del sistema
│ │ ├── layout.tsx # Layout global
│ │ └── page.tsx # Landing page
│ ├── components/
│ │ ├── ui/ # Componentes de la librería shadcn/ui
│ │ ├── nav-\*.tsx # Navegación general
│ │ └── theme-provider.tsx
│ ├── hooks/ # Hooks reutilizables
│ └── lib/ # Utilidades compartidas
│── package.json
│── tsconfig.json
│── README.md

4. Funcionalidades principales

- Sección de destinos populares
- Módulo de alojamientos
- Galería de imágenes
- Opiniones y valoraciones
- Oficinas y guías turísticos
- Promociones y catálogo
- Gestión de videos turísticos
- Formulario de contacto
- Transporte y opciones de viaje

(Esta versión es un prototipo funcional centrado en la experiencia del usuario y la estructura modular.)

5. Cómo ejecutar el proyecto localmente

5.1. Clonar el repositorio
git clone https://github.com/Josetamara12/ANABE-Travel-Agency.git

5.2. Instalar dependencias
npm install

5.3. Ejecutar el servidor de desarrollo
npm run dev

5.4. Abrir en el navegador
http://localhost:3000

6. Información adicional del entorno Next.js (versión en español)

- Este proyecto fue creado con la herramienta oficial de Next.js:
  create-next-app

7. Ejecutar el servidor de desarrollo

- Puedes utilizar cualquiera de los siguientes comandos:

npm run dev

# o

yarn dev

# o

pnpm dev

# o

bun dev

Luego abre:
http://localhost:3000

8. Edición en tiempo real

Puedes editar la página principal modificando:

src/app/page.tsx

Next.js recargará los cambios automáticamente.

9. Optimización de fuentes

Se utiliza next/font
para optimizar la carga de tipografías.
Este proyecto usa la familia Geist, desarrollada por Vercel.

10. Más información sobre Next.js

- Documentación oficial: https://nextjs.org/docs
- Tutorial interactivo: https://nextjs.org/learn
- Repositorio GitHub de Next.js: https://github.com/vercel/next.js

11. Despliegue en Vercel

- La forma más rápida de desplegar Next.js es mediante Vercel:

https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme

- Guía de despliegue oficial:
  https://nextjs.org/docs/app/building-your-application/deploying

12. Patrones de diseño aplicados

- Repository Pattern – Aísla el acceso a datos o mock data
- Adapter Pattern – Aísla la interacción con APIs externas
- Factory Method – Construcción flexible de servicios o recursos
- Strategy Pattern – Selección de comportamiento según contexto
- Singleton – Gestión de configuraciones únicas
- Dependency Injection – Control explícito de dependencias

13. Modelado Arquitectónico

Incluido en el documento PDF final:

- C4 Nivel 1 (Contexto)
- C4 Nivel 2 (Contenedores)
- C4 Nivel 3 (Componentes del Backend)
- Diagrama de clases UML
- Diagrama de componentes UML
- Diagrama de despliegue UML
- Justificación técnica
- Análisis crítico
- Evidencia de IA
- Bibliografía APA

Autor:

Jose Luis Tamara Martínez
Proyecto académico – Arquitectura de Software
