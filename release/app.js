var Product,ShopUseCase;ShopUseCase=function(){function a(a){this.cart=[],this.products=a.map(function(a){return new Product(a.name,a.price)}),this.orders=[]}return a.prototype.addProductToCart=function(a){var b;return b=function(){var c,d,e,f;e=this.products,f=[];for(c=0,d=e.length;c<d;c++)b=e[c],b.name===a&&f.push(b);return f}.call(this),this.cart.push(b[0])},a.prototype.removeProductFromCart=function(a){var b;return this.cart=function(){var c,d,e,f;e=this.cart,f=[];for(c=0,d=e.length;c<d;c++)b=e[c],b.name!==a&&f.push(b);return f}.call(this)},a.prototype.placeOrder=function(){},a}(),Product=function(){function a(a,b){this.name=a,this.price=b}return a}(),typeof module!="undefined"&&module!==null&&(module.exports=ShopUseCase),typeof window!="undefined"&&window!==null&&(window.ShopUseCase=ShopUseCase)