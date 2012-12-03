class LocalStorage
	constructor: ->
		@products = []
		@categories = []

	loadInitialData: ->
		@products = [
			{name: "Test", price: 12, id:1, category_id: 1, description: "test"},
			{name: "Test test", price: 32, id: 2, category_id: 1, description: "test"},
			{name: "Abc", price: 59, id: 3, category_id: 2, description: "test"}
		]
		@categories = [
			{name: "Bakes", id: 1},
			{name: "Cakes", id: 2},
			{name: "Fake+makes", id: 3}
		]

	getInitialData: ->
		categories: @categories
		products: @products