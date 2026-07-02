/* =============================================
   MAIN.JS — Lógica principal del portafolio
   R.Y.G.O | Ronald Yamir Gallo Oliva
   ============================================= */

/* ---- Datos de proyectos para el modal ---- */
const projectData = {
  dashboard: {
    title: 'Analytics Dashboard',
    badge: 'Analytics',
    badgeClass: '',
    year: '2025',
    role: 'Frontend / UI',
    result: 'Panel interactivo para seguimiento de métricas y toma de decisiones rápidas.',
    icon: 'fa-solid fa-chart-pie',
    images: [
      'imagenes/proyectos_img/dashboard/dashboard.png',
    ],
    desc: 'Panel de métricas interactivo construido 100% con HTML, CSS y JavaScript puro. Incluye gráficas dinámicas con Chart.js, tabla de datos con filtros y exportación CSV.',
    problem: 'No existía una forma visual y rápida de monitorear métricas clave de un negocio. Los datos estaban dispersos en hojas de cálculo sin posibilidad de análisis en tiempo real.',
    solution: 'Dashboard interactivo con KPIs animados, gráficas configurables, filtros en tiempo real y exportación CSV. Todo personalizable desde una página de configuración con persistencia en localStorage.',
    features: [
      'KPI cards con contadores animados y sparklines SVG',
      'Gráfica de líneas con selector de rango (6M / 3M / 1M)',
      'Gráfica de dona con leyenda personalizada',
      'Tabla con filtro en tiempo real, ordenamiento por columna y paginación',
      'Exportar datos a CSV con un clic',
      'Modo claro / oscuro con persistencia en localStorage',
      'Página de configuración: colores, tipo de gráfica, columnas visibles',
      'Sidebar colapsable y diseño 100% responsivo',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'localStorage', 'SVG'],
    link: 'proyectos_realizados/dashboard-analytics/index.html',
    showLink: true,
  },
  gmnorte: {
    title: 'GMnorte',
    badge: 'Construcción',
    badgeClass: '',
    year: '2024',
    role: 'Desarrollo web corporativo',
    result: 'Nueva identidad digital con galería de proyectos y contacto directo.',
    icon: 'fa-solid fa-hard-hat',
    images: [
      'imagenes/proyectos_img/gmnorte/gm_norte.png',
    ],
    desc: 'Sitio web corporativo completo para empresa constructora GMnorte. Desarrollado con HTML5, CSS3 y JavaScript puro, sin frameworks externos.',
    problem: 'La empresa no tenía presencia digital. Sus proyectos y servicios solo se conocían por referidos, limitando su alcance comercial y la confianza de nuevos clientes.',
    solution: 'Sitio corporativo con galería de obras por categoría, estadísticas de impacto animadas y sección de contacto directo, todo sin depender de CMS ni frameworks pesados.',
    features: [
      'Carrusel de proyectos con barra de progreso animada',
      'Galería de obras por categoría (industrial, salud, institucional)',
      'Estadísticas animadas con IntersectionObserver',
      'Sección de clientes con grid responsivo',
      'Mapa de Google Maps integrado con info de contacto',
      'Navbar dinámica cargada por componente JS',
      'Diseño 100% responsivo para móvil y escritorio',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Maps API'],
    link: 'proyectos_realizados/GMnorte.github.io-main/index.html',
    showLink: true,
  },
  imfilio: {
    title: 'IM. FILIO',
    badge: 'Inmobiliaria',
    badgeClass: 'badge-green',
    year: '2024',
    role: 'Experiencia de búsqueda',
    result: 'Búsqueda de propiedades más rápida y experiencia de usuario más intuitiva.',
    icon: 'fa-solid fa-building',
    images: [
      'imagenes/proyectos_img/imfilio/im_filio.png',
    ],
    desc: 'Plataforma inmobiliaria con sistema de búsqueda y filtrado dinámico de propiedades. Permite filtrar por ciudad, precio, área y tipo de propiedad en tiempo real.',
    problem: 'Los clientes no podían explorar el catálogo de propiedades de forma autónoma. La búsqueda era manual y dependía completamente del agente inmobiliario.',
    solution: 'Plataforma con filtros en tiempo real por ciudad, precio y área. El usuario encuentra propiedades sin intermediarios y puede contactar directamente desde cada tarjeta.',
    features: [
      'Filtros dinámicos en tiempo real (ciudad, precio, área, tipo)',
      'Carrusel de tarjetas con navegación por flechas',
      'Tarjeta deslizable con propiedad aleatoria al cargar',
      'Sección de testimonios de clientes',
      'Estadísticas animadas con contador progresivo',
      'Grid de ciudades con overlay interactivo',
      'Sección de servicios inmobiliarios',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Filtros dinámicos'],
    link: 'proyectos_realizados/IM.-FILIO.github.io-main/index.html',
    showLink: true,
  },
  transporte: {
    title: 'Transporte GRUPO AOSC',
    badge: 'Full Stack',
    badgeClass: 'badge-purple',
    year: '2025',
    role: 'Full Stack / Laravel',
    result: 'Gestión integral de rutas, reservas y pagos para transporte público.',
    icon: 'fa-solid fa-bus',
    images: [
      'imagenes/proyectos_img/transporte/img.jpg',
      'imagenes/proyectos_img/transporte/img2.png',
      'imagenes/proyectos_img/transporte/img3.png',
    ],
    desc: 'Plataforma web de gestión de transporte público desarrollada para GRUPO AOSC, empresa ubicada en Talara – Piura. Centraliza la administración de rutas, vehículos, horarios, reservas y pagos, eliminando los procesos manuales que generaban ineficiencias y errores frecuentes.',
    problem: 'GRUPO AOSC gestionaba rutas, vehículos, horarios y usuarios de forma manual, lo que generaba tiempos de respuesta lentos, duplicidad de tareas, sobrecarga laboral y falta de acceso a información en tiempo real para el personal y los pasajeros.',
    solution: 'Plataforma web integral con Laravel y MySQL que centraliza la información, automatiza procesos clave (asignación de buses, reservas, pagos, mantenimiento) y brinda a los pasajeros una experiencia más rápida, segura y transparente. Desarrollada en 4 fases: planificación, elaboración, construcción y transición.',
    features: [
      'Gestión de rutas, vehículos y horarios en tiempo real',
      'Módulo de reservas y pagos en línea',
      'Monitoreo de mantenimiento de flota',
      'Panel administrativo con estadísticas operativas',
      'Interfaz responsiva con Bootstrap y AJAX',
      'Autenticación y roles de usuario diferenciados',
      'Reducción de errores humanos y tiempos operativos',
      'Metodología en cascada: 4 fases de desarrollo',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'AJAX', 'Bootstrap', 'Blade'],
    link: null,
    showLink: false,
    video: 'videos/transporte/transporte-720p.mp4',
    poster: 'videos/transporte/transporte-poster.jpg',
    screenshots: [
      'imagenes/proyectos_img/transporte/img.jpg',
      'imagenes/proyectos_img/transporte/img2.png',
      'imagenes/proyectos_img/transporte/img3.png',
    ],
  },
  alveappweb: {
    title: 'AlveAppWeb',
    badge: 'Full Stack',
    badgeClass: 'badge-purple',
    year: '2025',
    role: 'Gestión de equipos',
    result: 'Control y reportes industriales con autenticación y permisos granulares.',
    icon: 'fa-solid fa-gear',
    images: [
      'imagenes/proyectos_img/alveappweb/alveappweb.png',
      'imagenes/proyectos_img/alveappweb/alveappweb_1.png',
      'imagenes/proyectos_img/alveappweb/alveappweb_2.png',
      'imagenes/proyectos_img/alveappweb/alveappweb_3.png',
    ],
    desc: 'Sistema web de gestión de equipos industriales desarrollado con Laravel 13 y PHP 8.3. Permite registrar, dar seguimiento y generar reportes de equipos con control de acceso granular por roles y permisos.',
    problem: 'El mantenimiento de equipos se registraba en papel o en hojas de cálculo sin trazabilidad, sin control de quién hacía qué, y sin forma de generar reportes o historial de intervenciones.',
    solution: 'Aplicación web con autenticación segura, 4 roles diferenciados, 17 permisos configurables por usuario, checklist interactivo por equipo, generación de QR individual, reportes en PDF y resolución de incidencias vía AJAX.',
    features: [
      'Autenticación con rate limiting, detección de cuenta bloqueada y hint de Caps Lock',
      '4 roles: admin, supervisor, técnico y cliente — con permisos editables por usuario',
      '17 permisos en 6 grupos con árbol de dependencias y cascada en UI',
      'Checklist interactivo por equipo con tipo de seguimiento (preventivo / correctivo / emergencia)',
      'Generación de código QR individual por equipo (A000001…)',
      'Exportación de formularios a PDF con barryvdh/laravel-dompdf',
      'Resolución de reportes vía AJAX con spinner de feedback',
      'Toasts con barra de progreso, pausa en hover y auto-dismiss',
      'Tooltips en celdas truncadas (mouse y touch)',
      'Auditoría de acciones admin con IP, usuario y modelo afectado',
    ],
    tech: ['Laravel 13', 'PHP 8.3', 'MySQL', 'SQLite', 'Blade', 'Sanctum', 'DomPDF', 'QR Code', 'Laragon'],
    link: null,
    showLink: false,
    video: 'videos/alveappweb/alveappweb-720p.mp4',
    poster: 'videos/alveappweb/alveappweb-poster.jpg',
    screenshots: ['imagenes/proyectos_img/alveappweb/alveappweb.png'],
  },
};

/* =============================================
   LÓGICA CENTRAL DE BOTONES POR PROYECTO
   Orden: link → video → imágenes → "no encontrado"
   ============================================= */

function getProjectAction(key) {
  const data = projectData[key];
  if (!data) return { type: 'none' };
  if (data.showLink && data.link)                        return { type: 'link',   value: data.link };
  if (data.video)                                        return { type: 'video',  value: data.video };
  if (data.images && data.images.length > 0)             return { type: 'images', value: data.images };
  return { type: 'none' };
}

function openProject(key) {
  const action = getProjectAction(key);
  if      (action.type === 'link')   window.open(action.value, '_blank');
  else if (action.type === 'video')  openVideoModal(key);
  else if (action.type === 'images') openGalleryModal(key);
  else                               openNotFoundModal(key);
}

/* ---- Renderizar botones en overlay y project-links ---- */
function renderProjectButtons() {
  // Overlays
  document.querySelectorAll('.project-overlay[data-project]').forEach(overlay => {
    const key    = overlay.dataset.project;
    const data   = projectData[key];
    if (!data) return;
    const action = getProjectAction(key);

    let primaryBtn = '';
    if (action.type === 'link') {
      primaryBtn = `<a href="${action.value}" target="_blank" class="overlay-btn" title="Ver sitio" aria-label="Ver sitio ${data.title}">
        <i class="fa-solid fa-eye"></i></a>`;
    } else if (action.type === 'video') {
      primaryBtn = `<button class="overlay-btn overlay-btn--play" onclick="openProject('${key}')" title="Ver demo" aria-label="Ver demo ${data.title}">
        <i class="fa-solid fa-play"></i></button>`;
    } else if (action.type === 'images') {
      primaryBtn = `<button class="overlay-btn overlay-btn--gallery" onclick="openProject('${key}')" title="Ver capturas" aria-label="Ver capturas ${data.title}">
        <i class="fa-solid fa-images"></i></button>`;
    } else {
      primaryBtn = `<button class="overlay-btn overlay-btn--none" onclick="openNotFoundModal('${key}')" title="Sin vista previa" aria-label="Sin vista previa ${data.title}">
        <i class="fa-solid fa-image-slash"></i></button>`;
    }

    overlay.innerHTML = primaryBtn + `
      <button class="overlay-btn" onclick="openModal('${key}')" title="Ver detalles" aria-label="Ver detalles ${data.title}">
        <i class="fa-solid fa-expand"></i>
      </button>`;
  });

  // Botones en project-links
  document.querySelectorAll('.project-links[data-project]').forEach(links => {
    const key    = links.dataset.project;
    const data   = projectData[key];
    if (!data) return;
    const action = getProjectAction(key);

    let primaryBtn = '';
    if (action.type === 'link') {
      primaryBtn = `<a href="${action.value}" target="_blank" class="btn btn-sm btn-primary">
        <i class="fa-solid fa-eye"></i> Ver sitio</a>`;
    } else if (action.type === 'video') {
      primaryBtn = `<button class="btn btn-sm btn-play" onclick="openProject('${key}')">
        <i class="fa-solid fa-play"></i> Ver demo</button>`;
    } else if (action.type === 'images') {
      primaryBtn = `<button class="btn btn-sm btn-gallery" onclick="openProject('${key}')">
        <i class="fa-solid fa-images"></i> Ver capturas</button>`;
    } else {
      primaryBtn = `<button class="btn btn-sm btn-none" onclick="openNotFoundModal('${key}')">
        <i class="fa-solid fa-image-slash"></i> Sin vista previa</button>`;
    }

    links.innerHTML = primaryBtn + `
      <button class="btn btn-sm btn-outline" onclick="openModal('${key}')">
        <i class="fa-solid fa-circle-info"></i> Detalles
      </button>`;
  });
}

/* ---- Modal galería de imágenes ---- */
const getWebpSrc = src => src.replace(/\.(png|jpe?g)$/i, '.webp');
const getWebpSrcSet = src => {
  const webp = getWebpSrc(src);
  const low  = webp.replace(/\.webp$/i, '-650w.webp');
  return `${low} 1x, ${webp} 2x`;
};

function openGalleryModal(key) {
  const data = projectData[key];
  if (!data) return;

  document.getElementById('videoModalTitle').textContent = data.title;

  const video       = document.getElementById('projectVideo');
  const placeholder = document.getElementById('videoPlaceholder');
  const gallery     = document.getElementById('videoGallery');

  // Sin video — mostrar placeholder
  video.style.display       = 'none';
  placeholder.style.display = 'flex';
  placeholder.innerHTML     = `<i class="fa-solid fa-images"></i><p>Capturas del proyecto</p>`;

  // Galería con todas las imágenes
  gallery.innerHTML = '';
  data.images.forEach(src => {
    const picture = document.createElement('picture');
    const source  = document.createElement('source');
    const img     = document.createElement('img');

    source.type   = 'image/webp';
    source.srcset = getWebpSrcSet(src);
    source.sizes  = '(max-width: 700px) 100vw, 340px';

    img.src       = src;
    img.alt       = `Captura de ${data.title}`;
    img.loading   = 'lazy';
    img.decoding  = 'async';
    img.importance= 'low';
    img.addEventListener('click', () => window.open(src, '_blank'));

    picture.appendChild(source);
    picture.appendChild(img);
    gallery.appendChild(picture);
  });
  gallery.style.display = 'grid';

  videoModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ---- Modal sin contenido ---- */
function openNotFoundModal(key) {
  const data = projectData[key] || {};
  document.getElementById('videoModalTitle').textContent = data.title || 'Proyecto';

  const video       = document.getElementById('projectVideo');
  const placeholder = document.getElementById('videoPlaceholder');
  const gallery     = document.getElementById('videoGallery');

  video.style.display       = 'none';
  gallery.style.display     = 'none';
  placeholder.style.display = 'flex';
  placeholder.innerHTML     = `
    <i class="fa-solid fa-image-slash"></i>
    <p>Vista previa no disponible</p>
    <span>Próximamente se agregará contenido</span>`;

  videoModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* =============================================
   SLIDESHOW AUTOMÁTICO EN TARJETAS (cada 5s)
   ============================================= */
function initSlideshows() {
  document.querySelectorAll('.project-slideshow').forEach(slideshow => {
    const imgs = slideshow.querySelectorAll('.slide-img');
    if (imgs.length <= 1) return; // sin slideshow si solo hay 1 imagen

    let current = 0;

    // Crear dots indicadores
    const dots = document.createElement('div');
    dots.className = 'slide-dots';
    imgs.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', e => {
        e.stopPropagation();
        goToSlide(i);
        resetTimer();
      });
      dots.appendChild(dot);
    });
    slideshow.appendChild(dots);

    function goToSlide(index) {
      imgs[current].classList.remove('active');
      dots.children[current].classList.remove('active');
      current = (index + imgs.length) % imgs.length;
      imgs[current].classList.add('active');
      dots.children[current].classList.add('active');
    }

    let timer = setInterval(() => goToSlide(current + 1), 5000);

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => goToSlide(current + 1), 5000);
    }

    // Pausar al hover
    slideshow.addEventListener('mouseenter', () => clearInterval(timer));
    slideshow.addEventListener('mouseleave', () => {
      timer = setInterval(() => goToSlide(current + 1), 5000);
    });
  });
}

/* =============================================
   NAVBAR — scroll y menú móvil
   ============================================= */
const navbar   = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.setAttribute('aria-expanded', 'false');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
  navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Resaltar enlace activo según la página actual
const navAnchors = document.querySelectorAll('.nav-links a');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

navAnchors.forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPath) {
    a.classList.add('active');
  } else {
    a.classList.remove('active');
  }
});

/* =============================================
   FILTROS DE PROYECTOS
   ============================================= */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    // Mostrar/ocultar grupos completos
    const groupEstatico  = document.getElementById('group-estatico');
    const groupFullstack = document.getElementById('group-fullstack');

    if (filter === 'all') {
      groupEstatico.style.display  = '';
      groupFullstack.style.display = '';
    } else if (filter === 'estatico') {
      groupEstatico.style.display  = '';
      groupFullstack.style.display = 'none';
    } else if (filter === 'fullstack') {
      groupEstatico.style.display  = 'none';
      groupFullstack.style.display = '';
    }
  });
});

/* =============================================
   MODAL DE PROYECTO
   ============================================= */
const modalOverlay = document.getElementById('modalOverlay');

function openModal(key) {
  const data = projectData[key];
  if (!data) return;

  document.getElementById('modalTitle').textContent  = data.title;
  document.getElementById('modalDesc').textContent   = data.desc;
  document.getElementById('modalBadge').textContent  = data.badge;
  document.getElementById('modalBadge').className    = `modal-badge ${data.badgeClass}`;
  document.getElementById('modalLink').href          = data.link;

  // Problema / Solución
  const problemEl = document.getElementById('modalProblem');
  if (data.problem && data.solution) {
    problemEl.innerHTML = `
      <div class="modal-problem-item">
        <span class="problem-label"><i class="fa-solid fa-triangle-exclamation"></i> Problema</span>
        <p>${data.problem}</p>
      </div>
      <div class="modal-problem-item">
        <span class="problem-label problem-label--solution"><i class="fa-solid fa-circle-check"></i> Solución</span>
        <p>${data.solution}</p>
      </div>`;
    problemEl.style.display = 'flex';
  } else {
    problemEl.style.display = 'none';
  }

  // Imagen real o ícono placeholder
  const modalMedia = document.getElementById('modalIcon');
  if (data.images && data.images.length > 0) {
    modalMedia.innerHTML = `
      <picture>
        <source type="image/webp" srcset="${getWebpSrcSet(data.images[0])}" sizes="(max-width: 700px) 100vw, 340px" />
        <img src="${data.images[0]}" alt="${data.title}" loading="lazy" decoding="async" importance="low" style="width:100%;height:100%;object-fit:cover;" />
      </picture>`;
  } else {
    modalMedia.innerHTML = `<i class="${data.icon}"></i>`;
  }

  // Características
  const metaEl = document.getElementById('modalMeta');
  metaEl.innerHTML = `
    <div class="modal-meta-item">
      <span>Año</span>
      <strong>${data.year || 'N/A'}</strong>
    </div>
    <div class="modal-meta-item">
      <span>Rol</span>
      <strong>${data.role || 'Desarrollo'}</strong>
    </div>
    <div class="modal-meta-item modal-meta-item--result">
      <span>Resultado clave</span>
      <strong>${data.result || 'Mejora de experiencia y eficiencia.'}</strong>
    </div>`;

  const featEl = document.getElementById('modalFeatures');
  featEl.innerHTML = data.features
    .map(f => `<li><i class="fa-solid fa-check-circle"></i>${f}</li>`)
    .join('');

  // Tech tags
  const techEl = document.getElementById('modalTech');
  techEl.innerHTML = data.tech
    .map(t => `<span class="tech-tag">${t}</span>`)
    .join('');

  // Botón ver proyecto — solo para proyectos con link público
  const linkEl = document.getElementById('modalLink');
  if (data.showLink && data.link) {
    linkEl.href = data.link;
    linkEl.style.display = 'inline-flex';
    linkEl.innerHTML = '<i class="fa-solid fa-eye"></i> Ver proyecto';
  } else {
    linkEl.style.display = 'none';
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* =============================================
   MODAL DE VIDEO / DEMO
   ============================================= */
const videoModalOverlay = document.getElementById('videoModalOverlay');

function _showViewer(type, src) {
  const video         = document.getElementById('projectVideo');
  const viewerImg     = document.getElementById('viewerImg');
  const viewerPicture = document.getElementById('viewerPicture');
  const placeholder   = document.getElementById('videoPlaceholder');

  // Ocultar todo primero
  video.style.display         = 'none';
  viewerPicture.style.display = 'none';
  viewerImg.style.display     = 'none';
  placeholder.style.display   = 'none';
  video.pause();

  if (type === 'video') {
    const source = document.getElementById('videoSource');
    source.src = src;
    video.load();
    video.style.display = 'block';
    // Si falla la carga
    video.onerror = () => {
      video.style.display       = 'none';
      placeholder.style.display = 'flex';
      placeholder.innerHTML     = `<i class="fa-solid fa-video-slash"></i>
        <p>Video no disponible</p><span>El archivo no pudo cargarse</span>`;
    };
  } else if (type === 'image') {
    const viewerSource = document.getElementById('viewerSourceImage');
    viewerSource.srcset = getWebpSrcSet(src);
    viewerSource.sizes  = '(max-width: 700px) 100vw, 340px';
    viewerImg.src       = src;
    viewerImg.alt       = `Captura de ${document.getElementById('videoModalTitle').textContent}`;
    viewerImg.loading   = 'lazy';
    viewerImg.decoding  = 'async';
    viewerImg.importance= 'low';
    const viewerPicture = document.getElementById('viewerPicture');
    viewerPicture.style.display = 'block';
    viewerImg.style.display = 'block';
  } else {
    placeholder.style.display = 'flex';
  }
}

function _buildThumbs(data) {
  const section = document.getElementById('demoThumbsSection');
  const thumbs  = document.getElementById('demoThumbs');
  const badge   = document.getElementById('videoModalBadge');
  const prevBtn = document.getElementById('viewerPrev');
  const nextBtn = document.getElementById('viewerNext');
  const counter = document.getElementById('viewerCounter');
  const items   = []; // { type, src, label }

  if (data.video)                        items.push({ type: 'video', src: data.video, label: 'Video' });
  (data.images || []).forEach((src, i) => items.push({ type: 'image', src, label: `Captura ${i + 1}` }));

  // Índice activo global
  let activeIdx = 0;

  function goTo(idx) {
    activeIdx = (idx + items.length) % items.length;
    const item = items[activeIdx];

    // Actualizar miniatura activa
    thumbs.querySelectorAll('.demo-thumb').forEach((b, i) => b.classList.toggle('active', i === activeIdx));

    // Scroll para que la miniatura activa sea visible
    const activeThumb = thumbs.children[activeIdx];
    if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    // Actualizar badge
    badge.innerHTML = item.type === 'video'
      ? `<i class="fa-solid fa-play"></i> Video`
      : `<i class="fa-solid fa-image"></i> ${item.label}`;

    // Mostrar en visor
    _showViewer(item.type, item.src);

    // Contador
    if (items.length > 1) {
      counter.textContent = `${activeIdx + 1} / ${items.length}`;
      counter.style.display = 'block';
    } else {
      counter.style.display = 'none';
    }

    // Flechas: ocultar si solo hay 1 elemento
    const show = items.length > 1 ? 'flex' : 'none';
    prevBtn.style.display = show;
    nextBtn.style.display = show;
  }

  if (items.length === 0) { section.hidden = true; prevBtn.style.display = 'none'; nextBtn.style.display = 'none'; counter.style.display = 'none'; return; }

  // Construir miniaturas
  thumbs.innerHTML = '';
  section.hidden   = false;

  items.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.className = 'demo-thumb';
    btn.title     = item.label;

    if (item.type === 'video') {
      btn.innerHTML = `<div class="demo-thumb-video">
        <i class="fa-solid fa-play"></i>
        <span>Video</span>
      </div>`;
    } else {
      btn.innerHTML = `<img src="${item.src}" alt="${item.label}" loading="lazy" decoding="async" importance="low" />`;
    }

    btn.addEventListener('click', () => goTo(idx));
    thumbs.appendChild(btn);
  });

  // Flechas del visor
  prevBtn.onclick = () => goTo(activeIdx - 1);
  nextBtn.onclick = () => goTo(activeIdx + 1);

  // Swipe táctil en el visor
  const viewer = document.getElementById('demoViewer');
  let touchStartX = 0;
  viewer.ontouchstart = e => { touchStartX = e.touches[0].clientX; };
  viewer.ontouchend   = e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goTo(activeIdx + 1) : goTo(activeIdx - 1);
  };

  // Scroll con rueda del mouse en la barra de miniaturas
  const thumbsSection = document.getElementById('demoThumbsSection');
  thumbsSection.onwheel = e => {
    e.preventDefault();
    thumbs.scrollLeft += e.deltaY || e.deltaX;
  };

  // Teclado (solo cuando el modal está abierto)
  window._viewerGoTo = goTo;
  window._viewerActive = () => activeIdx;
  window._viewerTotal  = () => items.length;

  // Seleccionar el primero
  goTo(0);
}

function _showVideoModal(key, preferVideo) {
  const data = projectData[key];
  if (!data) return;

  document.getElementById('videoModalTitle').textContent = data.title;

  const hasVideo  = !!data.video;
  const hasImages = data.images && data.images.length > 0;

  // Construir miniaturas
  _buildThumbs(data);

  const video = document.getElementById('projectVideo');
  if (hasVideo) {
    video.poster = data.poster || (data.images && data.images.length > 0 ? data.images[0] : '');
  } else {
    video.poster = '';
  }

  // Si no hay nada que mostrar
  if (!hasVideo && !hasImages) {
    const placeholder = document.getElementById('videoPlaceholder');
    document.getElementById('projectVideo').style.display   = 'none';
    document.getElementById('viewerImg').style.display      = 'none';
    placeholder.style.display = 'flex';
    placeholder.innerHTML = `<i class="fa-solid fa-image-slash"></i>
      <p>Vista previa no disponible</p>
      <span>Próximamente se agregará contenido</span>`;
    document.getElementById('demoThumbsSection').hidden = true;
  }

  videoModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openVideoModal(key)   { _showVideoModal(key, true);  }
function openGalleryModal(key) { _showVideoModal(key, false); }
function openNotFoundModal(key){ _showVideoModal(key, false); }

function closeVideoModal() {
  document.getElementById('projectVideo').pause();
  videoModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (videoModalOverlay) {
  videoModalOverlay.addEventListener('click', e => {
    if (e.target === videoModalOverlay) closeVideoModal();
  });
}

if (modalOverlay) {
  // Cerrar modal de detalles al hacer clic fuera
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });
}

// Escape cierra cualquier modal abierto
document.addEventListener('keydown', e => {
  if (videoModalOverlay && videoModalOverlay.classList.contains('open')) {
    if (e.key === 'ArrowLeft'  && window._viewerGoTo) window._viewerGoTo(window._viewerActive() - 1);
    if (e.key === 'ArrowRight' && window._viewerGoTo) window._viewerGoTo(window._viewerActive() + 1);
    if (e.key === 'Escape') closeVideoModal();
    return;
  }
  if (modalOverlay && modalOverlay.classList.contains('open') && e.key === 'Escape') {
    closeModal();
  }
});

/* =============================================
   TABS DE CÓDIGO
   ============================================= */
document.querySelectorAll('.code-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.tab;

    document.querySelectorAll('.code-tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.code-panel').forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    document.getElementById(targetId).classList.add('active');

    // Re-highlight el panel activo
    document.querySelectorAll(`#${targetId} pre code`).forEach(block => {
      hljs.highlightElement(block);
    });
  });
});

/* =============================================
   COPIAR CÓDIGO
   ============================================= */
function copyCode(btn) {
  const panel = btn.closest('.code-panel');
  const code  = panel.querySelector('code').innerText;

  navigator.clipboard.writeText(code).then(() => {
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    btn.textContent = 'Error';
  });
}

/* =============================================
   ANIMACIONES AL HACER SCROLL
   ============================================= */

// Contador de estadísticas
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const increment = target / 80;
    let current = 0;
    const update = () => {
      current += increment;
      if (current < target) {
        el.textContent = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    };
    update();
  });
}

// Barras de habilidades
function animateSkills() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.width = bar.dataset.width + '%';
  });
}

// IntersectionObserver para secciones
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Observer para contadores
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observer para habilidades
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

/* =============================================
   FORMULARIO DE CONTACTO
   ============================================= */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const btnSubmit = document.getElementById('btn-submit');
  const formNote = document.getElementById('form-note');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Resetear nota
    formNote.textContent = '';
    formNote.className = 'form-note';
    formNote.style.opacity = '1';

    // Validar campos
    if (!name || !email || !message) {
      formNote.textContent = 'Por favor, completa todos los campos obligatorios.';
      formNote.classList.add('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formNote.textContent = 'Por favor, ingresa un correo electrónico válido.';
      formNote.classList.add('error');
      return;
    }

    // Estado cargando en el botón
    const originalText = btnSubmit.innerHTML;
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

    // Simulación de envío API
    setTimeout(() => {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = originalText;

      // Feedback exitoso (usa color accent por defecto)
      formNote.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.';
      form.reset();

      // Desvanecer el mensaje después de 5 segundos
      setTimeout(() => {
        formNote.style.transition = 'opacity 0.5s';
        formNote.style.opacity = '0';
        setTimeout(() => {
          formNote.textContent = '';
          formNote.style.opacity = '1';
          formNote.className = 'form-note';
        }, 500);
      }, 5000);
    }, 1500);
  });
}

/* =============================================
   ACORDEÓN DE FAQ
   ============================================= */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = question.nextElementSibling;
      const isActive = item.classList.contains('active');

      // Cerrar otros acordeones abiertos
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = '0';
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Alternar estado actual
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = '0';
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* =============================================
   INICIALIZACIÓN
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  // Highlight.js
  document.querySelectorAll('pre code').forEach(block => {
    hljs.highlightElement(block);
  });

  // Optimizar imágenes ya cargadas
  document.querySelectorAll('img').forEach(img => {
    if (!img.loading) img.loading = 'lazy';
    if (!img.decoding) img.decoding = 'async';
    if (!img.importance) img.importance = 'low';
  });

  // Formulario de contacto
  initContactForm();

  // Acordeón FAQ
  initFaqAccordion();

  // Botones dinámicos por proyecto
  renderProjectButtons();

  // Slideshows
  initSlideshows();

  // Reveal al scroll
  document.querySelectorAll('.project-card, .skill-card, .contact-item, .about-grid').forEach(el => {
    el.classList.add('reveal');
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // Contadores (solo si existen en el DOM)
  const aboutSection = document.getElementById('sobre-mi');
  if (aboutSection && aboutSection.querySelector('.stat-num')) {
    counterObserver.observe(aboutSection);
  }

  // Habilidades
  const skillsSection = document.getElementById('habilidades');
  if (skillsSection) skillsObserver.observe(skillsSection);
});
