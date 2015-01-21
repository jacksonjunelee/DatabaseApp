App.Collections.InventoriesCollection = Backbone.Collection.extend({
  url: '/inventories/:id',
  initialize: function(){
    console.log("inventory collection");
  }
  // parse: function(response){
  //   return response[0];
  // }


});
