class WebGlue
	constructor: (@useCase, @gui, @storage) ->
		#AutoBind(@gui, @useCase)
		Before(@useCase, 'showAll', => @storage.getData())
		After(@storage, 'getData', => @useCase.addProducts(@storage.getProducts()))
		After(@storage, 'getData', => @gui.showProducts(@storage.getProducts()))