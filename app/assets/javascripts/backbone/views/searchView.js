App.Views.SearchView = Backbone.View.extend({
  tagName: 'div',
  id: 'searchResults',
  initialize: function(){
    this.searchTemplate = HandlebarsTemplates['search'];
    this.render();
  },
  render: function(){
    this.$el.html(this.searchTemplate(this.model.toJSON()));
  }


});
