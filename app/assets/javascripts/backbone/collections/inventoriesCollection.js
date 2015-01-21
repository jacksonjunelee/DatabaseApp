App.Collections.InventoriesCollection = Backbone.Collection.extend({
  url: '/inventories',
  initialize: function(){
    console.log("inventory collection");
  }
  // parse: function(response){
  //   return response[0];
  // }


});
