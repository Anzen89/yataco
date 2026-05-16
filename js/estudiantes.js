const tablaEstudiantes =
document.getElementById("tablaEstudiantes");

function guardarEstudiante(){

    const codigo =
    document.getElementById("codigoEstudiante").value;

    const nombre =
    document.getElementById("nombreEstudiante").value;

    const apellido =
    document.getElementById("apellidoEstudiante").value;

    const dni =
    document.getElementById("dniEstudiante").value;

    const fecha =
    document.getElementById("fechaNacimiento").value;

    const grado =
    document.getElementById("gradoEstudiante").value;

    const seccion =
    document.getElementById("seccionEstudiante").value;

    // VALIDAR

    if(
        codigo === "" ||
        nombre === "" ||
        apellido === "" ||
        dni === "" ||
        fecha === "" ||
        grado === "" ||
        seccion === ""
    ){

        alert("Complete todos los campos");
        return;

    }

    // CREAR FILA

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${dni}</td>
        <td>${fecha}</td>
        <td>${grado}</td>
        <td>${seccion}</td>

        <td>

            <button onclick="eliminarEstudiante(this)">
                Eliminar
            </button>

        </td>
    `;

    tablaEstudiantes.appendChild(fila);

    // LIMPIAR FORMULARIO

    document.querySelector(".formulario").reset();

}

function eliminarEstudiante(boton){

    boton.parentElement.parentElement.remove();

}