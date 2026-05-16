const tablaCursos =
document.getElementById("tablaCursos");

// CURSOS POR ESPECIALIDAD

const cursosPorEspecialidad = {

    "Matemática": [
        "Álgebra",
        "Geometría"
    ],

    "Comunicación": [
        "Literatura",
        "Comunicación"
    ],

    "Ciencia": [
        "Biología",
        "Química"
    ],

    "Programación": [
        "Programación",
        "Base de Datos"
    ]

};

// ACTUALIZAR CURSOS

function actualizarCursos(){

    const especialidad =
    document.getElementById("especialidadCurso").value;

    const selectCurso =
    document.getElementById("cursoAsignado");

    // LIMPIAR

    selectCurso.innerHTML = `
        <option value="">
            Seleccione curso
        </option>
    `;

    // AGREGAR CURSOS

    cursosPorEspecialidad[especialidad]
    ?.forEach((curso) => {

        const option =
        document.createElement("option");

        option.value = curso;

        option.textContent = curso;

        selectCurso.appendChild(option);

    });

}

// GUARDAR

function guardarCurso(){

    const especialidad =
    document.getElementById("especialidadCurso").value;

    const docente =
    document.getElementById("docenteCurso").value;

    const curso =
    document.getElementById("cursoAsignado").value;

    const seccion =
    document.getElementById("seccionCurso").value;

    if(
        especialidad === "" ||
        docente === "" ||
        curso === "" ||
        seccion === ""
    ){

        alert("Complete todos los campos");
        return;

    }

    // CREAR FILA

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${curso}</td>
        <td>${especialidad}</td>
        <td>${docente}</td>
        <td>${seccion}</td>

        <td>

            <button onclick="eliminarCurso(this)">
                Eliminar
            </button>

        </td>
    `;

    tablaCursos.appendChild(fila);

    document.querySelector(".formulario").reset();

}

// ELIMINAR

function eliminarCurso(boton){

    boton.parentElement.parentElement.remove();

}