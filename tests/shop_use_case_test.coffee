if require?
	global.chai = require('chai') 
	global.ShopUseCase = require('../src/shop_use_case.coffee')

assert = chai.assert
should = chai.should()
expect = chai.expect