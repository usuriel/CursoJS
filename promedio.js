// Media Aritmetica con for

const Sueldos = [100, 200, 300, 500];

let SumaSueldo = 0;
for (let i = 0; i < Sueldos.length; i++){
    SumaSueldo = SumaSueldo + Sueldos[i];
}

const Promedio = SumaSueldo / Sueldos.length;

// media aritmetica con reduce

function CalcularMediaAritmetica(Lista){
    const SumaLista = Lista.reduce(
        function (ValorAcumulado = 0, NuevoElemento){
            return ValorAcumulado + NuevoElemento;
        }
    );

    const Promedio = SumaLista / Lista.length;
    return Promedio;

}

//Busrcar la mediana

const Mediana = parseInt(Sueldos.length/2);

function Par(Numero){
    if (Numero % 2 === 0)   { return true;}
    else                    { return false; }
}


