App.Collections.InventoriesCollection = Backbone.Collection.extend({
  // model: App.Models.InventoryModel
  url: "/inventories/branch",
  initialize: function(){
    console.log("inventory collection");


  },

  fetchInventory: function() {

    // this.fetch({url: 'inventories/'+ this.branch_id + '/branch'})
    // this.fetch({url: 'inventories/1/branch'})
  }
  // parse: function(response){
  //   return response[0];
  // }


});
