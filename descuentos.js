/*const PrecioOriginal = 120;
const PorcientoDescuento = 18;
const PorcientoCobrar = 100 - PorcientoDescuento;
const MontoPagar = ((PrecioOriginal * PorcientoCobrar) / 100);

console.log({
    PrecioOriginal,
    PorcientoDescuento,
    PorcientoCobrar,
    MontoPagar
}) */

function MontoPagar (PrecioOriginal, PorcientoDescuento){
    const PorcientoCobrar = 100 - PorcientoDescuento;
    const MontoPagar = ((PrecioOriginal * PorcientoCobrar) / 100);
    return (`El precio original de este producto es ${PrecioOriginal} pesos, con un descuento del ${PorcientoDescuento}%, El Monto a Pagas es de ${MontoPagar} Pesos`)
}

function CalcularMontoPagar(){
    const InputPrecio = document.getElementById ("InputPrice");
    const precio = InputPrecio.value;
    const InputDescuento = document.getElementById ("InputDiscount");
    const descuento = InputDescuento.value;
    const Monto = MontoPagar(precio, descuento);
    const MontoPagarDescuento = document.getElementById("MontoPagarDescuento");
    MontoPagarDescuento.innerText = Monto;

    
}

/*
    Crearemos un array con cada uno de nuestros cupones.
    Cambiaremos el input de descuento en HTML por un input de cupones.
    Usaremos un condicional switch para aplicar cierto porcentaje de descuento en nuestros productos dependiendo del cupón que se haya elegido al presionar el botón del formulario.
*/


let cupon10Porciento = "1eE64";
let cupon20Porciento = "744fc";
let cupon30Porciento = "1e28B";

const cupones = [cupon10Porciento, cupon20Porciento, cupon30Porciento];

function CalcularMontoPagarC(){
    const InputPrecioC = document.getElementById ("InputPriceC");
    const precio = InputPrecioC.value;
    const InputDescuentoC = document.getElementById ("InputDiscountC");
    const descuentoValor = InputDescuentoC.value;

    let descuento;

            switch(descuentoValor){
                case cupones [0] : descuento = 10; break;
                case cupones [1] : descuento = 20; break;
                case cupones [2] : descuento = 30; break;
                default : alert(descuentoValor + " no es un cupon Valido")
            }

    const Monto = MontoPagar(precio, descuento);
    const MontoPagarDescuentoC = document.getElementById("MontoPagarDescuentoC");
    MontoPagarDescuentoC.innerText = Monto;    
}
