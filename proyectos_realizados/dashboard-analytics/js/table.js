/* =============================================
   TABLE.JS — Tabla con filtro, orden y paginación
   Dashboard Analytics — R.Y.G.O
   ============================================= */

let currentPage  = 1;
let rowsPerPage  = 5;
let filteredData  = [...transactions];
let sortCol       = 'date';
let sortDir       = 'desc';

/* ---- Renderizar tabla ---- */
function renderTable() {
  const tbody = document.getElementById('tableBody');
  const start = (currentPage - 1) * rowsPerPage;
  const slice = filteredData.slice(start, start + rowsPerPage);

  tbody.innerHTML = slice.map(tx => {
    const statusMap = {
      success: { label: 'Completado', cls: 'badge--success', icon: 'fa-circle-check' },
      pending: { label: 'Pendiente',  cls: 'badge--pending', icon: 'fa-clock' },
      failed:  { label: 'Fallido',    cls: 'badge--failed',  icon: 'fa-circle-xmark' },
    };
    const s = statusMap[tx.status];
    const amountStr = tx.amount < 0
      ? `-$${Math.abs(tx.amount).toFixed(2)}`
      : `$${tx.amount.toFixed(2)}`;
    const amountColor = tx.amount < 0 ? 'color:var(--red)' : '';

    return `
      <tr>
        <td class="td-id">${tx.id}</td>
        <td>
          <div class="td-user">
            <div class="td-avatar" style="background:${tx.color}">${tx.avatar}</div>
            <span class="td-name">${tx.user}</span>
          </div>
        </td>
        <td><span class="type-badge">${tx.type}</span></td>
        <td class="td-amount" style="${amountColor}">${amountStr}</td>
        <td><span class="badge ${s.cls}"><i class="fa-solid ${s.icon}"></i>${s.label}</span></td>
        <td>${formatDate(tx.date)}</td>
      </tr>`;
  }).join('');

  renderPagination();
  document.getElementById('tableInfo').textContent =
    `Mostrando ${Math.min(start + 1, filteredData.length)}–${Math.min(start + rowsPerPage, filteredData.length)} de ${filteredData.length} registros`;
}

/* ---- Paginación ---- */
function renderPagination() {
  const total = Math.ceil(filteredData.length / rowsPerPage);
  const pg    = document.getElementById('pagination');

  let html = `<button class="page-btn" onclick="goPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
    <i class="fa-solid fa-chevron-left"></i></button>`;

  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  }

  html += `<button class="page-btn" onclick="goPage(${currentPage + 1})" ${currentPage === total ? 'disabled' : ''}>
    <i class="fa-solid fa-chevron-right"></i></button>`;

  pg.innerHTML = html;
}

function goPage(n) {
  const total = Math.ceil(filteredData.length / rowsPerPage);
  if (n < 1 || n > total) return;
  currentPage = n;
  renderTable();
}

/* ---- Filtro ---- */
function filterTable(query) {
  const q = query.toLowerCase();
  filteredData = transactions.filter(tx =>
    tx.id.toLowerCase().includes(q)     ||
    tx.user.toLowerCase().includes(q)   ||
    tx.type.toLowerCase().includes(q)   ||
    tx.status.toLowerCase().includes(q) ||
    String(tx.amount).includes(q)
  );
  currentPage = 1;
  renderTable();
}

/* ---- Ordenar ---- */
function sortTable(col) {
  if (sortCol === col) {
    sortDir = sortDir === 'asc' ? 'desc' : 'asc';
  } else {
    sortCol = col;
    sortDir = 'asc';
  }

  filteredData.sort((a, b) => {
    let va = a[col], vb = b[col];
    if (col === 'amount') { va = +va; vb = +vb; }
    if (va < vb) return sortDir === 'asc' ? -1 : 1;
    if (va > vb) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  renderTable();
}

/* ---- Exportar CSV ---- */
function exportCSV() {
  const headers = ['ID', 'Usuario', 'Tipo', 'Monto', 'Estado', 'Fecha'];
  const rows = filteredData.map(tx =>
    [tx.id, tx.user, tx.type, tx.amount, tx.status, tx.date].join(',')
  );
  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `transacciones_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ---- Helpers ---- */
function formatDate(str) {
  return new Date(str).toLocaleDateString('es-PE', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
}

/* ---- Inicializar tabla ---- */
function initTable() {
  // Leer filas por página desde config guardada
  try {
    const saved = localStorage.getItem('dashboard-config');
    if (saved) {
      const cfg = JSON.parse(saved);
      if (cfg.rowsPerPage) rowsPerPage = +cfg.rowsPerPage;
    }
  } catch(e) {}

  renderTable();

  document.getElementById('tableFilter').addEventListener('input', e => {
    filterTable(e.target.value);
  });

  document.querySelectorAll('.data-table th').forEach(th => {
    th.addEventListener('click', () => sortTable(th.dataset.col));
  });

  document.getElementById('csvBtn').addEventListener('click', exportCSV);
}
