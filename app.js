// Cierra el nav-bar cuando se hace click

$(".nav-link").on("click",function() {
    $(".navbar-collapse").collapse("hide");
  });

// Modificar cartas

$(".ref-button, .desc-button").on("click", function(){
  //Cambia el texto del boton
  var footerSelected = $(this).parent();
  footerSelected.children(".ref-button").toggle();
  footerSelected.children(".desc-button").toggle();
  // Cambia el texto dentro de la carta seleccionada
  var cardSelected =  $(this).parent().prev();
  cardSelected.children(".referencia-trabajo").toggle("swing");
  cardSelected.children(".descrip-trabajo").toggle("swing");
})