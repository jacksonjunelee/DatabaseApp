App.Views.InventoryView = Backbone.View.extend({
  tagName: 'div',
  className: 'newInventory',
  events:{
    'click .create': 'createNewInventory',
    'click .edit': 'renderEdit',
    'click .update': 'updateInventory',
    'click .delete': 'deleteInventory',
    'click .show': 'showDetailedInventory'
  },
  initialize:function(id){
    console.log("Inventory View Created");
    this.listenTo(this.model, 'destroy', this.renderNothing);
    this.inventoryTemplate = HandlebarsTemplates['inventory'];
    this.newInventoryTemplate = HandlebarsTemplates['newInventory'];
    this.editInventoryTemplate = HandlebarsTemplates['edit'];
    this.showTemplate = HandlebarsTemplates['show'];
    this.id = id;
    this.render();
  },
  render: function(){
    this.$el.html(this.inventoryTemplate(this.model.toJSON()));
  },
  renderNew: function(){
    // $('#main-list').empty();
    var newRender = this.$el.html(this.newInventoryTemplate(this.model.toJSON()));
    $('#main-list').append(newRender);
  },
  // renderNewinList: function(){
  //   var newRender = this.$el.html(this.newInventoryTemplate(this.model.toJSON()));
  //   $('#main-list').append(newRender);
  // },
  // createNewInventory:function(){
  //   var productObject = {};
  //   productObject.product_name = $('input#product_name').val();
  //   invenId = this.id.id;
  //   App.productCollection.create(productObject,{success: function(resp){
  //     console.log("successful callback")
  //     var createObject = {};
  //
  //     createObject.amount_inhouse = $('input#amount_inhouse').val();
  //     createObject.amount_sold = $('input#amount_sold').val();
  //     createObject.price = $('input#price').val();
  //     createObject.product_id = resp.id
  //     createObject.location_id = invenId;
  //     App.InventoriesCollection.create(createObject, {url: 'inventories'});
  //
  //     $('input#product_name').val('');
  //     $('input#amount_inhouse').val('');
  //     $('input#amount_sold').val('');
  //     $('input#price').val('');
  //   }});
  // },
  createNewInventory:function(){
    console.log(this)
    var product_name = $('input#product_name').val();
    var input = $('input#image')[0].files[0];
    invenId = this.id.id;

    var formData = new FormData();

    formData.append("product_name",product_name);
    formData.append("image",input);
    $.ajax({
      dataType: "json",
      url: "/products",
      data: formData,
      processData: false,
      contentType: false,
      type: 'post',
      success: function(resp){
        console.log("successful callback")
        var createObject = {};

        createObject.amount_inhouse = $('input#amount_inhouse').val();
        createObject.amount_sold = $('input#amount_sold').val();
        createObject.price = $('input#price').val();
        createObject.product_id = resp.id;
        createObject.location_id = invenId;
        App.InventoriesCollection.create(createObject, {url: 'inventories'});

        $('input#product_name').val('');
        $('input#amount_inhouse').val('');
        $('input#amount_sold').val('');
        $('input#price').val('');
      }
    });
  },
  imageUpload:function(resp){
    $('imageUpload').fileupload ({
      dataType:'json',
      add : function(data){return data.submit();},
      success: function(resp){
      console.log("successful callback")
      var createObject = {};

      createObject.amount_inhouse = $('input#amount_inhouse').val();
      createObject.amount_sold = $('input#amount_sold').val();
      createObject.price = $('input#price').val();
      createObject.product_id = resp.id
      createObject.location_id = invenId;
      App.InventoriesCollection.create(createObject, {url: 'inventories'});

      $('input#product_name').val('');
      $('input#amount_inhouse').val('');
      $('input#amount_sold').val('');
      $('input#price').val('');
    }});
  },
  renderEdit:function(){
    this.$el.html(this.editInventoryTemplate(this.model.toJSON()));

    this.createObject = {};

    this.createObject.name = $('h1#updatename').attr('class');
    this.createObject.product_name = $('p#updateproduct_name').text();
    this.createObject.amount_inhouse = $('input#updateamount_inhouse').val();
    this.createObject.amount_sold = $('input#updateamount_sold').val();
    this.createObject.price = $('input#updateprice').val();
    this.createObject.headquarter_id = parseInt($('div.headquarter').attr("id"));

  },
  updateInventory:function(){
    App.HistoriesCollection.create(this.createObject,{add: true});
    this.model.save({
      // product.product_name: $('input#updateproduct_name').val(),
      amount_inhouse: $('input#updateamount_inhouse').val(),
      amount_sold: $('input#updateamount_sold').val(),
      price: $('input#updateprice').val()
    },{url: '/inventories/' + this.model.id
    // , success: function(resp){
    //   resp.attributes.product.save({
    //     product_name: $('input#updateproduct_name').val()
    //   },{url: '/products/' + resp.id})
    });
    this.$el.html(this.inventoryTemplate(this.model.toJSON()));

  },
  deleteInventory:function(){
    this.model.destroy({url: '/inventories/' + this.model.attributes.id});

  },
  renderNothing: function() {
    this.$el.empty();
  },

  showDetailedInventory: function(){
    $('section#main-list').empty();
    this.amem();

  },

  amem: function(){
    this.$el.html(this.showTemplate(this.model.toJSON()));
    App.inventoryListView.$el.append(this.$el);


  }



});
