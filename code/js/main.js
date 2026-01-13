/* =============================================
   ALKE WALLET - JavaScript Base
   Lección 1: Estructura inicial
   ============================================= */

/**
 * Archivo de JavaScript principal para Alke Wallet
 * En lecciones posteriores se agregarán:
 * - Validación de formularios (Lección 5)
 * - Gestión de saldo (Lección 5)
 * - Eventos de transacciones (Lección 5)
 * - Integración con jQuery (Lección 6)
 */

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Alke Wallet - Aplicación inicializada');
    
    // Inicialización de la aplicación
    initApp();
});

/**
 * Función de inicialización principal
 */
function initApp() {
    // Detectar página actual
    const currentPage = window.location.pathname.split('/').pop();
    console.log('Página actual:', currentPage);
    
    // Aquí se agregarán más inicializaciones según la página
}

/**
 * Función placeholder para navegación
 * Se implementará completamente en lecciones posteriores
 */
function navigateTo(page) {
    window.location.href = page;
}

/**
 * Función para mostrar mensajes al usuario
 * Se mejorará con Bootstrap modals en Lección 4
 */
function showMessage(message, type = 'info') {
    alert(message);
    // TODO: Implementar con modales de Bootstrap
}

