App.Models.Headquarter = Backbone.Model.extend({
  url: '/locations',
  parse:function(response){
    return response[1];
    // response.address = response[1][0].address;
    // response.city= response[1][0].city;
    // response.id= response[1][0].id;
    // response.name= response[1][0].name;
    // response.state= response[1][0].state;
    // debugger;
    // return response;
  },
  initialize:function(){
    console.log("headquarter Model created");
    this.fetch();
  }
});
