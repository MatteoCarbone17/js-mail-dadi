/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/




const userButtonElement = document.getElementById('button');


userButtonElement.addEventListener('click', function(){

    let numberUser = Math.floor(Math.random()*7);
    let numberComputer = Math.floor(Math.random()*7);
    
    if (numberUser>numberComputer){
        console.log('punti fatti '+ numberUser +' hai vinto!')
        console.log('punti fatti dal pc '+ numberComputer)
    } else{
        console.log('punti fatti dal pc '+ numberComputer)
        console.log('punti fatti '+ numberUser +' hai perso')
    }
     
});




let numberUser = Math.floor(Math.random()*7);
let numberComputer = Math.floor(Math.random()*7);

if (numberUser>numberComputer){
    console.log('punti fatti '+ numberUser +' hai vinto!')
    console.log('punti fatti dal pc '+ numberComputer)
} else{
    console.log('punti fatti dal pc '+ numberComputer)
    console.log('punti fatti '+ numberUser +' hai perso')
}

