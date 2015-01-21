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
    var id = this.model.attributes.id;
    // App.Routers.InventoriesRouter.navigate('inventories/' + this.model.attributes.id,{trigger: true});
    this.InventoriesCollection = new App.Collections.InventoriesCollection();
    this.InventoriesCollection.add(this.model);
    // App.Collections.InventoriesCollection.fetch({
    //   data: {id: id},
    //   reset: true
    // });
  },
  renderListInventory:function(collection){
    this.inventoryListView = new App.Views.InventoryListView({collection: collection});
    this.inventoryListView.render();

  }

});
