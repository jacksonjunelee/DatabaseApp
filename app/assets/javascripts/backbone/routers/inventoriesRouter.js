App.Routers.InventoriesRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'inventories/branch/:branch_id': 'branch',
  },

  initialize: function() {
    headquarter = new App.Models.Headquarter();
    headquarter.fetch({success: this.renderHeadquarter});

    App.locationCollection = new App.Collections.LocationCollection();
    App.locationCollection.fetch({reset:true});
    App.productCollection = new App.Collections.ProductCollection();
    App.locationsView = new App.Views.LocationListView({ collection: App.locationCollection });
    App.locationView= new App.Views.LocationView({model: new App.Models.LocationModel()});

    App.InventoriesCollection = new App.Collections.InventoriesCollection();
    App.inventoryListView = new App.Views.InventoryListView({collection: App.InventoriesCollection});
  },

  renderHeadquarter: function(){
    headquarterView = new App.Views.HeadquarterView({model: headquarter});
    headquarterView.render();
  },

  branch: function(branch_id) {
    console.log(branch_id);
  }
});
