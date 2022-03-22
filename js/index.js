$(document).ready(function () {
  var existe_menu = document.getElementsByClassName("sub-menu");

  // Ativa e desativa o Menu hamburguer
  $(".icone-menu").on("click", function (e) {
    e.preventDefault();

    console.log(existe_menu.length);
    var menu = "<div class='sub-menu'>" +
      "<a class='sub-menu-item' href='#bateria'>Baterias</a>" +
      "<a class='sub-menu-item' href='#services'>Serviços</a>" +
      "<a class='sub-menu-item' href='#comentarios'>Depoimentos</a>" +
      "<a class='sub-menu-item' href='#location'>Localização</a>" +
      "</div>";

    if (existe_menu.length == 0) {
      $(".navg-menu-responsivo").append(menu)
    } else {
      $(".sub-menu").remove();
    }
  });

  $(document).on("click", function (e) {

    console.log(e.target);
    console.log($(e.target).hasClass("sub-menu-item"));

    if ($(e.target).hasClass(".sub-menu-item")) {
      console.log("submenu");
      console.log(e.target);
      
    }
  })
})