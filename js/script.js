/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/





const userButtonElement = document.getElementById('button');


userButtonElement.addEventListener('click', function(){

    let numberUser = Math.floor(Math.random()*6) + 1;
    let numberComputer = Math.floor(Math.random()*6) + 1;
    
    if (numberUser>numberComputer){
        document.getElementById('output').innerHTML =('Punti fatti '+ numberUser +' hai vinto!'+ ' punti fatti dal pc '+ numberComputer );

    } else{
        document.getElementById('output').innerHTML =('Punti fatti '+ numberUser +' hai perso!' + ' punti fatti dal pc '+ numberComputer );
    }
     
});



const email = [
    'mrwhite@reservoirdogs.com',
    'mrorange@reservoirdogs.com',
    'mrblonde@reservoirdogs.com',
    'mrpink@reservoirdogs.com',
    'mrbrown@reservoirdogs.com',
    'mrblue@reservoirdogs.com',
];



let userButtonEmailElement = document.getElementById('emailbtn');
let userEmailElement = document.getElementById('useremail');



userButtonEmailElement.addEventListener('click', function(){
 
    let emailValue = userEmailElement.value;

    for (let i = 0; i < email.length; i++) {
        
    console.log(email[i]); 
    
    if ( emailValue == email[i] ) {
        document.getElementById('secondoutput').innerHTML = ('Benvenuto nel club')
    } else{
        document.getElementById('secondoutput').innerHTML = ('ciaone') 
    }
   
}
     
});
