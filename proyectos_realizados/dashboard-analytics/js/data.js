/* =============================================
   DATA.JS — Datos simulados del dashboard
   Dashboard Analytics — R.Y.G.O
   ============================================= */

/* ---- Tráfico mensual ---- */
const trafficData = {
  '6m': {
    labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    visitors: [4200, 5800, 5100, 7300, 6800, 8472],
    sessions: [3100, 4200, 3900, 5600, 5100, 6300],
  },
  '3m': {
    labels: ['Oct', 'Nov', 'Dic'],
    visitors: [7300, 6800, 8472],
    sessions: [5600, 5100, 6300],
  },
  '1m': {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
    visitors: [1900, 2100, 2300, 2172],
    sessions: [1400, 1600, 1750, 1550],
  },
};

/* ---- Fuentes de tráfico ---- */
const trafficSources = [
  { label: 'Búsqueda orgánica', value: 42, color: '#6366f1' },
  { label: 'Redes sociales',    value: 28, color: '#d946ef' },
  { label: 'Directo',           value: 18, color: '#f59e0b' },
  { label: 'Email',             value: 8,  color: '#06b6d4' },
  { label: 'Referidos',         value: 4,  color: '#6b6190' },
];

/* ---- Transacciones ---- */
const transactions = [
  { id: '#TXN-001', user: 'Ana García',     avatar: 'AG', color: '#6366f1', type: 'Compra',    amount: 1250.00, status: 'success', date: '2024-12-28' },
  { id: '#TXN-002', user: 'Carlos López',   avatar: 'CL', color: '#d946ef', type: 'Suscripción', amount: 49.99,  status: 'success', date: '2024-12-27' },
  { id: '#TXN-003', user: 'María Torres',   avatar: 'MT', color: '#f59e0b', type: 'Compra',    amount: 320.50, status: 'pending', date: '2024-12-27' },
  { id: '#TXN-004', user: 'Luis Ramírez',   avatar: 'LR', color: '#f43f5e', type: 'Reembolso', amount: -89.00, status: 'failed',  date: '2024-12-26' },
  { id: '#TXN-005', user: 'Sofía Mendoza',  avatar: 'SM', color: '#06b6d4', type: 'Compra',    amount: 780.00, status: 'success', date: '2024-12-26' },
  { id: '#TXN-006', user: 'Diego Herrera',  avatar: 'DH', color: '#fbbf24', type: 'Suscripción', amount: 99.99, status: 'success', date: '2024-12-25' },
  { id: '#TXN-007', user: 'Valeria Cruz',   avatar: 'VC', color: '#818cf8', type: 'Compra',    amount: 450.00, status: 'pending', date: '2024-12-25' },
  { id: '#TXN-008', user: 'Andrés Vega',    avatar: 'AV', color: '#a78bfa', type: 'Compra',    amount: 1100.00, status: 'success', date: '2024-12-24' },
  { id: '#TXN-009', user: 'Camila Ríos',    avatar: 'CR', color: '#e879f9', type: 'Reembolso', amount: -150.00, status: 'success', date: '2024-12-24' },
  { id: '#TXN-010', user: 'Javier Mora',    avatar: 'JM', color: '#f43f5e', type: 'Suscripción', amount: 29.99, status: 'failed',  date: '2024-12-23' },
  { id: '#TXN-011', user: 'Isabella Ruiz',  avatar: 'IR', color: '#06b6d4', type: 'Compra',    amount: 560.00, status: 'success', date: '2024-12-23' },
  { id: '#TXN-012', user: 'Sebastián Díaz', avatar: 'SD', color: '#d946ef', type: 'Compra',    amount: 890.00, status: 'pending', date: '2024-12-22' },
];

/* ---- Metas del mes ---- */
const goals = [
  { name: 'Ingresos mensuales',  current: 94320, target: 100000, color: '#6366f1' },
  { name: 'Nuevos usuarios',     current: 842,   target: 1000,   color: '#d946ef' },
  { name: 'Pedidos completados', current: 1284,  target: 1500,   color: '#f59e0b' },
  { name: 'Tasa de retención',   current: 78,    target: 85,     color: '#06b6d4' },
];

/* ---- Actividad reciente ---- */
const activities = [
  { icon: 'fa-user-plus',        bg: '#6366f120', color: '#6366f1', text: '<strong>Ana García</strong> se registró como nuevo usuario',       time: 'Hace 5 min' },
  { icon: 'fa-cart-shopping',    bg: '#d946ef20', color: '#d946ef', text: '<strong>Carlos López</strong> completó una compra de $1,250',        time: 'Hace 18 min' },
  { icon: 'fa-triangle-exclamation', bg: '#f43f5e20', color: '#f43f5e', text: 'Transacción <strong>#TXN-004</strong> marcada como fallida',    time: 'Hace 32 min' },
  { icon: 'fa-file-export',      bg: '#f59e0b20', color: '#f59e0b', text: '<strong>Reporte mensual</strong> generado y enviado por email',      time: 'Hace 1h' },
  { icon: 'fa-gear',             bg: '#06b6d420', color: '#06b6d4', text: 'Configuración del sistema <strong>actualizada</strong>',             time: 'Hace 2h' },
];

/* ---- Sparklines (mini datos para KPI) ---- */
const sparklines = {
  spark1: [3200, 4100, 3800, 5200, 4900, 6100, 5800, 7200, 6900, 8472],
  spark2: [62000, 71000, 68000, 79000, 75000, 83000, 80000, 88000, 91000, 94320],
  spark3: [980, 1120, 1050, 1380, 1290, 1450, 1320, 1410, 1350, 1284],
  spark4: [88, 91, 89, 93, 92, 94, 93, 95, 94, 96],
};
