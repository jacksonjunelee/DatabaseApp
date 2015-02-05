App.Collections.HistoriesCollection = Backbone.Collection.extend({
  url: '/histories',
  model: App.Models.HistoryModel,
  initialize: function(){
    console.log("history collection");
  },
});
