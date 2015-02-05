App.Views.HistoryView = Backbone.View.extend({
  tagName: 'div',
  className: 'history',
  initialize:function(){
    console.log("History View Created");
    this.historyTemplate = HandlebarsTemplates['history'];
    this.render();
  },
  render: function(){
    this.$el.html(this.historyTemplate(this.model.toJSON()));
  }
});
