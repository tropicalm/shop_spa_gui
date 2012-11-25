describe 'Shop', ->
	beforeEach ->
		products = [
			{name: "Test", price: "12"},
			{name: "Abc", price: "59"}
		]
		@shop = new ShopUseCase(products)

	it 'should have products', ->
		@shop.should.have.property('products').with.length(2)

	it 'should have empty cart', ->
		@shop.cart.should.have.length(0)

	it 'should allow to add product to cart', ->
		@shop.addProductToCart("Test")
		@shop.cart.should.have.length(1)
		@shop.cart[0].name.should.equal "Test"

	it 'should allow to remove product from cart', ->
		@shop.addProductToCart("Test")
		@shop.cart.should.have.length(1)
		@shop.removeProductFromCart("Test")
		@shop.cart.should.have.length(0)

# Load external files
if require?
	global.chai = require('chai') 
	global.ShopUseCase = require('../src/shop_use_case.coffee')

# Initialize chai
assert = chai.assert
should = chai.should()
expect = chai.expect
