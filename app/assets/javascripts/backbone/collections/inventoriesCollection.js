// Due to Association, it can also grab the locations information
App.Collections.InventoriesCollection = Backbone.Collection.extend({
  // url: '/inventories',
  model: App.Models.InventoryModel,
  initialize: function(){
    console.log("inventory collection");
    // this.branch_id = options.branch_id
  },

  fetchInventory: function(location_id) {
    this.fetch({url: 'locations/' + location_id,reset: true});
    // this.fetch({url: 'inventories/branch/1'});
  },

  parse:function(response){
    var json = response[1];
    json.forEach(function (element,index){
      element.name = response[0].name;
      element.image_url = response[2][index];
    });

    if (response[3] !== null) {
      var addImage = response[3];
      addImage.forEach(function (element,index){
        element.image_url = response[4][index];
        element.place = "Headquarters";
        response[1].push(element);
      });
    }

    return json;
  }
});
