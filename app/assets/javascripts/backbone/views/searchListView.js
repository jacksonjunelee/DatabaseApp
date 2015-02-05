App.Views.SearchListView = Backbone.View.extend({
  tagName: 'div',
  className: 'search-list',
  initialize: function(){
    console.log("Search list rendered");
    this.listenTo(this.collection, 'reset', this.render,this);
  },
  render:function(){
    this.$el.html($('<h1>').text("Search Results:"));
    // this.$el.html$('<section>').attr("id","inventory-list").appendTo($('body'))
    this.collection.each(this.renderSearch, this);
  },
  renderSearch:function(model){
    var search = new App.Views.SearchView({model: model})
    this.$el.append(search.$el).appendTo('body');
  }


});
