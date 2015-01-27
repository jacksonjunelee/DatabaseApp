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
    $('#main-list').append(newRender);
  },
  renderNewinList: function(){
    var newRender = this.$el.html(this.newInventoryTemplate(this.model.toJSON()));
    $('#main-list').append(newRender);
  },
  createNewInventory:function(){
    var productObject = {};
    productObject.product_name = $('input#product_name').val();
    invenId = this.id.id;
    App.productCollection.create(productObject,{success: function(resp){
      console.log("successful callback")
      var createObject = {};

      createObject.amount_inhouse = $('input#amount_inhouse').val();
      createObject.amount_sold = $('input#amount_sold').val();
      createObject.price = $('input#price').val();
      createObject.product_id = resp.id
      createObject.location_id = invenId;
      App.InventoriesCollection.create(createObject, {url: 'inventories',reset: true});

      $('input#product_name').val('');
      $('input#amount_inhouse').val('');
      $('input#amount_sold').val('');
      $('input#price').val('');

    }});



  }



});
