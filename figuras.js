//Codigo del Cuadrado con valores fijos
console.group("cuadrados con valores fijos")
        const ladoCuadrado = 5;
        console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

        const perimetroCuadrado = ladoCuadrado * 4;
        console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

        const areaCuadrado = ladoCuadrado * ladoCuadrado;
        console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo del Triangulo con valores fijos

const ladoTriangulo01 = 6;
const ladoTriangulo02 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = (ladoTriangulo01 + ladoTriangulo02 + baseTriangulo);
const areaTriangulo =  ((baseTriangulo * alturaTriangulo) /2);

console.group("Triangulos con valores fijos")
        console.log("Los Lados Del Triangulo miden:  "
        + ladoTriangulo01 + "cm, "
        + ladoTriangulo02 + "cm, "
        + baseTriangulo + "cm. ");

        console.log("Los Altura Del Triangulo es de:  " + alturaTriangulo + "cm");
        console.log("Los perimetro Del Triangulo es de:  " + perimetroTriangulo + "cm");
        console.log("Los area Del Triangulo es de:  " + areaTriangulo + "cm^2");
console.groupEnd();


//Codigo del Circulo con valores fijos
const radioCirculo = 4;
const diametroCirculo = (radioCirculo*2);
const PI = Math.PI;
const perimetroCirculo = (diametroCirculo*PI);
const areaCirculo = ((radioCirculo*radioCirculo)*PI);

console.group("Circulos con valores fijos")
    console.log("El radio de circulo es :" + radioCirculo + "cm");
    console.log("El diametro de circulo es :" + diametroCirculo + "cm");
    console.log("PI es igual a :" + PI);
    console.log("El Perimetro de circulo es :" + perimetroCirculo + " cm");
    console.log("El area de circulo es :" + areaCirculo + " cm^2");
console.groupEnd();


/* ---------------------------------------------------------------------------*/

//Codigo del Cuadrado - con valores dinamicos a travez de una funsion

        function perimetroCuadradoConF (lado) {
            return `EL perimetro de nuestro cuadrado es ${lado * 4} cm` ;
        }

        function areaCuadradoConF (lado) {
            return `El area de nuestro cuadrado es ${lado * lado} cm^2` ;
        }


//Codigo del Triangulo - con valores dinamicos a travez de una funsion

        function perimetroTrianguloConF (lado_A, lado_B, lado_C) {
            return `El perimetro de este triangulo es igual a ${lado_A + lado_B + lado_C} cm`;
        }

        function areaTrianguloConF (base, altura) {
            return `El area de este triangulo es igual a ${((base * altura)/2)} cm^2`;
        }

//Codigo del Circulo - con valores dinamicos a travez de una funsion

        function perimetroCirculoConF (diametro) {
            return `El perimetro de este circulo es igual a ${diametro * Math.PI} cm`;
        }

        function perimetroCirculoConFunsion (radio) {
            const diametro = radio * 2;
            return `El perimetro de este circulo es igual a ${diametro * Math.PI} cm`;
        }

        function areaCirculoConFunsion (diametro) {
            const radio = diametro / 2;
            return `El area de este circulo es igual a ${((radio * radio) * Math.PI)} cm`;
        }

        function areaCirculoConF (radio) {
            return `El area de este circulo es igual a ${((radio * radio) * Math.PI)} cm`;
        }




// Interaccion con HTML

// CUADRADOS
function CalcularPerimetroCuadrado (){
    const input =  document.getElementById("InputPerimetroCuadrado");
    const value =  input.value;
    const perimetro = perimetroCuadradoConF(value);
    alert(perimetro);
}

function CalcularAreaCuadrado (){
    const input =  document.getElementById("InputPerimetroCuadrado");
    const value =  input.value;
    const area = areaCuadradoConF(value);
    alert(area);
}

//TRIANGULOS

function CalcularPerimetroTriangulo (){
    const inputA =  document.getElementById("InputPerimetroTrianguloA");
    const lado_A =  inputA.value;
    const inputB =  document.getElementById("InputPerimetroTrianguloB");
    const lado_B =  inputB.value;
    const inputC =  document.getElementById("InputPerimetroTrianguloC");
    const lado_C =  inputC.value;
    const perimetro = perimetroTrianguloConF(parseFloat(lado_A), parseFloat(lado_B), parseFloat(lado_C));
    alert(perimetro);
}

function CalcularAreaTriangulo (){
    const inputBase =  document.getElementById("InputAreaTrianguloBase");
    const base =  inputBase.value;
    const inputAltura =  document.getElementById("InputAreaTrianguloAltura");
    const altura =  inputAltura.value;   
    const area = areaTrianguloConF(base, altura);
    alert(area);
}

//CIRCULOS
function CalcularPerimetroCirculoDiametro(){
    const inputDiametro = document.getElementById("InputCirculoDiametro");
    const diametro = inputDiametro.value;
    const resultado = perimetroCirculoConF (diametro);
    alert(resultado);
}
function CalcularAreaCirculoDiametro(){
    const inputDiametro = document.getElementById("InputCirculoDiametro");
    const area = inputDiametro.value;
    const resultado = areaCirculoConFunsion (area);
    alert(resultado);
}

function CalcularPerimetroCirculoRadio (){
    const inputRadio = document.getElementById("InputCirculoRadio");
    const diametro = inputRadio.value;
    const resultado = perimetroCirculoConFunsion (diametro);
    alert(resultado);
}

function CalcularAreaCirculoRadio (){
    const inputRadio = document.getElementById("InputCirculoRadio");
    const radio = inputRadio.value;
    const resultado = areaCirculoConF ( radio );
    alert(resultado);
}

// Trinagulo Isosceles
function CalcularPerimetroTrianguloI (){
    const inputA =  document.getElementById("InputPerimetroTrianguloAI");
    let lado_A =  inputA.value;
    const inputB =  document.getElementById("InputPerimetroTrianguloBI");
    let lado_B =  inputB.value;
    const inputC =  document.getElementById("InputPerimetroTrianguloCI");
    let lado_C =  inputC.value;

    if ((lado_A === lado_B && lado_A != lado_C) || (lado_B === lado_C && lado_B != lado_A) || (lado_A === lado_C && lado_A != lado_B)) {
    let perimetro = perimetroTrianguloConF(parseFloat(lado_A), parseFloat(lado_B), parseFloat(lado_C));
    alert(perimetro)
    } else {alert ("Los datos no pertenecen a un triangulo Isoscele")}
}
