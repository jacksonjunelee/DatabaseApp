App.Views.LocationListView = Backbone.View.extend({
  el: "#location-list",
  initialize: function(){
    console.log("Location list rendered");
    // this.render();
    this.listenTo(this.collection, 'reset', this.render,this);
    this.listenTo(this.collection, 'add', this.renderLocation,this);
  },
  render:function(){
    this.$el.empty();
    this.collection.each(this.renderLocation, this);
  },
  renderLocation:function(location){
    var locationView = new App.Views.LocationView({model: location});
    locationView.render();
    this.$el.append(locationView.$el);
  }


});


// var noteView = new App.Views.NotePreview({ model: note });
// this.$el.append(noteView.$el);
// }
