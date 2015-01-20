App.Collections.LocationCollection = Backbone.Collection.extend({
  url: '/locations',
  model: App.Models.LocationModel,
  initialize: function(){
    console.log("location collection");
  },
  parse: function(response){
    return response[0];
  }


});
