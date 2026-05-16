const tablaDocentes =
document.getElementById("tablaDocentes");

function guardarDocente(){

    const nombre =
    document.getElementById("nombreDocente").value;

    const apellido =
    document.getElementById("apellidoDocente").value;

    const dni =
    document.getElementById("dniDocente").value;

    const email =
    document.getElementById("emailDocente").value;

    const especialidad =
    document.getElementById("especialidadDocente").value;

    const curso =
    document.getElementById("cursoDocente").value;

    // VALIDAR

    if(
        nombre === "" ||
        apellido === "" ||
        dni === "" ||
        email === "" ||
        especialidad === "" ||
        curso === ""
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
        <td>${apellido}</td>
        <td>${dni}</td>
        <td>${email}</td>
        <td>${especialidad}</td>
        <td>${curso}</td>

        <td>

            <button onclick="eliminarDocente(this)">
                Eliminar
            </button>

        </td>
    `;

    tablaDocentes.appendChild(fila);

    // LIMPIAR FORM

    document.querySelector(".formulario").reset();

}

function eliminarDocente(boton){

    boton.parentElement.parentElement.remove();

}