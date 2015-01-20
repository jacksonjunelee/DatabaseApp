App.Views.HeadquarterView = Backbone.View.extend({
  tagName: 'div',
  className: 'headquarter',
  initialize:function(){
    console.log("HeadquarterView Created");
    this.headquarterTemplate = HandlebarsTemplates['headquarter'];
  },
  render: function(){
    console.log(this.model)
    console.log(this.model.toJSON())
    $('#headquarter-section').append(this.$el.html(this.headquarterTemplate(this.model.toJSON())));
  }

});
