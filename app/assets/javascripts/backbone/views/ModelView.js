App.Views.LocationView = Backbone.View.extend({
  tagName: 'div',
  className: 'location',
  initialize:function(){
    console.log("One VIew Created");
    this.locationTemplate = HandlebarsTemplates['location'];
    this.render();
  },
  render: function(){
    this.$el.html(this.locationTemplate(this.model.toJSON()));
  }

});
