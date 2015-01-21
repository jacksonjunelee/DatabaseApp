App.Collections.InventoriesCollection = Backbone.Collection.extend({
  // model: App.Models.InventoryModel,
  // url: '/locations/' + this.model.id,
  initialize: function(){
    console.log("inventory collection");
    console.log(this.model);
  }
  // parse: function(response){
  //   return response[0];
  // }


});
