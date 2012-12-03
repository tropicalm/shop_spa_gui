class WebGui
	constructor: ->
		$ =>
			# set background
			$.vegas(src: 'img/cookies.jpg')
			$.vegas('overlay', src:'lib/jquery.vegas/overlays/06.png')
			# unroll menu
			$(".menu-title").on "click", (e) ->
	    		$(".menu-box").hide()
	    		$(this).next().show()
	    	# show prducts from category
	    	$("#category-box").on "click", "a.category-link", (e) =>
	    		id = $(e.currentTarget).data('id')
	    		@categoryClicked(id)
	    	# show product
	    	$("#product-box").on "click", "a.product-link", (e) =>
	    		id = $(e.currentTarget).data('id')
	    		@productClicked(id)
	    	# add to cart
	    	$("#product-modal").on "click", "button.add-to-cart", (e) =>
	    		product_id = $(e.currentTarget).data('product-id')
	    		console.log product_id
	    		@addToCartClicked(product_id)
	    		$('#product-modal').modal('hide')
	    	# remove from cart
	    	$("#cart-box").on "click", "a.product-link", (e) =>
	    		id = $(e.currentTarget).data('id')
	    		@removeFromCartClicked(id)
	    	# order products
	    	$("#cart-box").on "click", "a.order-link", (e) =>
	    		@parseTemplate "#order-template", "#order-modal", {}
	    		$('#order-modal').modal('show')
	    	# confirm order
	    	$("#order-modal").on "submit", "form.order-form", =>
	    		@orderClicked()
	    		false

	showProducts: (products) ->
		$ =>
			context = { products: products }
			@parseTemplate "#products-list-template", "#product-box", context
	showCategories: (categories) ->
		$ =>
			context = { categories: categories }
			@parseTemplate "#category-template", "#category-box", context
	showProduct: (product) ->
		@parseTemplate "#product-template", "#product-modal", product
		$('#product-modal').modal('show')
	showCart: (cart) ->
		$(".menu-box").hide()
		$("#cart-box").show()
		@parseTemplate "#cart-template", "#cart-box", cart
	showOrderConfirmation: ->
		$("#cart-box").hide()
		@parseTemplate "#order-confirmation-template", "#order-modal", {}
		
	categoryClicked: (id) ->
	productClicked: (id) ->
	addToCartClicked: (product_id) ->
	removeFromCartClicked: (product_id) ->
	orderClicked: ->

	# get source from source_element, put context and parse to html_element 
	parseTemplate: (source_element, html_element, context) ->
		source = $(source_element).html()
		template = Handlebars.compile(source)
		html = template(context)
		$(html_element).html(html)