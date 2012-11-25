class LocalStorage
	constructor: ->
		@products = []
		@categories = []

	getData: ->
		@products = [
			{name: "Test", price: "12"},
			{name: "Abc", price: "59"}
		]
		@categories = [
			{name: "Bakes"},
			{name: "Cakes"}
		]

	getProducts: ->
		@products