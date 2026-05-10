/* =============================================
   SETTINGS.JS — Lógica de configuración
   Dashboard Analytics — R.Y.G.O
   ============================================= */

/* ---- Configuración por defecto ---- */
const DEFAULT_CONFIG = {
  theme:           'dark',
  density:         'normal',
  accentColor:     '#6366f1',
  enableAnimations: true,
  sidebarCollapsed: false,

  // KPI cards
  kpiVisible: {
    users:        true,
    revenue:      true,
    orders:       true,
    satisfaction: true,
  },

  // Gráfica de líneas
  lineType:       'line',
  colorVisitors:  '#6366f1',
  colorSessions:  '#d946ef',
  showPoints:     true,
  showSessions:   true,

  // Gráfica de dona
  donutColors: ['#6366f1','#d946ef','#f59e0b','#06b6d4','#6b6190'],
  donutCutout: 72,

  // Tabla
  rowsPerPage: 5,
  columns: {
    id:     true,
    user:   true,
    type:   true,
    amount: true,
    status: true,
    date:   true,
  },
};

/* ---- Cargar / guardar config ---- */
function loadConfig() {
  try {
    const saved = localStorage.getItem('dashboard-config');
    return saved ? { ...DEFAULT_CONFIG, ...JSON.parse(saved) } : { ...DEFAULT_CONFIG };
  } catch { return { ...DEFAULT_CONFIG }; }
}

function saveConfig(cfg) {
  localStorage.setItem('dashboard-config', JSON.stringify(cfg));
}

/* ---- Estado actual ---- */
let cfg = loadConfig();

/* =============================================
   RENDERIZADO DE CONTROLES
   ============================================= */

/* ---- KPI toggles ---- */
const kpiMeta = [
  { key: 'users',        label: 'Usuarios activos', sub: '8,472 usuarios',    icon: 'fa-users',        bg: '#6366f120', color: '#6366f1' },
  { key: 'revenue',      label: 'Ingresos',          sub: '$94,320',           icon: 'fa-dollar-sign',  bg: '#d946ef20', color: '#d946ef' },
  { key: 'orders',       label: 'Pedidos',            sub: '1,284 pedidos',    icon: 'fa-cart-shopping', bg: '#f59e0b20', color: '#f59e0b' },
  { key: 'satisfaction', label: 'Satisfacción',       sub: '96% positivo',     icon: 'fa-star',         bg: '#06b6d420', color: '#06b6d4' },
];

function renderKpiToggles() {
  const container = document.getElementById('kpiToggles');
  container.innerHTML = kpiMeta.map(k => `
    <div class="kpi-toggle-item">
      <div class="kpi-toggle-left">
        <div class="kpi-toggle-icon" style="background:${k.bg};color:${k.color}">
          <i class="fa-solid ${k.icon}"></i>
        </div>
        <div class="kpi-toggle-info">
          <strong>${k.label}</strong>
          <span>${k.sub}</span>
        </div>
      </div>
      <label class="toggle-switch">
        <input type="checkbox" data-kpi="${k.key}" ${cfg.kpiVisible[k.key] ? 'checked' : ''} />
        <span class="toggle-track"><span class="toggle-thumb"></span></span>
      </label>
    </div>`).join('');

  container.querySelectorAll('input[data-kpi]').forEach(inp => {
    inp.addEventListener('change', () => {
      cfg.kpiVisible[inp.dataset.kpi] = inp.checked;
      updatePreview();
    });
  });
}

/* ---- Colores de dona ---- */
const donutLabels = ['Búsqueda orgánica','Redes sociales','Directo','Email','Referidos'];

function renderDonutColors() {
  const container = document.getElementById('donutColorsList');
  container.innerHTML = donutLabels.map((label, i) => `
    <div class="donut-color-item">
      <div class="donut-color-label">
        <span class="donut-dot" id="donutDot${i}" style="background:${cfg.donutColors[i]}"></span>
        <span>${label}</span>
      </div>
      <div class="color-row">
        <input type="color" class="color-input donut-color-input" data-index="${i}" value="${cfg.donutColors[i]}" />
      </div>
    </div>`).join('');

  container.querySelectorAll('.donut-color-input').forEach(inp => {
    inp.addEventListener('input', () => {
      const idx = +inp.dataset.index;
      cfg.donutColors[idx] = inp.value;
      document.getElementById(`donutDot${idx}`).style.background = inp.value;
    });
  });
}

/* ---- Columnas de tabla ---- */
const colMeta = [
  { key: 'id',     label: 'ID' },
  { key: 'user',   label: 'Usuario' },
  { key: 'type',   label: 'Tipo' },
  { key: 'amount', label: 'Monto' },
  { key: 'status', label: 'Estado' },
  { key: 'date',   label: 'Fecha' },
];

function renderColumnsList() {
  const container = document.getElementById('columnsList');
  container.innerHTML = colMeta.map(c => `
    <div class="col-toggle-item">
      <span>${c.label}</span>
      <label class="toggle-switch">
        <input type="checkbox" data-col="${c.key}" ${cfg.columns[c.key] ? 'checked' : ''} />
        <span class="toggle-track"><span class="toggle-thumb"></span></span>
      </label>
    </div>`).join('');

  container.querySelectorAll('input[data-col]').forEach(inp => {
    inp.addEventListener('change', () => {
      cfg.columns[inp.dataset.col] = inp.checked;
    });
  });
}

/* =============================================
   CONTROLES INDIVIDUALES
   ============================================= */

/* ---- Tipo de gráfica de líneas ---- */
function initLineTypePicker() {
  const picker = document.getElementById('lineTypePicker');
  picker.querySelectorAll('.type-opt').forEach(btn => {
    if (btn.dataset.type === cfg.lineType) btn.classList.add('active');
    else btn.classList.remove('active');

    btn.addEventListener('click', () => {
      picker.querySelectorAll('.type-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cfg.lineType = btn.dataset.type;
    });
  });
}

/* ---- Colores de líneas ---- */
function initLineColors() {
  const visitorsInput  = document.getElementById('colorVisitors');
  const sessionsInput  = document.getElementById('colorSessions');

  visitorsInput.value = cfg.colorVisitors;
  sessionsInput.value = cfg.colorSessions;

  visitorsInput.addEventListener('input', () => { cfg.colorVisitors = visitorsInput.value; updatePreview(); });
  sessionsInput.addEventListener('input', () => { cfg.colorSessions = sessionsInput.value; });
}

/* ---- Presets de color ---- */
function initColorPresets() {
  document.querySelectorAll('.color-presets').forEach(group => {
    const targetId = group.dataset.target;
    const input    = document.getElementById(targetId);

    group.querySelectorAll('.color-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.color-preset').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        input.value = btn.dataset.color;
        input.dispatchEvent(new Event('input'));
      });
    });

    // Marcar el preset activo al cargar
    group.querySelectorAll('.color-preset').forEach(btn => {
      if (btn.dataset.color === input.value) btn.classList.add('selected');
    });
  });
}

/* ---- Toggles simples ---- */
function initSimpleToggles() {
  const showPoints   = document.getElementById('showPoints');
  const showSessions = document.getElementById('showSessions');
  const animations   = document.getElementById('enableAnimations');
  const collapsed    = document.getElementById('sidebarCollapsed');

  showPoints.checked   = cfg.showPoints;
  showSessions.checked = cfg.showSessions;
  animations.checked   = cfg.enableAnimations;
  collapsed.checked    = cfg.sidebarCollapsed;

  showPoints.addEventListener('change',   () => { cfg.showPoints   = showPoints.checked; });
  showSessions.addEventListener('change', () => { cfg.showSessions = showSessions.checked; });
  animations.addEventListener('change',   () => { cfg.enableAnimations = animations.checked; });
  collapsed.addEventListener('change',    () => { cfg.sidebarCollapsed = collapsed.checked; });
}

/* ---- Filas por página ---- */
function initRowsPerPage() {
  const sel = document.getElementById('rowsPerPage');
  sel.value = cfg.rowsPerPage;
  sel.addEventListener('change', () => { cfg.rowsPerPage = +sel.value; });
}

/* ---- Slider cutout dona ---- */
function initDonutCutout() {
  const slider = document.getElementById('donutCutout');
  const valEl  = document.getElementById('donutCutoutVal');
  slider.value = cfg.donutCutout;
  valEl.textContent = cfg.donutCutout + '%';

  slider.addEventListener('input', () => {
    cfg.donutCutout = +slider.value;
    valEl.textContent = slider.value + '%';
  });
}

/* ---- Tema ---- */
function initThemePicker() {
  const picker = document.getElementById('themePicker');
  const body   = document.body;
  const topBtn = document.getElementById('themeToggle');

  // Aplicar tema guardado
  if (cfg.theme === 'light') {
    body.classList.add('light');
    topBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  picker.querySelectorAll('.theme-opt').forEach(btn => {
    if (btn.dataset.theme === cfg.theme) btn.classList.add('active');
    else btn.classList.remove('active');

    btn.addEventListener('click', () => {
      picker.querySelectorAll('.theme-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cfg.theme = btn.dataset.theme;

      if (cfg.theme === 'light') {
        body.classList.add('light');
        topBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      } else {
        body.classList.remove('light');
        topBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    });
  });

  // Botón topbar también sincroniza
  topBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    const isLight = body.classList.contains('light');
    cfg.theme = isLight ? 'light' : 'dark';
    topBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    picker.querySelectorAll('.theme-opt').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === cfg.theme);
    });
    updatePreview();
  });
}

/* ---- Densidad ---- */
function initDensityPicker() {
  const picker = document.getElementById('densityPicker');
  const body   = document.body;

  // Aplicar densidad guardada
  body.dataset.density = cfg.density;

  picker.querySelectorAll('.density-opt').forEach(btn => {
    if (btn.dataset.density === cfg.density) btn.classList.add('active');
    else btn.classList.remove('active');

    btn.addEventListener('click', () => {
      picker.querySelectorAll('.density-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cfg.density = btn.dataset.density;
      body.dataset.density = cfg.density;
    });
  });
}

/* ---- Color de acento ---- */
function initAccentColor() {
  const input = document.getElementById('accentColor');
  input.value = cfg.accentColor;
  applyAccent(cfg.accentColor);

  input.addEventListener('input', () => {
    cfg.accentColor = input.value;
    applyAccent(input.value);
    updatePreview();
  });
}

function applyAccent(color) {
  document.documentElement.style.setProperty('--blue', color);
  // Generar versión glow
  const r = parseInt(color.slice(1,3),16);
  const g = parseInt(color.slice(3,5),16);
  const b = parseInt(color.slice(5,7),16);
  document.documentElement.style.setProperty('--blue-glow', `rgba(${r},${g},${b},0.2)`);
  document.documentElement.style.setProperty('--blue-light', color);
  updatePreview();
}

/* ---- Vista previa ---- */
function updatePreview() {
  const color = cfg.accentColor;
  const r = parseInt(color.slice(1,3),16);
  const g = parseInt(color.slice(3,5),16);
  const b = parseInt(color.slice(5,7),16);

  document.getElementById('previewIcon').style.background = color;
  document.getElementById('previewBar').style.background  = color;
  document.getElementById('previewBtnPrimary').style.background = color;
  document.getElementById('previewBtnOutline').style.border = `1.5px solid ${color}`;
  document.getElementById('previewBtnOutline').style.color  = color;
  document.getElementById('previewValue').style.color = color;
}

/* =============================================
   GUARDAR / RESTABLECER
   ============================================= */
function showToast(msg = 'Configuración guardada') {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* =============================================
   INICIALIZAR
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderKpiToggles();
  renderDonutColors();
  renderColumnsList();
  initLineTypePicker();
  initLineColors();
  initColorPresets();
  initSimpleToggles();
  initRowsPerPage();
  initDonutCutout();
  initThemePicker();
  initDensityPicker();
  initAccentColor();
  updatePreview();

  /* ---- Guardar ---- */
  document.getElementById('saveAll').addEventListener('click', () => {
    saveConfig(cfg);
    showToast('✓ Configuración guardada correctamente');
  });

  /* ---- Restablecer ---- */
  document.getElementById('resetAll').addEventListener('click', () => {
    if (!confirm('¿Restablecer toda la configuración a los valores por defecto?')) return;
    cfg = { ...DEFAULT_CONFIG };
    saveConfig(cfg);
    location.reload();
  });

  /* ---- Sidebar toggle ---- */
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        document.body.classList.toggle('sidebar-open');
      } else {
        document.body.classList.toggle('sidebar-collapsed');
      }
    });
  }

  /* ---- Cerrar sidebar en mobile al hacer clic fuera ---- */
  document.addEventListener('click', e => {
    if (
      window.innerWidth <= 1024 &&
      document.body.classList.contains('sidebar-open') &&
      !e.target.closest('.sidebar') &&
      !e.target.closest('#sidebarToggle')
    ) {
      document.body.classList.remove('sidebar-open');
    }
  });
});
