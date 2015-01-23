App.Collections.InventoriesCollection = Backbone.Collection.extend({
  url: '/inventories',
  model: App.Models.InventoryModel,
  // url: "/inventories/branch",
  initialize: function(){
    console.log("inventory collection");


  },

  fetchInventory: function() {

    // this.fetch({url: 'inventories/'+ this.branch_id + '/branch'})
    this.fetch({url: 'inventories/branch/1'});
  }
  // parse: function(response){
  //   return response[0];
  // }


});
