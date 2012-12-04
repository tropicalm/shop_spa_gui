class ShopUseCase
	constructor: ->
		@cart = []
		@products = []
		@categories = []
		@order = null
		@buyer = null

	setInitialData: (data) ->
		@products = data.products.map (product) -> 
			new Product(product.name, product.price, product.id, product.category_id, product.description)
		@categories = data.categories.map (category) -> 
			new Category(category.name, category.id)
		@cart = data.cart.map (product_id) =>
			product = @products.filter (product) -> product.id == product_id
			product[0]

	addProductToCart: (id) =>
		product = (product for product in @products when product.id is id)
		@cart.push(product[0])

	removeProductFromCart: (id) ->
		@cart = (product for product in @cart when product.id isnt id)

	getProduct: (product_id) ->
		product = @products.filter (product) -> product.id == product_id
		product[0]

	getProducts: (category_id) ->
		if category_id?
			@products.filter (product) -> product.category_id == category_id
		else 
			@products

	findProducts: (name) ->
		pattern = new RegExp(name, 'i');
		prod = @products.filter (product) -> product.name.match pattern
		
	getCart: ->
		products: @cart
		sum: @cart.reduce ((sum, product) -> sum + product.price), 0

	placeOrder: (buyer) ->
		@buyer = new Buyer(buyer.first_name, buyer.last_name, buyer.address)
		@order = @cart
		@cart = []
		
	showAll: ->

class Product
	constructor: (@name, @price, @id, @category_id, @description) ->

class Category
	constructor: (@name, @id) ->

class Buyer
	constructor: (@first_name, @last_name, @address) ->

module.exports = ShopUseCase if module?
window.ShopUseCase = ShopUseCase if window?