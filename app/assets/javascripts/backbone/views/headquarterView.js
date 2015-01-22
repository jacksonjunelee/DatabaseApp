App.Views.HeadquarterView = Backbone.View.extend({
  el: '#headquarter-section',
  initialize:function(){
    console.log("HeadquarterView Created");
    this.headquarterTemplate = HandlebarsTemplates['headquarter'];
  },
  render: function(){
    this.$el.html(this.headquarterTemplate(this.model.toJSON()));
  }

});
