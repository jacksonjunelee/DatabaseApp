App.Views.InventoryView = Backbone.View.extend({
  tagName: 'div',
  className: 'newInventory',
  events:{
    'click .create': 'createNewInventory',
  },
  initialize:function(id){
    console.log("Inventory View Created");
    this.inventoryTemplate = HandlebarsTemplates['inventory'];
    this.newInventoryTemplate = HandlebarsTemplates['newInventory'];
    this.id = id;
    this.render();
  },
  render: function(){
    this.$el.html(this.inventoryTemplate(this.model.toJSON()));
  },
  renderNew: function(){
    var newRender = this.$el.html(this.newInventoryTemplate(this.model.toJSON()));
    $('#inventory-list').append(newRender);
  },
  renderNewinList: function(){
    var newRender = this.$el.html(this.newInventoryTemplate(this.model.toJSON()));
    $('#inventory-list').append(newRender);
  },
  createNewInventory:function(){
    debugger;
    var createObject = {};

    createObject.amount_inhouse = $('input#amount_inhouse').val();
    createObject.amount_sold = $('input#amount_sold').val();
    createObject.price = $('input#price').val();
    createObject.product_id =
    createObject.location_id = this.id.id;
    debugger;
    App.InventoriesCollection.create(createObject);

    $('input#amount_inhouse').val('');
    $('input#amount_sold').val('');
    $('input#price').val('');
  }
});
