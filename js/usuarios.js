const tablaUsuarios = document.getElementById("tablaUsuarios");

function guardarUsuario(){

    // OBTENER DATOS

    const nombre =
    document.getElementById("nombreUsuario").value;

    const dni =
    document.getElementById("dniUsuario").value;

    const correo =
    document.getElementById("correoUsuario").value;

    const rol =
    document.getElementById("rolUsuario").value;

    const password =
    document.getElementById("passwordUsuario").value;

    // VALIDAR

    if(
        nombre === "" ||
        dni === "" ||
        correo === "" ||
        rol === "" ||
        password === ""
    ){
        alert("Complete todos los campos");
        return;
    }

    // VALIDAR DNI

    if(dni.length !== 8){

        alert("El DNI debe tener 8 dígitos");
        return;

    }

    // CREAR FILA

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${dni}</td>
        <td>${correo}</td>
        <td>${rol}</td>

        <td>

            <button onclick="eliminarUsuario(this)">
                Eliminar
            </button>

        </td>
    `;

    // AGREGAR TABLA

    tablaUsuarios.appendChild(fila);

    // LIMPIAR FORM

    document.getElementById("nombreUsuario").value = "";

    document.getElementById("dniUsuario").value = "";

    document.getElementById("correoUsuario").value = "";

    document.getElementById("rolUsuario").value = "";

    document.getElementById("passwordUsuario").value = "";

}

function eliminarUsuario(boton){

    boton.parentElement.parentElement.remove();

}