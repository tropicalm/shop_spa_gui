class ShopUseCase
	constructor: ->
		@cart = {}
		@products = []
		@orders = []

	addProductToCart: (product) ->

	removeProductFromCart: (product) ->

	placeOrder: ->

module.exports = ShopUseCase if module?
window.ShopUseCase = ShopUseCase if window?