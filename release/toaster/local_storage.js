var LocalStorage;

LocalStorage = (function() {

  function LocalStorage() {
    this.products = [];
    this.categories = [];
  }

  LocalStorage.prototype.getData = function() {
    this.products = [
      {
        name: "Test",
        price: "12"
      }, {
        name: "Abc",
        price: "59"
      }
    ];
    return this.categories = [
      {
        name: "Bakes"
      }, {
        name: "Cakes"
      }
    ];
  };

  LocalStorage.prototype.getProducts = function() {
    return this.products;
  };

  return LocalStorage;

})();
