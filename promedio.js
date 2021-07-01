// Media Aritmetica con for

const SueldosD = [100, 200, 500, 800, 400000, 100, 200, 500, 800, 400000];
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