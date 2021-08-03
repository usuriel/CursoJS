// Media Aritmetica con for

const SueldosD = [100, 200, 500, 800, 100, 200, 500, 800, 500, 100, 200, 500, 800, 400000];
function OrganizarLista (a, b){return a - b;}
Sueldos =  SueldosD.sort(OrganizarLista);

let SumaSueldoF = 0;
for (let i = 0; i < Sueldos.length; i++){
    SumaSueldoF = SumaSueldoF + Sueldos[i];
}

const MediaAritmetica = SumaSueldoF / Sueldos.length;

// media aritmetica con reduce

function CalcularMediaAritmetica(Sueldos){
    const SumaSueldosR = Sueldos.reduce(
        function (ValorAcumulado = 0, NuevoElemento){
            return ValorAcumulado + NuevoElemento;
        }
    );

    const PromedioR = SumaSueldosR / Sueldos.length;
    return PromedioR;
}

//Busrcar la mediana

const MedioSueldos = parseInt(Sueldos.length / 2);

function Par (ResultadoDivicion){
    if (ResultadoDivicion % 2 === 0)        { return true  }
    else                                    { return false }
};

let Mediana;

if (Par (Sueldos.length))   {
    const Sueldo01 = Sueldos[MedioSueldos - 1] ;
    const Sueldo02 = Sueldos[MedioSueldos];
    const PromedioSuma = CalcularMediaAritmetica([Sueldo01, Sueldo02]);
    Mediana = PromedioSuma;
 }
else                        {Mediana = Sueldos[MedioSueldos]};


// Buscar la Moda

const SueldosModa ={};

SueldosD.map(
    function (elementos){
        if (SueldosModa[elementos]) { SueldosModa[elementos] += 1}
        else                        {SueldosModa[elementos] = 1}
    }
);

const SueldosA = Object.entries(SueldosModa).sort(
    function (ValorAcumulado, ValorNuevo) {
       return ValorAcumulado[1] - ValorNuevo[1] 
    }
);

const Moda = SueldosA[SueldosA.length - 1];