var Product, ShopUseCase;

ShopUseCase = (function() {

  function ShopUseCase(products) {
    this.cart = [];
    this.products = products.map(function(product) {
      return new Product(product.name, product.price);
    });
    this.orders = [];
  }

  ShopUseCase.prototype.addProductToCart = function(name) {
    var product;
    product = (function() {
      var _i, _len, _ref, _results;
      _ref = this.products;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        product = _ref[_i];
        if (product.name === name) {
          _results.push(product);
        }
      }
      return _results;
    }).call(this);
    return this.cart.push(product[0]);
  };

  ShopUseCase.prototype.removeProductFromCart = function(name) {
    var product;
    return this.cart = (function() {
      var _i, _len, _ref, _results;
      _ref = this.cart;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        product = _ref[_i];
        if (product.name !== name) {
          _results.push(product);
        }
      }
      return _results;
    }).call(this);
  };

  ShopUseCase.prototype.placeOrder = function() {};

  return ShopUseCase;

})();

Product = (function() {

  function Product(name, price) {
    this.name = name;
    this.price = price;
  }

  return Product;

})();

if (typeof module !== "undefined" && module !== null) {
  module.exports = ShopUseCase;
}

if (typeof window !== "undefined" && window !== null) {
  window.ShopUseCase = ShopUseCase;
}
