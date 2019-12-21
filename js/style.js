$("li.menu-button").click(function() {
    $(".overlay").addClass("overlay-open");
});
$(".overlay-close").click(function() {
  $(".overlay").removeClass("overlay-open");
});
