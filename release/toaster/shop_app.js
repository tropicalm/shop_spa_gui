var ShopApp;

ShopApp = (function() {

  function ShopApp() {
    var gui, products, useCase;
    products = [
      {
        name: "Test",
        price: "12"
      }, {
        name: "Abc",
        price: "59"
      }
    ];
    useCase = new ShopUseCase(products);
    gui = new ShopGui();
  }

  return ShopApp;

})();

new ShopApp();
