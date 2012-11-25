var WebGui;

WebGui = (function() {

  function WebGui() {
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

  WebGui.prototype.showProducts = function(products) {
    return console.log(products);
  };

  return WebGui;

})();
