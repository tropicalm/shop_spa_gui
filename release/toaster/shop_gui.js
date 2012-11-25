var ShopGui;

ShopGui = (function() {

  function ShopGui() {
    $.vegas({
      src: 'img/cookies.jpg'
    });
    $.vegas('overlay', {
      src: 'lib/jquery.vegas/overlays/06.png'
    });
    $(".menu-title").on("click", function(e) {
      $(".menu-box").hide();
      return $(this).next().show();
    });
  }

  return ShopGui;

})();
