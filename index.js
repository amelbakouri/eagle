// Écrivez une expression qui utilise les opérateurs &&, || et ! pour renvoyer true si x est un nombre pair et y est un nombre impair, et false sinon.

// let x = 4
// let y = 4

// if (x % 2 == 0 && y % 2 == 1){
// alert("true")
// } else {
//     alert("false")
// }



// let x = window.prompt("Entrez un nombre");
// let y = window.prompt("Entrez un deuxieme nombre");


// if( x %2 != 1 && y %2 != 0 || x %2 == 0 && y %2 == 1 ){
//     alert(true)
// }else{
//     alert(false)
// }





// Écrivez une instruction if...else qui affiche "Bonjour" si heure est inférieure à 12, "Bon après-midi" si heure est comprise entre 12 et 18, et "Bonsoir" sinon

// function mousline() {
//     let hour = parseInt(window.prompt("entrez l'heure"))
//     if (typeof hour == "number" && hour > 0) {
//         if (hour < 12){
//             alert("Bonjour")
//             } else if (hour >= 12 && hour <= 18){
//                alert("Bon après-midi")
//             } else {
//                 alert("Bonsoir")
//             }
//     } else {
//         alert("veuillez entrer une heure correct")
//         mousline()
//     }
// } 
// mousline()++++





// Écrivez une fonction nommée somme qui prend deux paramètres a et b, et qui renvoie la somme de ces deux nombres, en utilisant l’opérateur d’addition +.

// function addition (a,b){
//     return a + b
// }


// console.log(addition (10,3)) 




// function somme() {
//     let a = parseFloat(prompt("Entrez la valeur de a :"));
//     let b = parseFloat(prompt("Entrez la valeur de b :"));
  
//     return a + b;
//   }
  
//   let resultat = somme();
//   console.log(resultat);





// Écrivez une fonction nommée produit qui prend deux paramètres a et b, et qui renvoie le produit de ces deux nombres, en utilisant l’opérateur de multiplication *.

// function addition (a,b){
//     return a * b
// }


// console.log(addition (5,3))









// Écrivez une fonction nommée quotient qui prend deux paramètres a et b, et qui renvoie le quotient de la division de a par b, en utilisant l’opérateur de division /. Si b est égal à zéro, la fonction doit renvoyer "erreur".

// function quotient (a,b){
//     if (b == 0) {
//         console.error("error")
//     }
//     return a / b 
// }


// console.log(quotient (2,0))



// function quotient (a,b){
//     return b==0? "erreur" : a/b 
// }


// console.log(quotient (2,0))


// Écrivez une fonction nommée reste qui prend deux paramètres a et b, et qui renvoie le reste de la division de a par b, en utilisant l’opérateur modulo %. Si b est égal à zéro, la fonction doit renvoyer "erreur".


// function reste (a,b){
//     return a % b 
// }


// console.log(reste (2,5))







// Écrivez une fonction nommée puissance qui prend deux paramètres a et b, et qui renvoie a élevé à la puissance b, en utilisant l’opérateur d’exponentiation **.

// function puissance (a,b){
// return a ** b
// }

const span = document.getElementsByTagName('span');
const div = document.querySelector('#byId');
const menu = document.querySelector('.menu')


console.log(div);

span[0].style.background = "rgb(0,0,255)";

function getNumber(){
    return Math.floor(Math.random() * 256);
}

// function toggleClass(){
//     if (div.className == 'active'){
//         div.classList.remove('active');
//     } else {
//         div.classList.add('active');
//     }
// }

div.addEventListener("click", ()=>{
    console.log("j'ai cliqué");
    // document.body.style.background = `rgb(${getNumber()}, ${getNumber()}, ${getNumber()})`;
    menu.classList.toggle('active');
    var audio = new Audio("sound/son.mp4");

    // Jouez le son
    audio.play();
})
