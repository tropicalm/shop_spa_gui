class ShopUseCase
	constructor: ->
		@cart = []
		@products = []
		@orders = []

	addProducts: (products) ->
		@products = products.map (product) -> 
			new Product(product.name, product.price)

	addProductToCart: (name) ->
		product = (product for product in @products when product.name is name)
		@cart.push(product[0])

	removeProductFromCart: (name) ->
		@cart = (product for product in @cart when product.name isnt name)

	placeOrder: ->

	showAll: ->

class Product
	constructor: (name, price) ->
		@name = name
		@price = price

module.exports = ShopUseCase if module?
window.ShopUseCase = ShopUseCase if window?