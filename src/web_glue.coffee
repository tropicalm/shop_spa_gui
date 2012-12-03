class WebGlue
	constructor: (@useCase, @gui, @storage) ->
		Before(@useCase, 'showAll', => @storage.loadInitialData())
		After(@storage, 'loadInitialData', => @useCase.setInitialData(@storage.getInitialData()))
		After(@useCase, 'setInitialData', => @gui.showProducts(@useCase.products))
		After(@useCase, 'setInitialData', => @gui.showCategories(@useCase.categories))

		After(@gui, 'categoryClicked', (category_id) => @gui.showProducts(@useCase.getProducts(category_id)))
		After(@gui, 'productClicked', (product_id) => @gui.showProduct(@useCase.getProduct(product_id)))
		
		After(@gui, 'addToCartClicked', (product_id) => @useCase.addProductToCart(product_id))
		After(@useCase, 'addProductToCart', => @gui.showCart(@useCase.getCart()))
		
		After(@gui, 'removeFromCartClicked', (product_id) => @useCase.removeProductFromCart(product_id))
		After(@useCase, 'removeProductFromCart', => @gui.showCart(@useCase.getCart()))

		After(@gui, 'orderClicked', => @useCase.placeOrder())
		After(@useCase, 'placeOrder', => @gui.showCart(@useCase.getCart()))	
		After(@useCase, 'placeOrder', => @gui.showOrderConfirmation())