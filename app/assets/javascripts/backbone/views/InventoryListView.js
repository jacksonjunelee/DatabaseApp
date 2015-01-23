App.Views.InventoryListView = Backbone.View.extend({
  el: "#inventory-list",
  initialize: function(){
    console.log("Inventory list rendered");
    this.listenTo(this.collection, 'reset', this.render,this);
  },
  render:function(){
    this.$el.empty();
    this.collection.each(this.renderInventory, this);
  },
  renderInventory:function(inventory){
    var InventoryView = new App.Views.InventoryView({model: inventory});
    this.$el.append(InventoryView.$el);
  }


});
