#<< utils
#<< shop_use_case
#<< api_storage
#<< web_gui
#<< web_glue

class ShopApp
	constructor: ->
		useCase = new ShopUseCase()
		storage = new ApiStorage()
		gui = new WebGui()
		glue = new WebGlue(useCase, gui, storage)

		useCase.showAll()

new ShopApp();