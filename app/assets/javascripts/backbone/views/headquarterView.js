App.Views.HeadquarterView = Backbone.View.extend({
  el: '#headquarter-section',
  events:{
    'click .showInventory': 'grabListInventory',
    'click .addInventory': 'addInventoryForm',
    'click .history': 'showHistory',
    'click .branch': 'showBranch'
  },
  initialize:function(){
    console.log("HeadquarterView Created");
    this.headquarterTemplate = HandlebarsTemplates['headquarter'];
  },
  render: function(){
    this.$el.html(this.headquarterTemplate(this.model.toJSON()));
  },
  grabListInventory:function(){
    $('section#main-list').empty();
    // $('<section>').attr("id","inventory-list").appendTo($('body'))
    var id = this.el.firstChild.id;
    // var InventoryView = new App.Views.InventoryView({model: new App.Models.InventoryModel(),id: id});
    // InventoryView.renderNewinList();
    // var id = this.model.attributes.id;
    App.InventoriesCollection.fetchInventory(id);
    App.productCollection.fetch();
  },
  addInventoryForm:function(){
    $('section#main-list').empty();
    var id = this.el.firstChild.id;
    var InventoryView = new App.Views.InventoryView({model: new App.Models.InventoryModel(),id:id});
    InventoryView.renderNew();
  },
  showHistory: function(){
    $('section#main-list').empty();
    App.HistoriesCollection.fetch({reset :true});
  },
  showBranch: function(){
    App.locationView.newBranch();
  }

});
