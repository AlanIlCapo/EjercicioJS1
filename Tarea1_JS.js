//*1-Guarda el valor del siguiente usuario : *Matias Rodriguez *Desarrollador *25 años concatenar los datos y luego imprimirlos por consola.//

var name = "Matias Rodriguez";
var occupation = "Desarrollador";
var age = 25;

var user = name + " " + occupation + " " + age + " años";
console.log(user);

//2-Genera un programa que indique si Matias tiene 25 años imprimir “El usuario tiene 25 años” y si no “El usuario no coincide con la edad ingresada”


//var age = 25
function controlEdad(age){
    if (age === 25) {
        console.log("El usuario tiene 25 años")}
    else {
        console.log("El usuario no coincide con la edad ingresada")
    }
}
controlEdad(10);
controlEdad(25);

/*3-Del contenedor con id “Container” agregar un párrafo y dicho párrafo agregarle la
información del usuario.*/


document.getElementById("container").innerHTML= user;


/*4-Si voy al supermercado a comprar “Chocolates” y el valor de la caja es 100, debo calcular
el iva que es de $16. Genera un programa que calcule el total de la caja de chocolates y su
IVA e imprime el total de monto a abonar por el producto.*/

var caja = 100;
var iva = 16

var total = caja + iva;

console.log(total);

/*5-Escribe un programa que determine si un número es par o impar. Muestra el resultado en
la consola.*/

//var num = prompt ("ingrese numero");

function parImpar(num){
    if (num % 2 === 0){
      console.log("par");
    }
    else{
        console.log("impar");
    }
}
console.log(parImpar(1));
console.log(parImpar(2));


/*7-Escribe un programa que recorra los números del 1 al 20. Para cada número, muestra en
la consola "Fizz" si es divisible entre 3, "Buzz" si es divisible entre 5 y "FizzBuzz" si es
divisible entre ambos. Si no es divisible por ninguno, muestra el número.*/

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        (console.log("FizzBuzz"));
    }
    else if (i % 3 === 0){
        (console.log("Fizz"));
    }
    else if (i % 5 === 0){
        (console.log("Buzz"));
    }
    else {
        console.log(i);
    }
}

/*8--Escribe un programa que calcule la suma de todos los números del 1 al 100 y muestre el
resultado en la consola.*/

//for (var num1 = 1; num1 <=100; num1++)
//console.log(num1);

var sumaTotal = 0;
for (var i = 1; i <= 100; i++) {
    sumaTotal += i;
}
console.log(sumaTotal);


/*9-Escribe un programa que recorra un array de números y muestre cada elemento en la
consola.*/




function recorreArray(number){
  for( let i= 0; i < number.length; i++){
    console.log(number[i])
  }  
}

let number = [1, 2, 3, 5, 8];
recorreArray(number)

/*10-Crea una función que tome un array de palabras como parámetro y devuelva la cantidad
total de caracteres en todas las palabras.*/


let palabra = ["hola", "chau"];
let caracteres = 0;


function recorrePalabra(){
    for (let i= 0; i<palabra.length; i++);
    caracteres += palabra[i].length;
}

console.log(recorrePalabra(caracteres));



