/* 
 BUSCAR MEDIA ARITMETICA CON CICLO FOR
*/ 

const listaMetodoFOR = [100, 200, 300, 500];                                        //SE CREA UNA LISTA 
let sumaListaMetodoFOR = 0;                                                         //INICIALIZAMOS UNA VARIABLE CON VALOR 0 

for (let i = 0; i < listaMetodoFOR.length; i++)                                     //CON EL CICLO FOR HACEMOS QUE SE SUMEN TODOS LOS
{sumaListaMetodoFOR = sumaListaMetodoFOR + listaMetodoFOR[i]};                      //ELEMENTOS DE LA LISTA

const promedioListaMetodoFOR = sumaListaMetodoFOR / listaMetodoFOR.length;          //SACAMOS PROMEDIOS 

//___________________________________________________________________________________________________________//

/*

CREAR FUNSION PARA BUSCAR MEDIA ARITMETICA INTRODUCIONDO LA LISTA DESDE EL NAVEGADO CON EL METODO FOR

*/


function calcularMediaAritmeticaConFOR(ListaConFOR) {
    let sumaListaConFOR = 0;

    for (let i = 0; i < ListaConFOR.length; i++) {
        sumaListaConFOR = sumaListaConFOR + ListaConFOR[i];
    }

const promedioListaConFOR = sumaListaConFOR / ListaConFOR.length;

return promedioListaConFOR

}

/*

CREAR FUNSION PARA BUSCAR MEDIA ARITMETICA INTRODUCIONDO LA LISTA DESDE EL NAVEGADO CON EL METODO REDUCE

*/

function calcularMediaAritmeticaConREDUCE(ListaConREDUCE) {

const sumaListaConREDUCE = ListaConREDUCE.reduce(
    function    (ValorAcumulado = 0, NuevoElemento)
                {return ValorAcumulado + NuevoElemento;}
);
const promedioListaConREDUCE = sumaListaConREDUCE / ListaConREDUCE.length;

return promedioListaConREDUCE
}