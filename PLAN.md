# Alke Wallet - Plan de Desarrollo

## 📋 Descripción del Proyecto

**Alke Wallet** es una aplicación de billetera digital que permite a los usuarios gestionar sus activos financieros de manera segura y conveniente.

---

## 🗂️ Estructura del Proyecto

```
code/
├── index.html          → Entrada principal (redirige a login)
├── login.html          → Pantalla de inicio de sesión
├── menu.html           → Menú principal / Dashboard
├── deposit.html        → Pantalla de depósito
├── sendmoney.html      → Enviar dinero + contactos
├── transactions.html   → Historial de transacciones
├── css/
│   └── styles.css      → Estilos personalizados (~1160 líneas)
├── js/
│   └── main.js         → Scripts JavaScript
└── assets/
    └── images/         → Recursos gráficos
```

---

## 🚀 Flujo de Navegación

```
┌─────────────┐
│  index.html │ ──→ Redirige automáticamente
└─────────────┘
       │
       ▼
┌─────────────┐
│  login.html │ ──→ Usuario ingresa credenciales
└─────────────┘
       │
       ▼ (autenticación exitosa)
┌─────────────┐
│  menu.html  │ ──→ Dashboard principal
└─────────────┘
       │
       ├──→ deposit.html      (Depositar fondos)
       ├──→ sendmoney.html    (Enviar dinero)
       └──→ transactions.html (Ver movimientos)
```

---

## 📅 Progreso por Lecciones

### ✅ Lección 1 - Aspectos principales del desarrollo web
- [x] Definir estructura de archivos y carpetas
- [x] Crear documento base `index.html`
- [x] Plantear flujo de navegación
- [x] Crear `login.html` (estructura base)
- [x] Crear `menu.html` (estructura base)

### ✅ Lección 2 - El lenguaje HTML
- [x] Estructura HTML semántica completa
- [x] Formularios con validaciones básicas
- [x] Crear `deposit.html`
- [x] Crear `sendmoney.html`
- [x] Crear `transactions.html`
- [x] Etiquetas semánticas: `<main>`, `<section>`, `<article>`, `<aside>`, `<nav>`
- [x] Atributos ARIA para accesibilidad
- [x] Breadcrumbs y skip links

### ⬜ Lección 3 - Estilos CSS y responsividad
- [ ] Diseño responsive mejorado
- [ ] Paleta de colores fintech refinada
- [ ] Tipografía profesional (Google Fonts)
- [ ] Mejoras UI/UX visuales
- [ ] Animaciones y transiciones

### ⬜ Lección 4 - Framework Bootstrap
- [ ] Integrar Bootstrap 5
- [ ] Componentes responsivos
- [ ] Navbar con collapse móvil
- [ ] Modales funcionales
- [ ] Cards y alertas

### ⬜ Lección 5 - JavaScript
- [ ] Validación de login
- [ ] Gestión de saldo (localStorage)
- [ ] Eventos de depósito
- [ ] Simulación de transferencias
- [ ] Registro de transacciones

### ⬜ Lección 6 - jQuery
- [ ] Efectos visuales y animaciones
- [ ] Autocompletar contactos
- [ ] Actualización dinámica de saldo
- [ ] Manipulación del DOM optimizada

### ⬜ Lección 7 - Git y GitHub
- [ ] Inicializar repositorio
- [ ] Estructura de ramas
- [ ] Commits organizados
- [ ] Pull Requests

---

## 🎨 Guía de Diseño

### Paleta de Colores (Fintech)
| Variable | Color | Uso |
|----------|-------|-----|
| `--color-primary` | #2563eb | Azul corporativo |
| `--color-primary-dark` | #1d4ed8 | Hover estados |
| `--color-secondary` | #10b981 | Verde éxito/ingresos |
| `--color-accent` | #f59e0b | Naranja advertencia |
| `--color-error` | #ef4444 | Rojo errores/gastos |
| `--color-background` | #f8fafc | Fondo general |
| `--color-surface` | #ffffff | Tarjetas |
| `--color-text` | #1e293b | Texto principal |
| `--color-text-light` | #64748b | Texto secundario |

### Tipografía
- **Sistema:** Segoe UI, Tahoma, sans-serif
- **Próximo:** Google Fonts (Lección 3)

---

## 📝 Notas de Desarrollo

### Lección 1 - Completada ✅
- Estructura inicial creada
- Páginas base implementadas
- Flujo de navegación definido
- Estilos CSS base incluidos

### Lección 2 - Completada ✅
- 3 nuevas pantallas creadas (deposit, sendmoney, transactions)
- HTML semántico implementado en todas las páginas
- Formularios con validaciones HTML5
- Componentes de contactos y modal
- Historial de transacciones con filtros
- Resumen financiero con tarjetas
- +800 líneas de CSS añadidas
- Mejoras de accesibilidad (ARIA, skip links)

---

*Última actualización: 13 Enero 2026*
