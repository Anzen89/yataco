// script.js

// ABRIR Y CERRAR TARJETAS

// script.js

const botonesUsuario = document.querySelectorAll(".toggle-btn-usuarios");

botonesUsuario.forEach((boton) => {

    boton.addEventListener("click", () => {

        // Redireccionar
        window.location.href = "paginas/usuarios.html";

    });

});

const botonesEstudiantes = document.querySelectorAll(".toggle-btn-estudiantes");

botonesEstudiantes.forEach((boton) => {

    boton.addEventListener("click", () => {

        // Redireccionar
        window.location.href = "paginas/estudiantes.html";

    });

});

const botonesDocentes = document.querySelectorAll(".toggle-btn-docentes");

botonesDocentes.forEach((boton) => {

    boton.addEventListener("click", () => {

        // Redireccionar
        window.location.href = "paginas/docentes.html";

    });

});

const botonesCursos = document.querySelectorAll(".toggle-btn-cursos");

botonesCursos.forEach((boton) => {

    boton.addEventListener("click", () => {

        // Redireccionar
        window.location.href = "paginas/cursos.html";

    });

});

// INICIAR

mostrarUsuarios();