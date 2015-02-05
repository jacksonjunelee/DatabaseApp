// Due to Association, it can also grab the locations information
App.Collections.InventoriesCollection = Backbone.Collection.extend({
  // url: '/inventories',
  model: App.Models.InventoryModel,
  initialize: function(){
    console.log("inventory collection");
    // this.branch_id = options.branch_id
  },

  fetchInventory: function(location_id) {
    this.fetch({url: 'locations/' + location_id,reset: true})
    App.inventoryListView.render();
    // this.fetch({url: 'inventories/branch/1'});
  },
  parse:function(response){
    var json = response[1];
    json.forEach(function (element,index){
      element.name = response[0].name;
    });
    return json
  }
});
