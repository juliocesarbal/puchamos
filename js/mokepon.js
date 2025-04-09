let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
let sectionReiniciar = document.getElementById('reiniciar')
let botonMascotaJugador = document.getElementById('boton-mascota')
let botonFuego = document.getElementById('boton-fuego')
let botonAgua = document.getElementById('boton-agua')
let botonTierra = document.getElementById('boton-tierra')
let botonReiniciar = document.getElementById('boton-reiniciar')
let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
let imgJugador = document.getElementById("Jugador")
let inputCharmander = document.getElementById('charmander')
let inputBulbasur = document.getElementById('bulbasur')
let inputSquirtle = document.getElementById('squirtle')
let spanMascotaJugador = document.getElementById('mascota-jugador')
let imgEnemigo = document.getElementById("Enemigo")
let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

let ataqueJugador
let ataqueEnemigo
let pokemonJugador
let pokemonEnemigo
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if (inputCharmander.checked) {
        spanMascotaJugador.innerHTML = 'Charmander'
        imgJugador.src="./assets/charmander.png"
        pokemonJugador = "Charmander"
    } else if (inputBulbasur.checked) {
        spanMascotaJugador.innerHTML = 'Bulbasur'
        imgJugador.src="./assets/bulbasur.png"
        pokemonJugador = "Bulbasur"
    } else if (inputSquirtle.checked) {
        spanMascotaJugador.innerHTML = 'Squirtle'
        imgJugador.src="./assets/squirtle.png"
        pokemonJugador = "Squirtle"
    } else {
        alert('Selecciona una mascota')
        reiniciarJuego();
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)

    if ((mascotaAleatoria == 1) && (pokemonJugador != "Charmander")) {
        spanMascotaEnemigo.innerHTML = 'Charmander'
        imgEnemigo.src="./assets/charmander.png"
    } else if ((mascotaAleatoria == 2) &&(pokemonJugador != "Bulbasur")) {
        spanMascotaEnemigo.innerHTML = 'Bulbasur'
        imgEnemigo.src="./assets/bulbasur.png"
    } else if ((mascotaAleatoria == 3)&&(pokemonJugador !="Squirtle")){
        spanMascotaEnemigo.innerHTML = 'Squirtle'
        imgEnemigo.src="./assets/squirtle.png"
    } else{
        seleccionarMascotaEnemigo()
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensajeyo()
        crearMensajeEnemigo()
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensajeyo()
        crearMensajeEnemigo()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensajeyo()
        crearMensajeEnemigo()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensajeyo()
        crearMensajeEnemigo()
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensajeyo()
        crearMensajeEnemigo()
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensajeyo() {
    let sectionMensajes = document.getElementById('yo')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = ataqueJugador

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeEnemigo() {
    let sectionMensajes = document.getElementById('enemigo')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = ataqueEnemigo

    sectionMensajes.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'flex'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
