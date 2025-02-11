$(document).ready(function () {
  $(document).on("click", ".navg-menu-responsivo", function (e) {
    e.stopPropagation();
    $(this).find(".sub-menu").toggleClass("hidden");
  });

  $(document).on("click", function (e) {
    if (!$(this).closest(".navg-menu-responsivo").length) {
      $(".navg-menu-responsivo").find(".sub-menu").addClass("hidden");
    }
  });
});
