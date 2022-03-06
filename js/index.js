$(document).ready(function () {

  // Ativa e desativa o Menu hamburguer
  $(".icone-menu").on("click", function (e) {
    e.preventDefault();

    var existe_menu = document.getElementsByClassName("sub-menu");
    console.log(existe_menu.length);
    var menu = "<div class='sub-menu'>" +
      "<a class='sub-menu-item' href='#bateria'>Baterias</a>" +
      "<a class='sub-menu-item' href='#'>Serviços</a>" +
      "<a class='sub-menu-item' href='#comentarios'>Depoimentos</a>" +
      "<a class='sub-menu-item' href='#location'>Localização</a>" +
      "</div>";

    if (existe_menu.length == 0) {
      $(".navg-menu-responsivo").append(menu)
    } else {
      $(".sub-menu").remove();
    }
  });
})