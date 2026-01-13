# Alke Wallet - Plan de Desarrollo

## 📋 Descripción del Proyecto

**Alke Wallet** es una aplicación de billetera digital que permite a los usuarios gestionar sus activos financieros de manera segura y conveniente.

---

## 🗂️ Estructura del Proyecto

```
code/
├── index.html          → Entrada principal (redirige a login)
├── login.html          → Pantalla de inicio de sesión
├── menu.html           → Menú principal con resumen financiero
├── deposit.html        → Pantalla de depósito (Lección 2)
├── sendmoney.html      → Enviar dinero (Lección 2)
├── transactions.html   → Historial de transacciones (Lección 2)
├── css/
│   └── styles.css      → Estilos personalizados
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

### ⬜ Lección 2 - El lenguaje HTML
- [ ] Estructura HTML semántica completa
- [ ] Formularios con validaciones básicas
- [ ] Crear `deposit.html`
- [ ] Crear `sendmoney.html`
- [ ] Crear `transactions.html`

### ⬜ Lección 3 - Estilos CSS y responsividad
- [ ] Diseño responsive
- [ ] Paleta de colores fintech
- [ ] Tipografía profesional
- [ ] Mejoras UI/UX

### ⬜ Lección 4 - Framework Bootstrap
- [ ] Integrar Bootstrap
- [ ] Componentes responsivos
- [ ] Barra de navegación
- [ ] Modales y botones

### ⬜ Lección 5 - JavaScript
- [ ] Validación de login
- [ ] Gestión de saldo
- [ ] Eventos de depósito
- [ ] Simulación de transferencias

### ⬜ Lección 6 - jQuery
- [ ] Efectos visuales
- [ ] Autocompletar contactos
- [ ] Actualización dinámica de saldo
- [ ] Animaciones UX

### ⬜ Lección 7 - Git y GitHub
- [ ] Inicializar repositorio
- [ ] Estructura de ramas
- [ ] Commits organizados
- [ ] Pull Requests

---

## 🎨 Guía de Diseño

### Paleta de Colores (Fintech)
- **Primario:** #2563eb (Azul corporativo)
- **Secundario:** #10b981 (Verde éxito)
- **Acento:** #f59e0b (Naranja advertencia)
- **Error:** #ef4444 (Rojo)
- **Fondo:** #f8fafc (Gris claro)
- **Texto:** #1e293b (Gris oscuro)

### Tipografía
- **Títulos:** Sans-serif moderna
- **Cuerpo:** Legible y profesional

---

## 📝 Notas de Desarrollo

### Lección 1 - Completada
- Estructura inicial creada
- Páginas base implementadas
- Flujo de navegación definido
- Estilos CSS base incluidos

---

*Última actualización: Enero 2026*

