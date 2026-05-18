# Portafolio R.Y.G.O

Portafolio personal de Ronald Yamir Gallo Oliva. Contiene proyectos estáticos y full stack con énfasis en HTML, CSS, JavaScript, PHP y Laravel.

## Qué contiene

- `index.html`: página principal con secciones de hero, sobre mí, proyectos, código, habilidades y contacto.
- `estilos/`: archivos CSS organizados por componente.
- `js/main.js`: lógica de interacción, filtros, modales, tabs y animaciones.
- `proyectos_realizados/`: enlaces a proyectos reales en carpetas locales.
- `imagenes/`: recursos visuales usados en las tarjetas de proyecto.
- `videos/`: demos de proyectos con visualizador en modal.

## Mejoras aplicadas

- Tipografía con Google Fonts (`Inter`, `JetBrains Mono`).
- SEO básico con meta tags y Open Graph.
- Accesibilidad mejorada con `focus-visible`, `aria-label`, `aria-expanded` y semántica `<main>`.
- Formulario de contacto funcional con feedback de envío.
- Sección de testimonios agregada.
- Optimización ligera: `img.loading = 'lazy'`, `img.decoding = 'async'` y carga dinámica de videos.
- Mejoras responsive en hero, proyectos, contact y footer.

## Cómo usar

1. Abrir `portafolio_1/index.html` en el navegador.
2. Para desarrollo local, puedes usar un servidor simple si tu navegador requiere servir archivos con HTTP.

### Servidor local rápido (Windows PowerShell)

```powershell
cd c:\Users\yamir\Desktop\PROTAFOLIO\portafolio\portafolio_1
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Siguientes mejoras recomendadas

- Optimizar imágenes con WebP/AVIF y generar `srcset` de distintos tamaños.
- Comprimir y procesar videos para web.
- Agregar despliegue en GitHub Pages o Netlify.
- Revisar los enlaces de proyecto y establecer URL reales donde sea posible.
- Añadir sección de casos de éxito con métricas reales.

## Despliegue

- GitHub Pages: copiar el contenido de `portafolio_1/` al branch `gh-pages` o usar la carpeta raíz como sitio.
- Netlify/Vercel: configurar `portafolio_1/` como carpeta de publicación.
