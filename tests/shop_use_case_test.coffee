describe 'Shop', ->
	beforeEach ->
		data =
			products: [
				{name: "Test", price: 12, id:1, category_id: 1, description: "test"},
				{name: "Test test", price: 32, id: 2, category_id: 1, description: "test"},
				{name: "Abc", price: 59, id: 3, category_id: 2, description: "test"}
			]
			categories: [
				{name: "Bakes", id: 1},
				{name: "Cakes", id: 2},
				{name: "Fake+makes", id: 3}
			]
		@shop = new ShopUseCase()
		@shop.setInitialData(data)

	it 'should have products', ->
		@shop.should.have.property('products').with.length(3)

	it 'should have categories', ->
		@shop.should.have.property('categories').with.length(3)

	it 'should have empty cart', ->
		@shop.should.have.property('cart').with.length(0)

	it 'should have empty order', ->
		@shop.should.have.property('order').equal null

	describe 'should allow to manage cart items', ->
		beforeEach -> @shop.addProductToCart(1)

		it 'add product to cart', ->
			@shop.cart.should.have.length(1)
			@shop.addProductToCart(2)
			@shop.cart.should.have.length(2)
			@shop.cart[1].name.should.equal "Test test"

		it 'remove product from cart', ->
			@shop.removeProductFromCart(1)
			@shop.cart.should.have.length(0)

		it 'get cart elements', ->
			@shop.getCart().products.length.should.equal 1

		it 'get cart sum', ->
			@shop.getCart().sum.should.equal 12

	describe 'should allow to get products', ->
		it 'single product by id', ->
			@shop.getProduct(1).name.should.equal "Test"
		it 'products by category id', ->
			@shop.getProducts(1).length.should.equal 2
		it 'all products', ->
			@shop.getProducts().length.should.equal 3

	it 'should allow to place order', ->
		@shop.addProductToCart(1)
		@shop.placeOrder()
		@shop.order.length.should.equal 1
		@shop.cart.length.should.equal 0

# Load external files
if require?
	global.chai = require('chai') 
	global.ShopUseCase = require('../src/shop_use_case.coffee')

# Initialize chai
assert = chai.assert
should = chai.should()
expect = chai.expect
