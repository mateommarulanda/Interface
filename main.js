//Crear
const crearUsuario = (params) => {
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let password = document.getElementById("contraseña").value
    let estadoUs = document.getElementById("estadoUs").value
    
    let usuario = {
        id, nombre, apellido, password, estadoUs
    }
    return usuario
}
const crearReserva = (params) => {
    let id = document.getElementById("idRe").value
    let lugares = document.getElementById("lugar").value
    let horas = document.getElementById("horas").value

    let reserva = {
        id, lugares, horas
    }
    return reserva
}
const crearProyecto = (params) => {
    let id = document.getElementById("idPr").value
    let nombre = document.getElementById("nombrePr").value
    let estado = document.getElementById("estados").value

    let proyecto = {
        id, nombre, estado
    }
    return proyecto
}

const guardarUsuario = () =>{
    let usuario = crearUsuario()
    console.log(usuario)
}
const guardarProyecto = () =>{
    let proyecto = crearProyecto()
    console.log(proyecto)
}
const guardarReserva = () =>{
    let reserva = crearReserva()
    console.log(reserva)
}

//Eliminar
const obtenerValoresProyecto = (params) => {
    let id=document.getElementById("id_del_pry").value
    let proyecto={
        id
    }
    return proyecto
}
const obtenerValoresUsuario = (params) => {
    let id=document.getElementById("id_del_usua").value
    let usuario={
        id
    }
    return usuario
}
const obtenerValoresReservas = (params) => {
    let id=document.getElementById("id_del_reserv").value
    let reserva={
        id
    }
    return reserva
}
const borrarReserva= () => {
    console.log("click guardar reserva");  
    let reserva= obtenerValoresReservas()
    console.log(reserva);
}
const borrarProyecto = () => {
    console.log("click guardar proyecto");  
    let proyecto= obtenerValoresProyecto()
    console.log(proyecto);
}
const borrarUsuario= () => {
    console.log("click guardar usuario");  
    let usuario= obtenerValoresUsuario()
    console.log(usuario);
}

//Actualizar
const nueUsuario = (params) => {
    let id = document.getElementById("idAct").value
    let nombre = document.getElementById("nombreAct").value
    let apellido = document.getElementById("apellidoAct").value
    let password = document.getElementById("contraseñaAct").value
    let estadoUs = document.getElementById("estadoUsAct").value
    
    let usuario = {
        id, nombre, apellido, password, estadoUs
    }
    return usuario
}
const nueReserva = (params) => {
    let id = document.getElementById("idReAct").value
    let lugares = document.getElementById("lugarAct").value
    let horas = document.getElementById("horasAct").value

    let reserva = {
        id, lugares, horas
    }
    return reserva
}
const nueProyecto = (params) => {
    let id = document.getElementById("idPrAct").value
    let nombre = document.getElementById("nombrePrAct").value
    let estado = document.getElementById("estadosAct").value

    let proyecto = {
        id, nombre, estado
    }
    return proyecto
}
const actUsuario = () => {
    let usuario = nueUsuario()
    console.log(usuario)
}
const actProyecto = () => {
    let proyecto = nueProyecto()
    console.log(proyecto)
}
const actReserva = () => {
    let reserva = nueReserva()
    console.log(reserva)
}