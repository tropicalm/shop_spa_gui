class ShopGui
	constructor: ->
		$.vegas(src: 'img/cookies.jpg')
		$.vegas('overlay', src:'lib/jquery.vegas/overlays/06.png')
		
		$(".menu-title").on "click", (e) ->
    		$(".menu-box").hide()
    		$(this).next().show()
