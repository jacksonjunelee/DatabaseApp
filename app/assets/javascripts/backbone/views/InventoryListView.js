App.Views.InventoryListView = Backbone.View.extend({
  el: "#main-list",
  initialize: function(){
    console.log("Inventory list rendered");
    // this.listenTo(this.collection, 'add', this.render,this);
    this.listenTo(this.collection, 'reset', this.render,this);
  },
  render:function(){
    // this.$el.html$('<section>').attr("id","inventory-list").appendTo($('body'))
    this.collection.each(this.renderInventory, this);
  },
  renderInventory:function(inventory){
    var InventoryView = new App.Views.InventoryView({model: inventory});
    this.$el.append(InventoryView.$el);
  }

});
