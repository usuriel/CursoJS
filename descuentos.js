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