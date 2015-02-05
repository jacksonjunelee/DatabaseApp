App.Views.HistoryListView = Backbone.View.extend({
  el: "#main-list",
  initialize: function(){
    console.log("History list rendered");
    this.listenTo(this.collection, 'reset', this.render,this);
  },
  render:function(){
    // this.$el.html$('<section>').attr("id","inventory-list").appendTo($('body'))
    this.collection.each(this.renderHistory, this);
  },
  renderHistory:function(history){
    var HistoryView = new App.Views.HistoryView({model: history});
    this.$el.append(HistoryView.$el);
  }


});
