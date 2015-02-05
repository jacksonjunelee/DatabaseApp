App.Models.Headquarter = Backbone.Model.extend({
  url: '/locations',
  parse:function(response){
    return response[1];
  },
  initialize:function(){
    console.log("headquarter Model created");
    this.fetch();
  }
});
