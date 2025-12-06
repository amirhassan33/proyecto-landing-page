function cantidadentradas() {
    var cantidad = Number(document.getElementById("cantidad").value);
    var entrada = document.getElementById("elegir").value;

if (cantidad>=1 && entrada==document.getElementById("junior").value) {

  var y = (200*cantidad)*0.85;
  
} else if (cantidad>=1 && entrada==document.getElementById("trainee").value) {

  var y = (200*cantidad)*0.5;

} else if (cantidad>=1 && entrada==document.getElementById("estudiante").value){

  var y = (200*cantidad)*0.2;

} else if (cantidad<1){

  var y = "";

}

    document.getElementById("pagar").innerHTML = y;

    }

    function Borrar() {

      var y = "";

      document.getElementById("pagar").innerHTML = y;

    }