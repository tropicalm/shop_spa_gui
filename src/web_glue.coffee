class WebGlue
	constructor: (@useCase, @gui, @storage) ->
		Before(@useCase, 'showAll', => @storage.loadInitialData())
		After(@storage, 'dataLoaded', => @useCase.setInitialData(@storage.getInitialData()))
		After(@useCase, 'setInitialData', => @gui.showCart(@useCase.getCart()))
		After(@useCase, 'setInitialData', => @gui.showProducts(@useCase.products))
		After(@useCase, 'setInitialData', => @gui.showCategories(@useCase.categories))

		After(@gui, 'categoryClicked', (category_id) => @gui.showProducts(@useCase.getProducts(category_id)))
		After(@gui, 'productClicked', (product_id) => @gui.showProduct(@useCase.getProduct(product_id)))
		After(@gui, 'searchClicked', (name) => @gui.showProducts(@useCase.findProducts(name)))
		
		After(@gui, 'addToCartClicked', (product_id) => @useCase.addProductToCart(product_id))
		After(@useCase, 'addProductToCart', => @gui.showCart(@useCase.getCart()))
		After(@useCase, 'addProductToCart', (product_id) => @storage.addProductToCart(product_id))
		
		After(@gui, 'removeFromCartClicked', (product_id) => @useCase.removeProductFromCart(product_id))
		After(@useCase, 'removeProductFromCart', => @gui.showCart(@useCase.getCart()))
		After(@useCase, 'removeProductFromCart', (product_id) => @storage.removeProductFromCart(product_id))

		After(@gui, 'orderClicked', (buyer) => @useCase.placeOrder(buyer))
		After(@useCase, 'placeOrder', => @gui.showCart(@useCase.getCart()))	
		After(@useCase, 'placeOrder', => @gui.showOrderConfirmation())
		After(@useCase, 'placeOrder', => @storage.placeOrder(@useCase.buyer))