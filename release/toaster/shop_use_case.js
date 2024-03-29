var Buyer, Category, Product, ShopUseCase,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

ShopUseCase = (function() {

  function ShopUseCase() {
    this.addProductToCart = __bind(this.addProductToCart, this);
    this.cart = [];
    this.products = [];
    this.categories = [];
    this.order = null;
    this.buyer = null;
  }

  ShopUseCase.prototype.setInitialData = function(data) {
    var _this = this;
    this.products = data.products.map(function(product) {
      return new Product(product.name, product.price, product.id, product.category_id, product.description);
    });
    this.categories = data.categories.map(function(category) {
      return new Category(category.name, category.id);
    });
    return this.cart = data.cart.map(function(product_id) {
      var product;
      product = _this.products.filter(function(product) {
        return product.id === product_id;
      });
      return product[0];
    });
  };

  ShopUseCase.prototype.addProductToCart = function(id) {
    var product;
    product = (function() {
      var _i, _len, _ref, _results;
      _ref = this.products;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        product = _ref[_i];
        if (product.id === id) {
          _results.push(product);
        }
      }
      return _results;
    }).call(this);
    return this.cart.push(product[0]);
  };

  ShopUseCase.prototype.removeProductFromCart = function(id) {
    var product;
    return this.cart = (function() {
      var _i, _len, _ref, _results;
      _ref = this.cart;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        product = _ref[_i];
        if (product.id !== id) {
          _results.push(product);
        }
      }
      return _results;
    }).call(this);
  };

  ShopUseCase.prototype.getProduct = function(product_id) {
    var product;
    product = this.products.filter(function(product) {
      return product.id === product_id;
    });
    return product[0];
  };

  ShopUseCase.prototype.getProducts = function(category_id) {
    if (category_id != null) {
      return this.products.filter(function(product) {
        return product.category_id === category_id;
      });
    } else {
      return this.products;
    }
  };

  ShopUseCase.prototype.findProducts = function(name) {
    var pattern;
    pattern = new RegExp(name, 'i');
    return this.products.filter(function(product) {
      return product.name.match(pattern);
    });
  };

  ShopUseCase.prototype.getCart = function() {
    return {
      products: this.cart,
      sum: this.cart.reduce((function(sum, product) {
        return sum + product.price;
      }), 0)
    };
  };

  ShopUseCase.prototype.placeOrder = function(buyer) {
    this.buyer = new Buyer(buyer.first_name, buyer.last_name, buyer.address);
    this.order = this.cart;
    return this.cart = [];
  };

  ShopUseCase.prototype.showAll = function() {};

  return ShopUseCase;

})();

Product = (function() {

  function Product(name, price, id, category_id, description) {
    this.name = name;
    this.price = price;
    this.id = id;
    this.category_id = category_id;
    this.description = description;
  }

  return Product;

})();

Category = (function() {

  function Category(name, id) {
    this.name = name;
    this.id = id;
  }

  return Category;

})();

Buyer = (function() {

  function Buyer(first_name, last_name, address) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.address = address;
  }

  return Buyer;

})();

if (typeof module !== "undefined" && module !== null) {
  module.exports = ShopUseCase;
}

if (typeof window !== "undefined" && window !== null) {
  window.ShopUseCase = ShopUseCase;
}
