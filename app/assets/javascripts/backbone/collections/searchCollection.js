// Due to Association, it can also grab the locations information
App.Collections.SearchCollection = Backbone.Collection.extend({
  initialize: function(){
    console.log("search collection");
    // this.branch_id = options.branch_id
  },

  fetchSearch: function(query) {
    this.fetch({url: 'products/search/' + query,reset: true})
    // App.searchListView.render();
    // this.fetch({url: 'inventories/branch/1'});
  },
  parse:function(response){
    var json = response[1]
    json.forEach(function (element,index){
      element.product_name = response[0][0].product_name;
      element.name = response[2][index].name;
      element.address = response[2][index].address;
      element.city = response[2][index].city;
      element.state = response[2][index].state;
      element.zip= response[2][index].zip;
    });
    return json
  }
});
