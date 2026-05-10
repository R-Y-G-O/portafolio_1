/* =============================================
   MAIN.JS — Inicialización y lógica general
   Dashboard Analytics — R.Y.G.O
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  const body = document.body;

  /* =============================================
     APLICAR CONFIGURACIÓN GUARDADA
     ============================================= */
  function applyStoredConfig() {
    try {
      const saved = localStorage.getItem('dashboard-config');
      if (!saved) return;
      const cfg = JSON.parse(saved);

      if (cfg.theme === 'light') {
        body.classList.add('light');
        const btn = document.getElementById('themeToggle');
        if (btn) btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      }

      if (cfg.accentColor) {
        const c = cfg.accentColor;
        const r = parseInt(c.slice(1,3),16);
        const g = parseInt(c.slice(3,5),16);
        const b = parseInt(c.slice(5,7),16);
        document.documentElement.style.setProperty('--blue',       c);
        document.documentElement.style.setProperty('--blue-glow',  `rgba(${r},${g},${b},0.22)`);
        document.documentElement.style.setProperty('--blue-light', c);
      }

      if (cfg.density)         body.dataset.density = cfg.density;
      if (cfg.sidebarCollapsed) body.classList.add('sidebar-collapsed');

      if (cfg.kpiVisible) {
        const kpiMap = ['users','revenue','orders','satisfaction'];
        document.querySelectorAll('.kpi-card').forEach((card, i) => {
          const key = kpiMap[i];
          if (key && cfg.kpiVisible[key] === false) card.style.display = 'none';
        });
      }
    } catch(e) { /* silencioso */ }
  }

  applyStoredConfig();

  /* =============================================
     NOTIFICACIONES
     ============================================= */
  const notifBtn   = document.getElementById('notifBtn');
  const notifPanel = document.getElementById('notifPanel');
  const notifClear = document.getElementById('notifClear');

  if (notifBtn && notifPanel) {
    notifBtn.addEventListener('click', e => {
      e.stopPropagation();
      notifPanel.hidden = !notifPanel.hidden;
      // Cerrar menú de usuario si está abierto
      const ud = document.getElementById('userDropdown');
      if (ud) ud.hidden = true;
    });

    if (notifClear) {
      notifClear.addEventListener('click', () => {
        notifPanel.querySelectorAll('.notif-item--unread').forEach(el => el.classList.remove('notif-item--unread'));
        notifBtn.querySelector('.action-dot')?.remove();
        notifClear.textContent = 'Todo al día ✓';
        notifClear.disabled = true;
      });
    }
  }

  /* =============================================
     MENÚ DE USUARIO
     ============================================= */
  const userMenuBtn   = document.getElementById('userMenuBtn');
  const userDropdown  = document.getElementById('userDropdown');
  const logoutBtn     = document.getElementById('logoutBtn');
  const profileBtn    = document.getElementById('profileBtn');

  if (userMenuBtn && userDropdown) {
    userMenuBtn.addEventListener('click', e => {
      e.stopPropagation();
      userDropdown.hidden = !userDropdown.hidden;
      // Cerrar panel de notificaciones si está abierto
      if (notifPanel) notifPanel.hidden = true;
    });

    if (logoutBtn) {
      logoutBtn.addEventListener('click', e => {
        e.preventDefault();
        if (confirm('¿Cerrar sesión?')) {
          localStorage.removeItem('dashboard-theme');
          showDashboardToast('Sesión cerrada. ¡Hasta pronto!');
          setTimeout(() => { userDropdown.hidden = true; }, 1500);
        }
      });
    }

    if (profileBtn) {
      profileBtn.addEventListener('click', e => {
        e.preventDefault();
        showDashboardToast('Perfil de usuario — próximamente');
        userDropdown.hidden = true;
      });
    }
  }

  /* Cerrar paneles al hacer clic fuera */
  document.addEventListener('click', e => {
    if (notifPanel && !e.target.closest('#notifBtn') && !e.target.closest('#notifPanel')) {
      notifPanel.hidden = true;
    }
    if (userDropdown && !e.target.closest('#userMenuBtn') && !e.target.closest('#userDropdown')) {
      userDropdown.hidden = true;
    }
  });

  /* Toast reutilizable para index */
  function showDashboardToast(msg) {
    let toast = document.getElementById('dashToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'dashToast';
      toast.className = 'toast';
      toast.innerHTML = '<i class="fa-solid fa-circle-check"></i><span id="dashToastMsg"></span>';
      document.body.appendChild(toast);
    }
    document.getElementById('dashToastMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  /* =============================================
     FECHA EN TOPBAR
     ============================================= */
  const dateEl = document.getElementById('topbarDate');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('es-PE', {
      weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
    });
  }

  /* =============================================
     SIDEBAR TOGGLE
     ============================================= */
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        body.classList.toggle('sidebar-open');
      } else {
        body.classList.toggle('sidebar-collapsed');
      }
    });
  }

  // Cerrar sidebar en mobile al hacer clic fuera
  document.addEventListener('click', e => {
    if (
      window.innerWidth <= 1024 &&
      body.classList.contains('sidebar-open') &&
      !e.target.closest('.sidebar') &&
      !e.target.closest('#sidebarToggle')
    ) {
      body.classList.remove('sidebar-open');
    }
  });

  /* =============================================
     NAVEGACIÓN DEL SIDEBAR — con secciones reales
     ============================================= */
  const pageTitle = document.getElementById('pageTitle');
  const pageNames = {
    overview:  'Resumen',
    analytics: 'Analíticas',
    reports:   'Reportes',
    users:     'Usuarios',
    projects:  'Proyectos',
    tasks:     'Tareas',
    settings:  'Configuración',
    help:      'Ayuda',
  };

  function showPage(pageKey) {
    // Ocultar todas las secciones
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    // Mostrar la sección correspondiente
    const target = document.getElementById('page-' + pageKey);
    if (target) target.classList.add('active');
    // Actualizar título
    if (pageTitle) pageTitle.textContent = pageNames[pageKey] || 'Dashboard';
    // Actualizar nav activo
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-item[data-page="${pageKey}"]`);
    if (activeNav) activeNav.classList.add('active');
    // Inicializar sección si es necesario
    if (pageKey === 'users')    renderUsers();
    if (pageKey === 'projects') renderProjects();
    if (pageKey === 'tasks')    renderTasks();
  }

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      const href = item.getAttribute('href');
      // Si tiene href real (settings.html) dejar navegar
      if (href && href !== '#') return;
      e.preventDefault();
      showPage(item.dataset.page || 'overview');
      if (window.innerWidth <= 1024) body.classList.remove('sidebar-open');
    });
  });

  /* =============================================
     TEMA CLARO / OSCURO
     ============================================= */
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    const savedTheme = localStorage.getItem('dashboard-theme') || 'dark';
    if (savedTheme === 'light') {
      body.classList.add('light');
      themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeBtn.addEventListener('click', () => {
      body.classList.toggle('light');
      const isLight = body.classList.contains('light');
      themeBtn.innerHTML = isLight
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem('dashboard-theme', isLight ? 'light' : 'dark');
      if (typeof rebuildCharts === 'function') rebuildCharts();
    });
  }

  /* =============================================
     KPI COUNTERS ANIMADOS
     ============================================= */
  function animateCounter(el) {
    const target   = +el.dataset.target;
    const prefix   = el.dataset.prefix || '';
    const suffix   = el.dataset.suffix || '';
    const duration = 1400;
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      const value    = Math.floor(ease * target);
      el.textContent = prefix + value.toLocaleString('es-PE') + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const kpiObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.kpi-value').forEach(animateCounter);
        kpiObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.kpi-card').forEach(card => kpiObserver.observe(card));

  /* =============================================
     METAS DEL MES
     ============================================= */
  function renderGoals() {
    const list = document.getElementById('goalsList');
    if (!list) return;

    list.innerHTML = goals.map(g => {
      const pct = Math.round((g.current / g.target) * 100);
      return `
        <div class="goal-item">
          <div class="goal-header">
            <span class="goal-name">${g.name}</span>
            <span class="goal-pct">${pct}%</span>
          </div>
          <div class="goal-bar">
            <div class="goal-fill" data-width="${pct}" style="background:${g.color}"></div>
          </div>
        </div>`;
    }).join('');

    setTimeout(() => {
      document.querySelectorAll('.goal-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }, 150);
  }

  /* =============================================
     ACTIVIDAD RECIENTE
     ============================================= */
  function renderActivity() {
    const list = document.getElementById('activityList');
    if (!list) return;

    list.innerHTML = activities.map(a => `
      <li class="activity-item">
        <div class="activity-icon" style="background:${a.bg};color:${a.color}">
          <i class="fa-solid ${a.icon}"></i>
        </div>
        <div class="activity-body">
          <p class="activity-text">${a.text}</p>
          <span class="activity-time">${a.time}</span>
        </div>
      </li>`).join('');
  }

  /* =============================================
     BÚSQUEDA GLOBAL
     ============================================= */
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      if (typeof filterTable === 'function') filterTable(q);
    });
  }

  /* =============================================
     BOTÓN EXPORTAR TOPBAR
     ============================================= */
  const exportBtn = document.getElementById('exportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      if (typeof exportCSV === 'function') exportCSV();
    });
  }

  /* =============================================
     INICIALIZAR TODO
     ============================================= */
  if (typeof initCharts  === 'function') initCharts();
  if (typeof initTable   === 'function') initTable();
  renderGoals();
  renderActivity();

  /* =============================================
     DATOS — USUARIOS
     ============================================= */
  const usersData = [
    { name: 'Ana García',      email: 'ana@email.com',      role: 'Admin',    status: 'active',   date: '2024-01-15' },
    { name: 'Carlos López',    email: 'carlos@email.com',   role: 'Editor',   status: 'active',   date: '2024-02-20' },
    { name: 'María Torres',    email: 'maria@email.com',    role: 'Viewer',   status: 'inactive', date: '2024-03-10' },
    { name: 'Luis Ramírez',    email: 'luis@email.com',     role: 'Editor',   status: 'active',   date: '2024-04-05' },
    { name: 'Sofía Mendoza',   email: 'sofia@email.com',    role: 'Viewer',   status: 'active',   date: '2024-05-18' },
    { name: 'Diego Herrera',   email: 'diego@email.com',    role: 'Admin',    status: 'active',   date: '2024-06-22' },
    { name: 'Valeria Cruz',    email: 'valeria@email.com',  role: 'Editor',   status: 'inactive', date: '2024-07-30' },
    { name: 'Andrés Vega',     email: 'andres@email.com',   role: 'Viewer',   status: 'active',   date: '2024-08-14' },
    { name: 'Camila Ríos',     email: 'camila@email.com',   role: 'Editor',   status: 'active',   date: '2024-09-09' },
    { name: 'Javier Mora',     email: 'javier@email.com',   role: 'Viewer',   status: 'inactive', date: '2024-10-03' },
    { name: 'Isabella Ruiz',   email: 'isabella@email.com', role: 'Editor',   status: 'active',   date: '2024-11-17' },
    { name: 'Sebastián Díaz',  email: 'sebastian@email.com',role: 'Viewer',   status: 'active',   date: '2024-12-01' },
  ];

  let usersFiltered = [...usersData];

  function renderUsers() {
    const tbody = document.getElementById('usersBody');
    if (!tbody) return;
    tbody.innerHTML = usersFiltered.map(u => {
      const initials = u.name.split(' ').map(w => w[0]).join('').slice(0,2);
      const colors   = { Admin: '#6366f1', Editor: '#d946ef', Viewer: '#06b6d4' };
      const color    = colors[u.role] || '#6b6190';
      const statusBadge = u.status === 'active'
        ? '<span class="badge badge--success"><i class="fa-solid fa-circle-check"></i> Activo</span>'
        : '<span class="badge badge--failed"><i class="fa-solid fa-circle-xmark"></i> Inactivo</span>';
      return `<tr>
        <td><div class="td-user"><div class="td-avatar" style="background:${color}">${initials}</div><span class="td-name">${u.name}</span></div></td>
        <td style="color:var(--text-2);font-size:.82rem">${u.email}</td>
        <td><span class="type-badge" style="background:${color}20;color:${color}">${u.role}</span></td>
        <td>${statusBadge}</td>
        <td style="color:var(--text-3);font-size:.82rem">${new Date(u.date).toLocaleDateString('es-PE',{day:'2-digit',month:'short',year:'numeric'})}</td>
      </tr>`;
    }).join('');
  }

  window.filterUsers = function(q) {
    const query = q.toLowerCase();
    usersFiltered = usersData.filter(u =>
      u.name.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query) ||
      u.role.toLowerCase().includes(query)
    );
    renderUsers();
  };

  /* =============================================
     DATOS — PROYECTOS
     ============================================= */
  const projectsData = [
    { name: 'Analytics Dashboard', desc: 'Panel de métricas con KPIs, gráficas y tabla de transacciones.', progress: 100, status: 'done',     color: '#6366f1', icon: 'fa-chart-pie',      team: ['RG','AL','CM'] },
    { name: 'GMnorte Web',         desc: 'Sitio corporativo para empresa constructora con galería y mapa.', progress: 100, status: 'done',   color: '#06b6d4', icon: 'fa-building',       team: ['RG','DH'] },
    { name: 'IM.FILIO',            desc: 'Plataforma inmobiliaria con filtros dinámicos de propiedades.',   progress: 100, status: 'done',   color: '#d946ef', icon: 'fa-house',          team: ['RG','VC'] },
    { name: 'Sistema de Gestión',  desc: 'App full stack con Laravel, autenticación y CRUD completo.',      progress: 75,  status: 'progress', color: '#f59e0b', icon: 'fa-database',     team: ['RG','JM'] },
    { name: 'API REST Laravel',    desc: 'Backend con endpoints RESTful, autenticación JWT y Swagger.',     progress: 40,  status: 'progress', color: '#a78bfa', icon: 'fa-server',       team: ['RG'] },
    { name: 'Portafolio v2',       desc: 'Nueva versión del portafolio personal con animaciones avanzadas.',progress: 20,  status: 'pending',  color: '#f43f5e', icon: 'fa-user-tie',     team: ['RG'] },
  ];

  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const statusMap = { done: { label: 'Completado', cls: 'badge--success' }, progress: { label: 'En progreso', cls: 'badge--pending' }, pending: { label: 'Pendiente', cls: 'badge--failed' } };
    grid.innerHTML = projectsData.map(p => {
      const s = statusMap[p.status];
      const teamHtml = p.team.map(t => `<div class="proj-avatar" style="background:${p.color}">${t}</div>`).join('');
      return `
        <div class="proj-card">
          <div class="proj-card-top">
            <div class="proj-icon" style="background:${p.color}20;color:${p.color}"><i class="fa-solid ${p.icon}"></i></div>
            <span class="badge ${s.cls}">${s.label}</span>
          </div>
          <h4 class="proj-name">${p.name}</h4>
          <p class="proj-desc">${p.desc}</p>
          <div class="proj-progress-wrap">
            <div class="proj-progress-bar"><div class="proj-progress-fill" style="width:${p.progress}%;background:${p.color}"></div></div>
            <span class="proj-pct">${p.progress}%</span>
          </div>
          <div class="proj-footer">
            <div class="proj-team">${teamHtml}</div>
          </div>
        </div>`;
    }).join('');
  }

  /* =============================================
     DATOS — TAREAS
     ============================================= */
  let tasksData = [
    { id: 1, title: 'Revisar métricas de diciembre',    priority: 'high',   status: 'pending',  assignee: 'Ana García',    due: '2024-12-30' },
    { id: 2, title: 'Actualizar colores de gráficas',   priority: 'medium', status: 'progress', assignee: 'Carlos López',  due: '2024-12-28' },
    { id: 3, title: 'Exportar reporte mensual',         priority: 'high',   status: 'done',     assignee: 'Ronald Gallo',  due: '2024-12-27' },
    { id: 4, title: 'Revisar transacciones fallidas',   priority: 'high',   status: 'pending',  assignee: 'Sofía Mendoza', due: '2024-12-29' },
    { id: 5, title: 'Optimizar carga de gráficas',      priority: 'low',    status: 'progress', assignee: 'Diego Herrera', due: '2025-01-05' },
    { id: 6, title: 'Documentar API de reportes',       priority: 'medium', status: 'pending',  assignee: 'Ronald Gallo',  due: '2025-01-10' },
    { id: 7, title: 'Configurar notificaciones email',  priority: 'low',    status: 'done',     assignee: 'Valeria Cruz',  due: '2024-12-20' },
  ];
  let taskFilter = 'all';
  let nextTaskId = 8;

  function renderTasks() {
    const list = document.getElementById('tasksList');
    if (!list) return;
    const filtered = taskFilter === 'all' ? tasksData : tasksData.filter(t => t.status === taskFilter);
    const priorityMap = { high: { label: 'Alta', color: '#f43f5e' }, medium: { label: 'Media', color: '#f59e0b' }, low: { label: 'Baja', color: '#06b6d4' } };
    const statusMap   = { pending: 'fa-circle', progress: 'fa-circle-half-stroke', done: 'fa-circle-check' };
    const statusColor = { pending: 'var(--text-3)', progress: '#f59e0b', done: '#22c55e' };

    list.innerHTML = filtered.length === 0
      ? '<div class="tasks-empty"><i class="fa-solid fa-check-double"></i><p>No hay tareas en esta categoría</p></div>'
      : filtered.map(t => {
          const p = priorityMap[t.priority];
          return `
            <div class="task-item ${t.status === 'done' ? 'task-item--done' : ''}">
              <button class="task-check" onclick="toggleTask(${t.id})" title="Cambiar estado">
                <i class="fa-solid ${statusMap[t.status]}" style="color:${statusColor[t.status]}"></i>
              </button>
              <div class="task-body">
                <span class="task-title">${t.title}</span>
                <div class="task-meta">
                  <span class="task-assignee"><i class="fa-solid fa-user"></i> ${t.assignee}</span>
                  <span class="task-due"><i class="fa-solid fa-calendar"></i> ${new Date(t.due).toLocaleDateString('es-PE',{day:'2-digit',month:'short'})}</span>
                </div>
              </div>
              <span class="task-priority" style="color:${p.color};background:${p.color}20">${p.label}</span>
              <button class="task-delete" onclick="deleteTask(${t.id})" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
            </div>`;
        }).join('');

    // Filtros activos
    document.querySelectorAll('.task-filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === taskFilter);
    });
  }

  window.toggleTask = function(id) {
    const t = tasksData.find(t => t.id === id);
    if (!t) return;
    const cycle = { pending: 'progress', progress: 'done', done: 'pending' };
    t.status = cycle[t.status];
    renderTasks();
  };

  window.deleteTask = function(id) {
    tasksData = tasksData.filter(t => t.id !== id);
    renderTasks();
  };

  // Filtros de tareas
  document.querySelectorAll('.task-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      taskFilter = btn.dataset.filter;
      renderTasks();
    });
  });

  // Modal nueva tarea
  const addTaskBtn      = document.getElementById('addTaskBtn');
  const taskModalOverlay = document.getElementById('taskModalOverlay');
  const taskModalClose  = document.getElementById('taskModalClose');
  const taskModalCancel = document.getElementById('taskModalCancel');
  const taskModalSave   = document.getElementById('taskModalSave');

  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => { taskModalOverlay.hidden = false; });
  }
  [taskModalClose, taskModalCancel].forEach(btn => {
    if (btn) btn.addEventListener('click', () => { taskModalOverlay.hidden = true; });
  });
  if (taskModalOverlay) {
    taskModalOverlay.addEventListener('click', e => {
      if (e.target === taskModalOverlay) taskModalOverlay.hidden = true;
    });
  }
  if (taskModalSave) {
    taskModalSave.addEventListener('click', () => {
      const title    = document.getElementById('newTaskTitle').value.trim();
      const priority = document.getElementById('newTaskPriority').value;
      const assignee = document.getElementById('newTaskAssignee').value.trim() || 'Sin asignar';
      if (!title) { document.getElementById('newTaskTitle').focus(); return; }
      tasksData.unshift({ id: nextTaskId++, title, priority, status: 'pending', assignee, due: new Date(Date.now() + 7*86400000).toISOString().slice(0,10) });
      taskModalOverlay.hidden = true;
      document.getElementById('newTaskTitle').value = '';
      document.getElementById('newTaskAssignee').value = '';
      renderTasks();
    });
  }

  /* =============================================
     REPORTES — toast
     ============================================= */
  window.showReportToast = function(msg) {
    showDashboardToast(msg);
  };

  /* =============================================
     AYUDA — FAQ accordion
     ============================================= */
  window.toggleFaq = function(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  };

});
