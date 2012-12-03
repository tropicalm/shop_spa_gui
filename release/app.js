var Category,LocalStorage,Product,ShopApp,ShopUseCase,WebGlue,WebGui,__hasProp={}.hasOwnProperty,__bind=function(a,b){return function(){return a.apply(b,arguments)}};_.defaults(this,{Before:function(a,b,c){return YouAreDaBomb(a,b).before(c)},BeforeAnyCallback:function(a,b,c){return YouAreDaBomb(a,b).beforeAnyCallback(c)},After:function(a,b,c){return YouAreDaBomb(a,b).after(c)},Around:function(a,b,c){return YouAreDaBomb(a,b).around(c)},AfterAll:function(a,b,c){var d,e,f,g;g=[];for(e=0,f=b.length;e<f;e++)d=b[e],g.push(After(a,d,c));return g},LogAll:function(a){var b,c,d;d=[];for(b in a){if(!__hasProp.call(a,b))continue;c=a[b],_.isFunction(c)?d.push(function(b){return Before(a,b,function(){return console.log("calling: "+b)})}(b)):d.push(void 0)}return d},AutoBind:function(a,b){var c,d,e;e=[];for(c in a)d=a[c],_.isFunction(d)?e.push(function(c){if(c.endsWith("Clicked")&&b[c.remove("Clicked")])return After(a,c,function(a){return b[c.remove("Clicked")](a)})}(c)):e.push(void 0);return e}}),ShopUseCase=function(){function a(){this.addProductToCart=__bind(this.addProductToCart,this),this.cart=[],this.products=[],this.categories=[],this.order=null}return a.prototype.setInitialData=function(a){return this.products=a.products.map(function(a){return new Product(a.name,a.price,a.id,a.category_id,a.description)}),this.categories=a.categories.map(function(a){return new Category(a.name,a.id)})},a.prototype.addProductToCart=function(a){var b;return b=function(){var c,d,e,f;e=this.products,f=[];for(c=0,d=e.length;c<d;c++)b=e[c],b.id===a&&f.push(b);return f}.call(this),this.cart.push(b[0])},a.prototype.removeProductFromCart=function(a){var b;return this.cart=function(){var c,d,e,f;e=this.cart,f=[];for(c=0,d=e.length;c<d;c++)b=e[c],b.id!==a&&f.push(b);return f}.call(this)},a.prototype.getProduct=function(a){var b;return b=this.products.filter(function(b){return b.id===a}),b[0]},a.prototype.getProducts=function(a){return a!=null?this.products.filter(function(b){return b.category_id===a}):this.products},a.prototype.getCart=function(){return{products:this.cart,sum:this.cart.reduce(function(a,b){return a+b.price},0)}},a.prototype.placeOrder=function(){return this.order=this.cart,this.cart=[]},a.prototype.showAll=function(){},a}(),Product=function(){function a(a,b,c,d,e){this.name=a,this.price=b,this.id=c,this.category_id=d,this.description=e}return a}(),Category=function(){function a(a,b){this.name=a,this.id=b}return a}(),typeof module!="undefined"&&module!==null&&(module.exports=ShopUseCase),typeof window!="undefined"&&window!==null&&(window.ShopUseCase=ShopUseCase),LocalStorage=function(){function a(){this.products=[],this.categories=[]}return a.prototype.loadInitialData=function(){return this.products=[{name:"Test",price:12,id:1,category_id:1,description:"test"},{name:"Test test",price:32,id:2,category_id:1,description:"test"},{name:"Abc",price:59,id:3,category_id:2,description:"test"}],this.categories=[{name:"Bakes",id:1},{name:"Cakes",id:2},{name:"Fake+makes",id:3}]},a.prototype.getInitialData=function(){return{categories:this.categories,products:this.products}},a}(),WebGui=function(){function a(){var a=this;$(function(){return $.vegas({src:"img/cookies.jpg"}),$.vegas("overlay",{src:"lib/jquery.vegas/overlays/06.png"}),$(".menu-title").on("click",function(a){return $(".menu-box").hide(),$(this).next().show()}),$("#category-box").on("click","a.category-link",function(b){var c;return c=$(b.currentTarget).data("id"),a.categoryClicked(c)}),$("#product-box").on("click","a.product-link",function(b){var c;return c=$(b.currentTarget).data("id"),a.productClicked(c)}),$("#product-modal").on("click","button.add-to-cart",function(b){var c;return c=$(b.currentTarget).data("product-id"),console.log(c),a.addToCartClicked(c),$("#product-modal").modal("hide")}),$("#cart-box").on("click","a.product-link",function(b){var c;return c=$(b.currentTarget).data("id"),a.removeFromCartClicked(c)}),$("#cart-box").on("click","a.order-link",function(b){return a.parseTemplate("#order-template","#order-modal",{}),$("#order-modal").modal("show")}),$("#order-modal").on("submit","form.order-form",function(){return a.orderClicked(),!1})})}return a.prototype.showProducts=function(a){var b=this;return $(function(){var c;return c={products:a},b.parseTemplate("#products-list-template","#product-box",c)})},a.prototype.showCategories=function(a){var b=this;return $(function(){var c;return c={categories:a},b.parseTemplate("#category-template","#category-box",c)})},a.prototype.showProduct=function(a){return this.parseTemplate("#product-template","#product-modal",a),$("#product-modal").modal("show")},a.prototype.showCart=function(a){return $(".menu-box").hide(),$("#cart-box").show(),this.parseTemplate("#cart-template","#cart-box",a)},a.prototype.showOrderConfirmation=function(){return $("#cart-box").hide(),this.parseTemplate("#order-confirmation-template","#order-modal",{})},a.prototype.categoryClicked=function(a){},a.prototype.productClicked=function(a){},a.prototype.addToCartClicked=function(a){},a.prototype.removeFromCartClicked=function(a){},a.prototype.orderClicked=function(){},a.prototype.parseTemplate=function(a,b,c){var d,e,f;return e=$(a).html(),f=Handlebars.compile(e),d=f(c),$(b).html(d)},a}(),WebGlue=function(){function a(a,b,c){var d=this;this.useCase=a,this.gui=b,this.storage=c,Before(this.useCase,"showAll",function(){return d.storage.loadInitialData()}),After(this.storage,"loadInitialData",function(){return d.useCase.setInitialData(d.storage.getInitialData())}),After(this.useCase,"setInitialData",function(){return d.gui.showProducts(d.useCase.products)}),After(this.useCase,"setInitialData",function(){return d.gui.showCategories(d.useCase.categories)}),After(this.gui,"categoryClicked",function(a){return d.gui.showProducts(d.useCase.getProducts(a))}),After(this.gui,"productClicked",function(a){return d.gui.showProduct(d.useCase.getProduct(a))}),After(this.gui,"addToCartClicked",function(a){return d.useCase.addProductToCart(a)}),After(this.useCase,"addProductToCart",function(){return d.gui.showCart(d.useCase.getCart())}),After(this.gui,"removeFromCartClicked",function(a){return d.useCase.removeProductFromCart(a)}),After(this.useCase,"removeProductFromCart",function(){return d.gui.showCart(d.useCase.getCart())}),After(this.gui,"orderClicked",function(){return d.useCase.placeOrder()}),After(this.useCase,"placeOrder",function(){return d.gui.showCart(d.useCase.getCart())}),After(this.useCase,"placeOrder",function(){return d.gui.showOrderConfirmation()})}return a}(),ShopApp=function(){function a(){var a,b,c,d;d=new ShopUseCase,c=new LocalStorage,b=new WebGui,a=new WebGlue(d,b,c),d.showAll()}return a}(),new ShopApp