$(document).ready(function () {
  // Menu responsivo
  $(document).on("click", ".navg-menu-responsivo", function (e) {
    e.stopPropagation();
    $(this).find(".sub-menu").toggleClass("hidden");
  });

  $(document).on("click", function (e) {
    if (!$(this).closest(".navg-menu-responsivo").length) {
      $(".navg-menu-responsivo").find(".sub-menu").addClass("hidden");
    }
  });

  // Botão flutuante do WhatsApp
  const bannerButton = $(".container-banner a");
  const whatsappFloat = $(".whatsapp-float");
  
  function toggleWhatsappButton() {
    const bannerButtonTop = bannerButton.offset().top;
    const bannerButtonBottom = bannerButtonTop + bannerButton.outerHeight();
    const scrollPosition = $(window).scrollTop();
    const windowHeight = $(window).height();
    const windowBottom = scrollPosition + windowHeight;
    
    // Verifica se o botão do banner está visível na tela
    const isBannerButtonVisible = (
      (bannerButtonTop >= scrollPosition && bannerButtonTop <= windowBottom) || 
      (bannerButtonBottom >= scrollPosition && bannerButtonBottom <= windowBottom) ||
      (bannerButtonTop <= scrollPosition && bannerButtonBottom >= windowBottom)
    );
    
    // Mostra o botão flutuante apenas quando o botão do banner NÃO estiver visível
    if (!isBannerButtonVisible) {
      whatsappFloat.addClass("visible");
    } else {
      whatsappFloat.removeClass("visible");
    }
  }
  
  // Verifica a posição inicial
  toggleWhatsappButton();
  
  // Verifica a posição ao rolar a página
  $(window).scroll(toggleWhatsappButton);
  
  // Verifica a posição ao redimensionar a janela
  $(window).resize(toggleWhatsappButton);
});
