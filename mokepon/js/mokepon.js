//VARIABLES GLOBALES
let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3

//INICIO DEL JUEGO
function iniciarJuego(){
let seccionAtaque = document.getElementById("seleccion-ataque")
seccionAtaque.style.display = 'none'

let seccionReiniciar = document.getElementById('reiniciar-juego')
seccionReiniciar.style.display = 'none' 

//getElementsBy busca todos los elementos que tenga Id, entre parentesis lo que estamos buscando
let botonMascotaJugador =document.getElementById('boton-mascota')
//Evento del Mouse el cual tiene dos parametros (click y la funcion que llama)
botonMascotaJugador.addEventListener('click', seleccionMascotaJugador)

let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra)

let botonReiniciar = document.getElementById('reiniciar')
botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionMascotaJugador(){
    let seccionSeleccionarMascota = document.getElementById("seleccion-mascota")
    seccionSeleccionarMascota.style.display = 'none'

    let seccionAtaque = document.getElementById("seleccion-ataque")
    seccionAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked){
        /*El innerHTML nos permite cambiar el valor en html a traves de un spam*/
        spanMascotaJugador.innerHTML = "Hipodoge"

    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"

    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    
    }else{
        alert("Seleccione una mascota")
    }
    seleccionarMascotaEnemigo()//llamo a la funcion seleccionar mascota enemigo

}
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatoria(1,3) //Llamo a la funcion aleatoria y le paso los parametros
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"

    
    }else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    
    }else{
        spanMascotaEnemigo.innerHTML = "Ratigueya"
        
    }
}
//Funcion Aleatoria que elige entre 1 y 3, dependiendo de ello es la mascota del enemigo
function aleatoria(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()

}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()

}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

//FUNCION DE LOS ATAQUE ALEATORIO ENEMIGO
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatoria(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"

    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"

    }else{
        ataqueEnemigo = "TIERRA"
    }
    combateResultados()
}

function combateResultados(){
    spamVidaJugador = document.getElementById('vida-jugador')
    spanVidaEnemigo = document.getElementById('vida-enemigo')

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE 😐")
    
    }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE 😎😎")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE 😎😎")
        vidaEnemigo--
        spanVidaEnemigo,innerHTML = vidaEnemigo
    
    }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE😎😎")
        vidaEnemigo--
        spanVidaEnemigo,innerHTML = vidaEnemigo
    
    }else{
        crearMensaje("PERDISTE 😪😪")
        vidaJugador--
        spamVidaJugador.innerHTML = vidaJugador
    }
    //Revisar las vidas
    revisarVidas()//LLAMO A LA FUNCION
}

function revisarVidas(){
    if(vidaJugador == 0){
       crearMensajeResultadoFinal("PERDISTE EL COMBATE")
    
    }else if(vidaEnemigo == 0){
        crearMensajeResultadoFinal("GANASTE EL COMBATE FELICITACIONES 😀😀")
    
    }
}

//Nos permite Agregar un parrafo a html y que es dinamico
function crearMensaje(resultado){
    //Variable que señala a la seccion msj donde quiero escribir el nuevo parrafo
    let secctionMensaje = document.getElementById('resultados')
    let ataqueDelJugador = document.getElementById('ataque-del-jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo') 

    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    secctionMensaje.innerHTML= resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    //Le agregamos al parrafo el texto que va a ir a traves de innerHTML
    //parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ' la mascota enemiga ataco con ' + ataqueEnemigo + ' ' + resultado

    //Llamo al metodo appenChil y coloco como parametro la variable parrafo
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeResultadoFinal(resultadoCombate){
    let secctionMensaje = document.getElementById('resultados')

    
    secctionMensaje.innerHTML = resultadoCombate
    

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled =true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    //Hago aparecer el boton reiniciar
    let seccionReiniciar = document.getElementById('reiniciar-juego')
    seccionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load' , iniciarJuego)