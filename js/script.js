function mostrarSeccion(idSeccion) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.classList.remove('activa');
    });

    const botonesNav = document.querySelectorAll('.nav-btn');
    botonesNav.forEach(function(boton) {
        boton.classList.remove('activo');
    });

    const seccionSeleccionada = document.getElementById(idSeccion);
    if (seccionSeleccionada) {
        seccionSeleccionada.classList.add('activa');

        document.querySelectorAll('.tabla-oculta').forEach(t => t.classList.remove('mostrar'));
        document.querySelectorAll('.fila-animada').forEach(f => f.classList.remove('mostrar'));

        const tabla = seccionSeleccionada.querySelector('.tabla-oculta');
        const filas = seccionSeleccionada.querySelectorAll('.fila-animada');

        setTimeout(function() {
            if (tabla) tabla.classList.add("mostrar");
            
            filas.forEach(function(fila, index) {
                setTimeout(function() {
                    fila.classList.add("mostrar");
                }, (index + 1) * 500); 
            });
        }, 600);
    }

    const botonSeleccionado = Array.from(botonesNav).find(btn => btn.getAttribute('onclick').includes(idSeccion));
    if (botonSeleccionado) {
        botonSeleccionado.classList.add('activo');
    }
        
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function confirmarSalida(event, empresa) {
    const confirmacion = confirm(`Estás a punto de salir del portafolio para visitar la bolsa de trabajo oficial de ${empresa}.\n\n¿Deseas continuar?`);
    
    if (!confirmacion) {
        event.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion('inicio');
});