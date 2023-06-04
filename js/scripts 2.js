function calcularTotal(){

    var selecto = document.getElementById("opciones");

    var cantidad = document.getElementById("cantidad").Value;

    var opciones = selecto.options[selecto.selectedIndex].Value;

    var total2 = (200 - (200*opciones/100))*cantidad

    document.getElementById("total").textContent = "Total a Pagar:$" + total2;
    }

