App.Views.LocationView = Backbone.View.extend({
  tagName: 'div',
  className: 'location',
  events:{
    'click .showInventory': 'renderInventory'
  },
  initialize:function(){
    console.log("One VIew Created");
    this.locationTemplate = HandlebarsTemplates['location'];
    this.render();
    this.listenTo(this.model,"show",this.renderInventory)
  },
  render: function(){
    this.$el.html(this.locationTemplate(this.model.toJSON()));
  },
  renderInventory:function(){
    console.log("moo");
  }

});
