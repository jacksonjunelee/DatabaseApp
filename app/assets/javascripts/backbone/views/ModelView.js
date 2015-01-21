App.Views.LocationView = Backbone.View.extend({
  tagName: 'div',
  className: 'location',
  events:{
    'click .showInventory': 'grabListInventory'
  },
  initialize:function(){
    console.log("One VIew Created");
    this.locationTemplate = HandlebarsTemplates['location'];
    this.render();
  },
  render: function(){
    this.$el.html(this.locationTemplate(this.model.toJSON()));
  },
  grabListInventory:function(){
    $('#inventory-list').empty();
    this.inventoryCollection = new App.Collections.InventoriesCollection();
    this.inventoryCollection.fetch({success: this.renderListInventory});
  },
  renderListInventory:function(collection){
    this.inventoryListView = new App.Views.InventoryListView({collection: collection});
    this.inventoryListView.render();

  }

});
