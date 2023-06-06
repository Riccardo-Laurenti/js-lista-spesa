/*   Consegna:
     Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

       Consigli:

     - Facciamo un primo giro col for, in modo da sentirci confident sul risultato della stampa, poi trasformiamo il for in un while
     - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
     - Ricordiamoci di incrementare il contatore all'interno ciclo while per evitare di cascare in un loop infinito.
*/


 
 /*
 // Recupero elemento dal Dom tramide ID
 const recList = document.getElementById('shop-list');

 const listShop = ['Latte', 'Yogurt', 'Marmellata', 'Frumento'];


 let shopV = '';

 // Creo ciclo for
   for ( i = 0; i < listShop.length; i++ ) {
      shopV += `<li> ${listShop[i]} </li> ` ;
   }


 // Stampo in pagina
 recList.innerHTML = shopV;

*/

// ----------------------------------------------------------


// Inizio Esercizio con ciclo while


// Recupero elemento dal Dom tramide ID
const recList = document.getElementById('shop-list');


const listShop = ['Latte', 'Yogurt', 'Marmellata', 'Frumento'];

let shopV = '';


let i = 0;


   // Creo ciclo while 
   while (i < listShop.length ) {
      shopV += `<li> ${listShop[i]} </li> ` ;
      i++;
   }



 // Stampo in pagina

 recList.innerHTML = shopV;