App.Collections.InventoriesCollection = Backbone.Collection.extend({
  // url: '/inventories',
  model: App.Models.InventoryModel,
  // url: "/inventories/branch",
  initialize: function(options){
    console.log("inventory collection");
    this.branch_id = options.branch_id


  },

  fetchInventory: function() {
    this.fetch({url: 'inventories/branch/' + this.branch_id})
    // this.fetch({url: 'inventories/branch/1'});
  }
  // parse: function(response){
  //   return response[0];
  // }


});
