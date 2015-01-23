App.Views.InventoryView = Backbone.View.extend({
  tagName: 'div',
  className: 'inventory',
  initialize:function(){
    console.log("Inventory View Created");
    this.inventoryTemplate = HandlebarsTemplates['inventory'];
    this.render();
  },
  render: function(){
    this.$el.html(this.inventoryTemplate(this.model.toJSON()));
  }


});
