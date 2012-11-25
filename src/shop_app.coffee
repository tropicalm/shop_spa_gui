#<< shop_use_case
#<< shop_gui

class ShopApp
	constructor: ->
		products = [
			{name: "Test", price: "12"},
			{name: "Abc", price: "59"}
		]
		useCase = new ShopUseCase(products)
		gui = new ShopGui()

new ShopApp();