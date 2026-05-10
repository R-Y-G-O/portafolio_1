/* =============================================
   CHARTS.JS — Gráficas con Chart.js
   Dashboard Analytics — R.Y.G.O
   ============================================= */

/* ---- Helpers de color ---- */
function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/* ---- Gráfica de líneas ---- */
let lineChart = null;

function buildLineChart(range = '6m') {
  const ctx = document.getElementById('lineChart').getContext('2d');
  const d   = trafficData[range];

  const isDark = !document.body.classList.contains('light');
  const gridColor  = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const labelColor = isDark ? '#6b6190' : '#94a3b8';

  if (lineChart) lineChart.destroy();

  lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: d.labels,
      datasets: [
        {
          label: 'Visitantes',
          data: d.visitors,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.1)',
          borderWidth: 2.5,
          pointRadius: 4,
          pointBackgroundColor: '#6366f1',
          pointBorderColor: isDark ? '#1a1730' : '#fff',
          pointBorderWidth: 2,
          tension: 0.4,
          fill: true,
        },
        {
          label: 'Sesiones',
          data: d.sessions,
          borderColor: '#d946ef',
          backgroundColor: 'rgba(217,70,239,0.05)',
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: '#d946ef',
          pointBorderColor: isDark ? '#1a1730' : '#fff',
          pointBorderWidth: 2,
          tension: 0.4,
          fill: false,
          borderDash: [5, 3],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            color: labelColor,
            font: { size: 11, weight: '600' },
            boxWidth: 12,
            boxHeight: 12,
            borderRadius: 3,
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },
        tooltip: {
          backgroundColor: isDark ? '#1a1730' : '#fff',
          borderColor: isDark ? '#2d2850' : '#e2e8f0',
          borderWidth: 1,
          titleColor: isDark ? '#f1f5f9' : '#1e1b4b',
          bodyColor: isDark ? '#94a3b8' : '#475569',
          padding: 10,
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()}`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: gridColor, drawBorder: false },
          ticks: { color: labelColor, font: { size: 11 } },
        },
        y: {
          grid: { color: gridColor, drawBorder: false },
          ticks: {
            color: labelColor,
            font: { size: 11 },
            callback: v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v,
          },
          beginAtZero: false,
        },
      },
    },
  });
}

/* ---- Gráfica de dona ---- */
let donutChart = null;

function buildDonutChart() {
  const ctx = document.getElementById('donutChart').getContext('2d');
  const isDark = !document.body.classList.contains('light');

  if (donutChart) donutChart.destroy();

  donutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: trafficSources.map(s => s.label),
      datasets: [{
        data: trafficSources.map(s => s.value),
        backgroundColor: trafficSources.map(s => s.color),
        borderColor: isDark ? '#1a1730' : '#fff',
        borderWidth: 3,
        hoverOffset: 6,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isDark ? '#1a1730' : '#fff',
          borderColor: isDark ? '#2d2850' : '#e2e8f0',
          borderWidth: 1,
          titleColor: isDark ? '#f1f5f9' : '#1e1b4b',
          bodyColor: isDark ? '#94a3b8' : '#475569',
          padding: 10,
          callbacks: {
            label: ctx => ` ${ctx.label}: ${ctx.parsed}%`,
          },
        },
      },
    },
  });

  // Leyenda personalizada
  const legend = document.getElementById('donutLegend');
  legend.innerHTML = trafficSources.map(s => `
    <div class="legend-item">
      <div class="legend-dot-label">
        <span class="legend-dot" style="background:${s.color}"></span>
        <span>${s.label}</span>
      </div>
      <span class="legend-pct">${s.value}%</span>
    </div>
  `).join('');
}

/* ---- Sparklines SVG ---- */
function buildSparkline(containerId, data, color) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const w = 80, h = 40;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    return `${x},${y}`;
  }).join(' ');

  container.innerHTML = `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <polyline
        points="${points}"
        fill="none"
        stroke="${color}"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`;
}

/* ---- Inicializar gráficas ---- */
function initCharts() {
  buildLineChart('6m');
  buildDonutChart();

  // Sparklines
  const sparkColors = ['#6366f1', '#d946ef', '#f59e0b', '#06b6d4'];
  Object.keys(sparklines).forEach((key, i) => {
    buildSparkline(key, sparklines[key], sparkColors[i]);
  });

  // Botones de rango
  document.querySelectorAll('.chart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.chart-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildLineChart(btn.dataset.range);
    });
  });
}

/* Reconstruir al cambiar tema */
function rebuildCharts() {
  buildLineChart(
    document.querySelector('.chart-btn.active')?.dataset.range || '6m'
  );
  buildDonutChart();
}
