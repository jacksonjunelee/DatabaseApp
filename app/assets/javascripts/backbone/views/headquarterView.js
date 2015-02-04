App.Views.HeadquarterView = Backbone.View.extend({
  el: '#headquarter-section',
  events:{
    'click .showInventory': 'grabListInventory',
    'click .addInventory': 'addInventoryForm'
  },
  initialize:function(){
    console.log("HeadquarterView Created");
    this.headquarterTemplate = HandlebarsTemplates['headquarter'];
  },
  render: function(){
    this.$el.html(this.headquarterTemplate(this.model.toJSON()));
  },
  grabListInventory:function(){
    // $('<section>').attr("id","inventory-list").appendTo($('body'))
    var id = this.el.firstChild.id;
    var InventoryView = new App.Views.InventoryView({model: new App.Models.InventoryModel(),id: id});
    InventoryView.renderNewinList();
    // var id = this.model.attributes.id;
    App.InventoriesCollection.fetchInventory(id);
    App.productCollection.fetch();
  },
  addInventoryForm:function(){
    var id = this.el.firstChild.id;
    var InventoryView = new App.Views.InventoryView({model: new App.Models.InventoryModel(),id:id});
    InventoryView.renderNew();
  }

});
