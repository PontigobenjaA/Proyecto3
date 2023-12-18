const alumnos = JSON.parse(localStorage.getItem('Alumnos')) || []
function ingresarDatos() {
    let materia1 = document.getElementById('Matematicas').value
    let materia2 = document.getElementById('Programación').value
    let nota1 = document.getElementById('notaMateria').value
    let nota2 = document.getElementById('notaOtraMateria').value
    let name = document.getElementById('nameU').value
    let apel = document.getElementById('apellidoU').value 
    let Age = document.getElementById('edadU').value
    let materias = [materia1+"  "+ materia2]
    let notas = [nota1+"  "+ nota2]
   let promedio = calcularPromedio(nota1, nota2)
        agregarAlumno(name, apel, Age, materias, notas, promedio)
    mostraindice('menu1')
    alert("Para actulizar la tabla presiona ALumnos nuevamente🙌")

}
function promedioGeneral(nota1, nota2) {
    let curso = document.getElementById('selecion').value
    if (curso === "Matematicas") {
        (nota1/alumnos.length)
    }else{
        (nota2/alumnos.length)
    }
}
function calcularPromedio(nota1, nota2) {
    if (nota1 === "" || nota2 === "") {
        return nota1 === "" ? nota2 : nota1
    } else {
        return ((parseInt(nota1) + parseInt(nota2))/2)
    }
}
function mostraindice(menu) {
    document.getElementById("menu1").style.display = "none"
    
    document.getElementById("menu2").style.display = "none"
    // Muestra los menu
    document.getElementById(menu).style.display = "block"
    if (menu === 'menu1') {
        const tablaBody = document.querySelector(`#${menu} tbody`)
        tablaBody.innerHTML = crearfilas(alumnos)
    } else{
        const tablaBody = document.querySelector(`#${menu} tbody`)
        tablaBody.innerHTML = crearfilasMenu(grupos)

    }
}
function eliminarAlumnoPorIndice(indice) {
    alumnos.splice(indice, 1)
    localStorage.setItem('Alumnos', JSON.stringify(alumnos))
    
}
function crearfilas(datos) {
    let filasHTML = '';
    for (let i = 0; i < datos.length; i++) {
        const { nombre, apellido, edad, materias, notas, promedio } = datos[i]
        filasHTML += `
       <tr>
       <td>${nombre} </td>
       <td>${apellido}</td>
       <td>${edad}</td>
       <td>${materias}</td>
       <td>${notas}</td>
       <td>${promedio}</td>
       <td><button type="button" class="btn btn-danger" onclick="eliminarAlumnoPorIndice(${i})">Alta</button></td>
        </tr>
       </tr>
       `
    }
    return filasHTML
}

// Funcion para agregar un alumno
function agregarAlumno(nombre, apellido, edad, materias, notas, promedio) {
    var nuevoAlumno = { nombre: nombre, apellido: apellido, edad: edad, materias: materias, notas:notas, promedio: promedio }
    alumnos.push(nuevoAlumno)

    localStorage.setItem('Alumnos', JSON.stringify(alumnos))
}
const grupos = JSON.parse(localStorage.getItem('Grupos')) || []

function informacionAgregar() {
    let nombreProfesor = document.getElementById('nameProfesor').value
    let curso = document.getElementById('selecion').value
    let promedio = promedioGeneral(nota1, nota2)
    grupos.push(alumnos)
    agregargrupos(nombreProfesor, curso, promedio)
}

function crearfilasMenu(ficha){
    let filasHTML = '';
    for (let i = 0; i < ficha.length; i++) {
        const { profesor, curso, promedio } = ficha[i]
        filasHTML += `
       <tr>
       <td>${profesor} </td>
       <td>${curso}</td>
       <td>${promedio}</td>
       <td><button type="button" class="btn btn-danger" onclick="eliminargruposPorIndice(${i})">Eliminar Grupo</button></td>
        </tr>
       </tr>
       `
    }
    return filasHTML
}
function eliminargruposPorIndice(indice) {
    grupos.splice(indice, 1)
    localStorage.setItem('Grupos', JSON.stringify(grupos))
}
function agregargrupos(profesor, curso, promedio) {
    var nuevogrupo ={profesor: profesor, curso:curso, promedio:promedio}
    grupos.push(nuevogrupo)
    localStorage.setItem('Grupos', JSON.stringify(grupos))
}

    