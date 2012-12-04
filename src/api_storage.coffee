class ApiStorage
	constructor: ->
		@products = []
		@categories = []
		@cart = []
	loadInitialData: ->
		$ =>
			$.ajax '/api'
				dataType: 'json'
				success: (response) => 
					@setData(response)
					@dataLoaded()
	setData: (data) ->
		@products = data.products.map (product) ->
			product.price = parseFloat product.price
			product
		@categories = data.categories
		@cart = data.cart

	getInitialData: ->
		categories: @categories
		products: @products
		cart: @cart

	addProductToCart: (product_id) ->
		$.ajax '/api/add_product_to_cart'
			beforeSend: (xhr) -> 
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
			type: 'post'
			dataType: 'json'
			data: {product_id: product_id}

	removeProductFromCart: (product_id) ->
		$.ajax '/api/remove_product_from_cart'
			beforeSend: (xhr) -> 
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))		
			type: 'post'
			dataType: 'json'
			data: {product_id: product_id}

	placeOrder: (buyer) ->
		$.ajax '/api/place_order'
			beforeSend: (xhr) -> 
				xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))		
			type: 'post'
			dataType: 'json'
			data: 
				first_name: buyer.first_name
				last_name: buyer.last_name
				address: buyer.address

	dataLoaded: ->