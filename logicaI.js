const arrayPrueba = [1,2,10];
const arrayPrueba2 = [5,8,4,5,7,85]
//console.log("hola desde la consola");

//--------------EJERCICIO 1----------------
function sumaArray(arr){
    let suma = 0;
    for(let i= 0 ; i< arr.length ; i++){
        suma += arr[i] ;
    }
    return suma  ;
};
console.log(sumaArray(arrayPrueba2));


//------------EJERCICIO 2-----------------
const triangulos = [
    {nombre: "isoceles" , base: 6 , altura: 4},
    {nombre: "escaleno" , base: 5 , altura: 8},
    {nombre: "equilatero", base: 6, altura: 3}
];
//calculoArea =[]
function areaTriangulo(object){
    object.forEach(element => {
        area = (element.base * element.altura) /2;
        //calculoArea.push(area);
        console.log(`El area del triangulo ${element.nombre} es igual a ${area}`)
    });
}
areaTriangulo(triangulos);
//console.log(calculoArea)

//  function areaTriangulo (base, altura){
//      return area = (base * altura) /2 ;
//  }
// const trianguloBase = 2 ;
// const trianguloAltura = 3;
// console.log(areaTriangulo(trianguloBase,trianguloAltura));

//-------------EJERCICIO 3-------------------
//3) Crear una función que transforme la cantidad de días en años.
//Ejemplo: 555 => Debe retornar 1
//Ejemplo: 3650 => Debe retornar 10

const dias = 3655
const dias2 = 2568
//function calcularAnio(days){
  // let anios = days / 365
  // return Math.trunc(anios)
//}

const calcularAños = days => Math.trunc(days/365)
console.log(calcularAños(dias));
console.log(calcularAños(dias2));

//---------EJERCICIO 4----------------
 const string1 = 'reproducir cancion'
 const string2 = 'reproducir video'
 const string3 = 'reproducir layout1'

 const compareStrings1 = (str1 , str2) => str1.length == str2.length;
 console.log(compareStrings1(string1,string2))

 function compareStrings (str1, str2){
     return str1.length == str2.length
     
 };
 console.log(compareStrings(string1,string3))
 
 //----------EJERCICIO 5---------------

 function reverseString (str){
     toArray = str.split('');
     alReves = toArray.reverse();
     return alReves.join('')

 };
 console.log(reverseString(string1))

 //----------- EJERCICIO 6 --------------

const num = 12
const num2 = 15

const divisible = numero => numero%5 == 0;

console.log(divisible(num));
console.log(divisible(num2));

//-------------EJERCICIO 7--------------

const Ejemplo1 = "hola mundo";
const Ejemplo2 = "soy Otro ejemplo";
const Ejemplo3 = "por si todavía no queda claro";
arrayCapitalizado = []
const prueba = 'termo'
function letraMayuscula (palabra){
    let sinMayuscula = palabra.slice(1)
    let soloMayuscula =  palabra.charAt(0).toUpperCase();
    return soloMayuscula.concat(sinMayuscula);
     
}
console.log(letraMayuscula(prueba));

function capitalize (str) {
    let arrayACapitalizar = str.split(" ");
    let letrasCapitalizadas = arrayACapitalizar.map(letraMayuscula);
    return letrasCapitalizadas.join(' ');
    
   }

console.log(capitalize(Ejemplo1));
console.log(capitalize(Ejemplo2));
console.log(capitalize(Ejemplo3));

//----------EJERCICIO 8------------
let numerosParaOrdenar =[45, 53, 88, 21, 11, 87, 66];

function mayor (arr){
    arr.sort(function(a,b){
        return b-a;
    });
    return arr[0];

}
console.log(mayor(numerosParaOrdenar));

//------------EJERCICIO 9---------------
const sinLetra = 'azul'
const sacarLetra = str => str.slice(1);
console.log(sacarLetra(sinLetra))

//----------EJERCICIO 10-----------
// Convertir una array a una string. Una función tomará una array de strings y se convertirá en una única string.

const array3 = ['hola', 'mundo','soy','un', 'array'];

function convertToString (arr){
   let string3 = arr.join(' ');
   return string3

};
console.log(convertToString(array3))
