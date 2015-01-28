App.Collections.ProductCollection = Backbone.Collection.extend({
  url: '/products',
  model: App.Models.ProductModel,
  initialize: function(){
    console.log("product collection");
  }


});
