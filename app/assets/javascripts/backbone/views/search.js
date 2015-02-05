App.Views.Search = Backbone.View.extend({
  el: '#search-form',

  events: {
    'click #search-button': 'searchByClick',
    'keypress #search-input': 'searchByEnter'
  },

  currentQuery: '',

  searchByEnter: function(e) { // This function exists to weed out the event object
    console.log(e.which);
    if (e.which === 13) {
      this.search();
    }
  },

  searchByClick: function() { // This function exists to weed out the event object
    this.search();
  },

  search: function(freezeRoute) {
  App.inventoryListView.$el.hide();
  // App.headquarterView.$el.hide();
  App.locationsView.$el.hide();
  App.searchListView.$el.empty();
  App.locationView.$el.hide();

    var query = this.$('#search-input').val();
    if (query === '') {
      return;
    }

    App.searchCollection.fetchSearch(query);
    // App.Views.searchResultsView.loading();
    // App.Collections.movies.fetch({
    //   data: {query: query},
    //   reset: true
    // });
    // this.currentQuery = query;
    console.log(freezeRoute);
    if (!freezeRoute) {
      App.Routers.InventoriesRouter.navigate('search/' + query);
    }
  },

});
