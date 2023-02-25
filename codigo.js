

    //Una Funcion que devuelve un numero aleatorio entre 1 y 3
    function aleatoria(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    //funcion para elegir
    function eleccion(jugada){
        let resultado = ""

        if (jugada == 1) {
            resultado = "Piedra 🥌"

        } else if (jugada == 2) {
            resultado = "Papel 📄"

        } else if (jugada == 3) {
            resultado = "Tijera ✂"

        } else {
            resultado = "Mal elegido 😣"
        }
        return resultado
    }
    // 1 es piedra, 2 es papel, 3 es tijera
    let jugador = 0
    let pc = 0
    let triunfos = 0
    let perdidas = 0

    /*Creo una instruccion while parar que finalice la partida cuando uno de los jugadores
    gane tres veces*/      
    while (triunfos < 3 && perdidas < 3) {

            pc = aleatoria(1, 3) //Llama a la funcion y le da sus respectivo valores a los parametros            
            jugador = prompt("Elige: 1 para piedra, 2 para papel , 3 para tijera")
            alert("Eleccion Pc " + eleccion(pc))
            alert("Elige jugador" + eleccion(jugador))
            
            //Combate
            if (pc == jugador) {
                alert(" Empate ")

            } else if (jugador == 1 && pc == 3) {
                alert(" Ganaste ")
                triunfos = triunfos + 1

            } else if (jugador == 2 && pc == 1) {
                alert(" Ganaste ")
                triunfos = triunfos + 1

            } else if (jugador == 3 && pc == 2) {
                alert(" Ganaste ")
                triunfos = triunfos + 1

            } else {
                alert("Perdiste")
                perdidas = perdidas + 1
            }
        }
        alert("GANASTE " + triunfos + " veces. Perdiste " + perdidas + " veces.") 
        
    
    /*Toda esta lina de codigo es reemplazada por la funcion eleccion
    if(jugador  == 1){
        alert("Elegiste 🥌")

    } else if(jugador == 2){
        alert("Elegiste 📄 ")

    } else if(jugador == 3){
        alert("Elegiste ✂ ")

    } else{
        alert("Elegistte Perder no sabes jugar 😣")
    }
    
    if(pc == 1){
        alert("Pc Eligio 🥌")

    } else if(pc == 2){
        alert("Pc Eligio 📄 ")

    } else if(pc == 3){
        alert("Pc Eligio ✂ ")
        
    } else{
        alert("Elegistte Perder no sabes jugar 😣")
    }*/

   
