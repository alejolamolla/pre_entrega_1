




let jugadas = parseInt(prompt('Ingrese un numero de jugada que deas jugar'));

for (let i = 0 ; i < jugadas; i++){
    let jugador = prompt('Escribe o elige: piedra , papel o tijera');
    let piedra = 0;
    let papel = 1;
    let tijera = 2;

    let maquina = Math.floor(Math.random() * 3);

    if (jugador === 'piedra' && maquina === 0){
        console.log('EMPATE');
    }else if (jugador === 'papel' && maquina === 0){
        console.log('FELICIDADES GANASTE');
    }else if (jugador === 'tijera' && maquina === 0){
        console.log('PERDISTE');
    }else if (jugador === 'piedra' && maquina === 1){
        console.log('PERDISTE');
    }else if (jugador === 'papel' && maquina === 1){
        console.log('EMPATE');
    }else if (jugador === 'tijera' && maquina === 1){
        console.log('FELICIDADES GANASTE');
    }else if (jugador === 'piedra' && maquina === 2){
        console.log('FELICIDADES GANASTE');
    }else if (jugador === 'papel' && maquina === 2){
        console.log('PERDISTE');
    }else if (jugador === 'tijera' && maquina === 2){
        console.log('EMPATE');
    }
}