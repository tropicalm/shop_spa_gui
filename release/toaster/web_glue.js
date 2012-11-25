var WebGlue;

WebGlue = (function() {

  function WebGlue(useCase, gui, storage) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    this.storage = storage;
    Before(this.useCase, 'showAll', function() {
      return _this.storage.getData();
    });
    After(this.storage, 'getData', function() {
      return _this.useCase.addProducts(_this.storage.getProducts());
    });
    After(this.storage, 'getData', function() {
      return _this.gui.showProducts(_this.storage.getProducts());
    });
  }

  return WebGlue;

})();
