App.Routers.InventoriesRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search/:query': 'search',
    'movies/:id(/:query)': 'movieDetail'
  },

  initialize: function() {
    console.log("moo")
  },

  index: function() {
    $('#search-input').val('');
    App.Views.movieModalView.hide();
    App.Collections.movies.reset();
  },

  search: function(query) {
    $('#search-input').val(query);
    App.Views.movieModalView.hide();
    App.Views.searchFormView.search();
  },

  movieDetail: function(id, query) {
    if (query) {
      $('#search-input').val(query);
      App.Views.searchFormView.search(true);
    }
    var movie = new App.Models.Movie({ id: id });
    movie.fetch({
      success: function() {
        App.Views.movieModalView.setMovie(movie);
        App.Views.movieModalView.show();
      }
    })
  }
});
