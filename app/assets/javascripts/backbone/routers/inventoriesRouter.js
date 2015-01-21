App.Routers.InventoriesRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'inventories/:id(/)': 'search',
  },

  initialize: function() {
    headquarter = new App.Models.Headquarter();
    headquarter.fetch({success: this.renderHeadquarter});

    App.locationCollection = new App.Collections.LocationCollection();
    App.locationsView = new App.Views.LocationListView({ collection: App.locationCollection });
    App.locationCollection.fetch({reset:true});
  },

  renderHeadquarter: function(){
    headquarterView = new App.Views.HeadquarterView({model: headquarter});
    headquarterView.render();
  },

  // index: function() {
  //   $('#search-input').val('');
  //   App.Views.movieModalView.hide();
  //   App.Collections.movies.reset();
  // },
  //
  // search: function(id) {
  //   $('#search-input').val(query);
  //   App.Views.movieModalView.hide();
  //   App.Views.searchFormView.search();
  // },
  //
  // movieDetail: function(id, query) {
  //   if (query) {
  //     $('#search-input').val(query);
  //     App.Views.searchFormView.search(true);
  //   }
  //   var movie = new App.Models.Movie({ id: id });
  //   movie.fetch({
  //     success: function() {
  //       App.Views.movieModalView.setMovie(movie);
  //       App.Views.movieModalView.show();
  //     }
  //   })
  // }
});
