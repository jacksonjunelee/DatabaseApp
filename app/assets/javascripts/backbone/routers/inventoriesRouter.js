App.Routers.InventoriesRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search/:query': 'search',
    'inventories/branch/:branch_id': 'branch',
    // 'search/:query': 'search',
  },

  initialize: function() {
    $('<div>').attr('id','search-form').appendTo('body'); $('<input>').attr('id','search-input').attr('type','text').attr('name','search').attr('placeholder','Search').appendTo('div#search-form');
    $('<button>').attr('id','search-button').text('Search').appendTo('div#search-form');

    $('<section>').attr('id','headquarter-section').appendTo('body');
    $('<section>').attr('id','location-list').appendTo('body');
    $('<section>').attr('id','main-list').appendTo('body');
    App.headquarter = new App.Models.Headquarter();
    App.headquarter.fetch({success: this.renderHeadquarter});

    App.locationCollection = new App.Collections.LocationCollection();
    App.locationCollection.fetch({reset:true});
    App.productCollection = new App.Collections.ProductCollection();

    App.locationView= new App.Views.LocationView({model: new App.Models.LocationModel()});
    App.locationsView = new App.Views.LocationListView({ collection: App.locationCollection });

    App.InventoriesCollection = new App.Collections.InventoriesCollection();
    App.inventoryListView = new App.Views.InventoryListView({collection: App.InventoriesCollection});

    App.searchCollection = new App.Collections.SearchCollection();
    App.Search = new App.Views.Search();
    App.searchListView = new App.Views.SearchListView({collection: App.searchCollection});

    App.HistoriesCollection = new App.Collections.HistoriesCollection();
    App.HistoryListView = new App.Views.HistoryListView({collection: App.HistoriesCollection});

  },

  renderHeadquarter: function(){
    App.headquarterView = new App.Views.HeadquarterView({model: App.headquarter});
    App.headquarterView.render();
  },

  branch: function(branch_id) {
    console.log(branch_id);
  },
  index: function(){
    // App.locationCollection.reset();
    // $('<h1>').text("MOO").appendTo('body')

  },

  search: function(query){
    $('#search-input').val(query);
    App.Search.search();
  }

});


// routes: {
//   '': 'index',
//   'search/:query': 'search',
//   'movies/:id(/:query)': 'movieDetail'
// },
//
// initialize: function() {
//   App.Collections.movies = new App.Collections.MoviesCollection();
//   App.Views.searchResultsView = new App.Views.MoviesCollectionView({
//     collection: App.Collections.movies
//   });
//   App.Views.searchFormView = new App.Views.SearchFormView({
//     collection: App.Collections.movies
//   });
//   App.Views.movieModalView = new App.Views.MovieModalView();
// },
//
// index: function() {
//   $('#search-input').val('');
//   App.Views.movieModalView.hide();
//   App.Collections.movies.reset();
// },
//
// search: function(query) {
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
