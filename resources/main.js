function CartItem(name, color, quantity, size, link) {
    this.name = name;
    this.color = color;
    this.quantity = quantity;
    this.size = size;
    this.link = link;
    this.id = size+"-"+color; // "Small-Blackberry"
    // set image by color
    if (this.color == "Strawberry") {
        this.image = "resources/img/products/strawberry.jpg";
    } else if (this.color == "Orange") {
        this.image = "resources/img/products/orange.jpg";
    } else if (this.color == "Crazyberry") {
        this.image = "resources/img/products/crazyberry.jpg";
    } else if (this.color == "Camo") {
        this.image = "resources/img/products/camo.jpg";
    } else if (this.color == "Moon") {
        this.image = "resources/img/products/moon.jpg";
    } else {
        this.image = "resources/img/products/blackberry.jpg";
    }
    // set price by size
    if (this.size == "Tiny") {
        this.itemPrice = 12;
    } else if (this.size == "Medium") {
        this.itemPrice = 15;
    } else if (this.size == "Large") {
        this.itemPrice = 15;
    } else {
        this.itemPrice = 12;
    }
}

function WishlistItem(name, color, quantity, size, link) {
    this.name = name;
    this.color = color;
    this.quantity = quantity;
    this.size = size;
    this.link = link;
    this.id = size+"-"+color; // "Small-Blackberry"
    // set image by color
    if (this.color == "Strawberry") {
        this.image = "resources/img/products/strawberry.jpg";
    } else if (this.color == "Orange") {
        this.image = "resources/img/products/orange.jpg";
    } else if (this.color == "Crazyberry") {
        this.image = "resources/img/products/crazyberry.jpg";
    } else if (this.color == "Camo") {
        this.image = "resources/img/products/camo.jpg";
    } else if (this.color == "Moon") {
        this.image = "resources/img/products/moon.jpg";
    } else {
        this.image = "resources/img/products/blackberry.jpg";
    }
    // set price by size
    if (this.size == "Tiny") {
        this.itemPrice = 12;
    } else if (this.size == "Medium") {
        this.itemPrice = 15;
    } else if (this.size == "Large") {
        this.itemPrice = 15;
    } else {
        this.itemPrice = 12;
    }
}

$(window).on( "load", function() {
    // localStorage.clear();
    // if cart is empty, set values
    if (localStorage.getItem("cart") === null) {
        localStorage.count = 0;
    } else {
        $("#cart-counter").text(localStorage.count);
    }
});

// add to cart button
$(document).ready(function() {
    // set initial values
    if (localStorage.getItem("subtotal") === null) {
        localStorage.subtotal = 0;
    }
    $("#subtotal-right").text("$" + localStorage.subtotal + ".00");

    // load this on cart page
    if ($('body').is('.cart-page')) {
        // load SHOPPING CART items
        var cartList = $("#shopping-cart");
        // set var cart if shopping cart is empty
        if (localStorage.getItem("cart") === null) {
            var cart = [];
        } else { // if there are items saved in cart
            // delete placeholder text
            $("#cart-placeholder").text("");
            var cart = JSON.parse(localStorage.cart);
        }
        // add cart items from localStorage.cart 
        for (var i=0; i<cart.length; i++) {
            cartList.append('<li id=' + cart[i].id + ' class="cart-item"> \
                <div class="cart-item-wrapper"> \
                    <a href=' + 'detail-puppia_mesh.html' + '> \
                        <div class="cart-img-holder"> \
                            <img src=' + cart[i].image + '> \
                        </div> \
                    </a> \
                </div> \
                <div class="cart-item-details"> \
                    <div class="cart-item-left"> \
                        <header id="item-name"><a href=' + 
                        cart[i].link + '>' + cart[i].name + '</a> \
                        </header> \
                        <p id="item-size">Size: ' + cart[i].size + '</p> \
                        <p id="item-color">Color: ' + cart[i].color + '</p> \
                        <button class="cart-edit-item">Edit</button> \
                        <button class="cart-delete-item">Delete</button> \
                    </div> \
                    <div class="cart-item-middle"> \
                        <header>Qty:</header> \
                        <p id="item-quantity">' + cart[i].quantity + '</p> \
                    </div> \
                    <div class="cart-item-right"> \
                        <header class="cart-item-price">$' + 
                        parseInt(cart[i].itemPrice) * parseInt(cart[i].quantity) +
                         '</header> \
                    </div> \
                </div> \
            </li>');
        }

        // load WISHLIST items
        var wishlistList = $("#wishlist");
        // set var wishlist if wishlist is empty
        if (localStorage.getItem("wishlist") === null) {
            var wishlist = [];
        } else { // if there are items saved in wishlist
            // delete placeholder text
            $("#wishlist-placeholder").text("");
            var wishlist = JSON.parse(localStorage.wishlist);
        }
        // add wishlist items from localStorage.wishlist 
        for (var i=0; i<wishlist.length; i++) {
            wishlistList.append('<li id=' + wishlist[i].id + ' class="cart-item"> \
                <div class="cart-item-wrapper"> \
                    <a href=' + 'detail-puppia_mesh.html' + '> \
                        <div class="cart-img-holder"> \
                            <img src=' + wishlist[i].image + '> \
                        </div> \
                    </a> \
                </div> \
                <div class="cart-item-details"> \
                    <div class="cart-item-left"> \
                        <header id="item-name"><a href=' + 
                        wishlist[i].link + '>' + wishlist[i].name + '</a> \
                        </header> \
                        <p id="item-size">Size: ' + wishlist[i].size + '</p> \
                        <p id="item-color">Color: ' + wishlist[i].color + '</p> \
                        <button class="wishlist-edit-item">Edit</button> \
                        <button class="wishlist-delete-item">Delete</button> \
                        <button>Move to Cart</button> \
                    </div> \
                    <div class="cart-item-middle"> \
                        <header>Qty:</header> \
                        <p id="item-quantity">' + wishlist[i].quantity + '</p> \
                    </div> \
                    <div class="cart-item-right"> \
                        <header class="cart-item-price">$' + 
                        parseInt(wishlist[i].itemPrice) * parseInt(wishlist[i].quantity) +
                         '</header> \
                    </div> \
                </div> \
            </li>');
        }
    };

    // add button functionality
    // populate cart item variables with product details
    $("#add-button").click(function() {
        // store product name
        var name = $(".product-title").text();
        // store size
        var ogSize = $(".selected-size").attr('id');
        var size = ogSize.charAt(0).toUpperCase() + ogSize.slice(1);
        // store color
        var ogColor = $(".selected-color").attr('id');
        var color = ogColor.charAt(0).toUpperCase() + ogColor.slice(1);
        // store quantity
        var quantity = $(".quantity").val();
        // store price
        var productPrice = ($("#product-price").text()).slice(1);
        var price = parseInt(productPrice) * parseInt(quantity);
        // store href link
        var link = $(".product-title").attr('id');
        // update subtotal price
        var subtotal = parseInt(localStorage.subtotal) + parseInt(price);
        localStorage.subtotal = subtotal;

        // add the item to localStorage.cart
        // check if cart is empty
        if (localStorage.getItem("cart") === null) {
            // set empty array
            var cart = []
            // add new instance of CartItem
            cart[0] = new CartItem(name, color, quantity, size, link);
            // stringify to store in localStorage
            localStorage.cart = JSON.stringify(cart);
        } else { // else add item to existing cart
            // parse existing cart in localStorage
            var cart = JSON.parse(localStorage.cart);
            var duplicate = false;
            // check if same size and color combo exists
            for (var i = 0; i < cart.length; i++) {
                var id = size+"-"+color;
                if (cart[i].id == id ) {
                    duplicate = true;
                    var duplicateItem = cart[i];
                }
            }
            if (duplicate == true) {
                // add new quantity to old quantity
                    var newQuantity = parseInt(duplicateItem.quantity) + parseInt(quantity);
                    duplicateItem.quantity = newQuantity;
                } else {
                    // add new instance of CartItem to cart
                    cart.push(new CartItem(name, color, quantity, size, link));
                }
            // stringify to store in localStorage
            localStorage.cart = JSON.stringify(cart);
        }
        // update cart item count
        var count = parseInt(localStorage.count) + parseInt(quantity);
        localStorage.count = count;
        alert(quantity + " " + name + " added to your cart!");
    });

    // wishlist button functionality
    // populate list item variables with product details
    $("#wishlist-button").click(function() {
        // store product name
        var name = $(".product-title").text();
        // store size
        var size = $(".selected-size").attr('id');
        var size = size.charAt(0).toUpperCase() + size.slice(1);
        // store color
        var color = $(".selected-color").attr('id');
        var color = color.charAt(0).toUpperCase() + color.slice(1);
        // store quantity
        var quantity = $(".quantity").val();
        // store href link
        var link = $(".product-title").attr('id');

        // add the item to localStorage.wishlist
        // check if wishlist is empty
        if (localStorage.getItem("wishlist") === null) {
            // set empty array
            var wishlist = []
            // add new instance of CartItem
            wishlist[0] = new WishlistItem(name, color, quantity, size, link);
            // stringify to store in localStorage
            localStorage.wishlist = JSON.stringify(wishlist);
        } else { // else add item to existing wishlist
            // parse existing wishlist in localStorage
            var wishlist = JSON.parse(localStorage.wishlist);
            var duplicate = false;
            // check if same size and color combo exists
            for (var i = 0; i < wishlist.length; i++) {
                var id = size+"-"+color;
                if (wishlist[i].id == id ) {
                    duplicate = true;
                    var duplicateItem = wishlist[i];
                }
            }
            if (duplicate == true) {
                // add new quantity to old quantity
                    var newQuantity = parseInt(duplicateItem.quantity) + parseInt(quantity);
                    duplicateItem.quantity = newQuantity;
                } else {
                    // add new instance of WishlistItem to wishlist
                    wishlist.push(new WishlistItem(name, color, quantity, size, link));
                }
            // stringify to store in localStorage
            localStorage.wishlist = JSON.stringify(wishlist);
        }
        alert(quantity + " " + name + " added to your wish list!");
    });

    // assign selected-size id to clicked size
    $("#size-variation-selector li").click(function() {
        // deselect everything
        $("#tiny").removeClass("selected-size");
        $("#small").removeClass("selected-size");
        $("#medium").removeClass("selected-size");
        $("#large").removeClass("selected-size");
        //select this size
        $(this).addClass("selected-size");
        // change price displayed
        var size = $(this).attr('id');
        if ((size == "medium") || (size == "large")) {
            $("#product-price").text("$15");
        } else {
            $("#product-price").text("$12");
        }
    })

    // assign selected-color id to clicked item
    $("#color-variation-selector li").click(function() {
        $("#strawberry").removeClass("selected-color");
        $("#blackberry").removeClass("selected-color");
        $("#crazyberry").removeClass("selected-color");
        $("#camo").removeClass("selected-color");
        $("#moon").removeClass("selected-color");
        $("#orange").removeClass("selected-color");
        // select this color
        $(this).addClass("selected-color");
        var color = $(".selected-color").attr('id');
        // update image
        $("#product-image").attr('src', 'resources/img/products/' + color + ".jpg");
        var image = $("#product-image").attr('src');
    })
});

// cart item delete button functionality
$(document).on("click", ".cart-delete-item", function() {
    // remove item from page
    $(this).parent().parent().parent().remove();
    // remove item from localStorage.cart
    var cart = JSON.parse(localStorage.cart);
    // get delete button's li element's id (i.e. "Small-Blackberry")
    var id = $(this).parent().parent().parent().attr('id')
    // find item in localStorage cart with matching id and remove it
    if (cart.length != 0) {
        for (i=0; i<cart.length; i++) {
            if (cart[i].id == id) {
                // update subtotal price in localStorage
                var itemPrice = parseInt(cart[i].itemPrice);
                var quantity = parseInt(cart[i].quantity);
                var totalPrice = itemPrice * quantity;
                var subtotal = parseInt(localStorage.subtotal) - totalPrice;
                localStorage.subtotal = subtotal;
                // update subtotal shown on page
                $("#subtotal-right").text("$" + localStorage.subtotal + ".00");
                // update cart counter
                var count = parseInt(localStorage.count) - quantity;
                localStorage.count = count;
                $("#cart-counter").text(localStorage.count);
                // remove this item from cart
                cart.splice(i,1);
            }
        }
    }
    // replace placeholder text if cart is empty
    if (cart.length == 0) {
        $("#cart-placeholder").text("Your cart is empty.");
    }
    // store updated cart in localStorage
    localStorage.cart = JSON.stringify(cart);
});

// wishlist delete button functionality
$(document).on("click", ".wishlist-delete-item", function() {
    // remove item from page
    $(this).parent().parent().parent().remove();
    // remove item from localStorage.wishlist
    var wishlist = JSON.parse(localStorage.wishlist);
    // get delete button's li element's id (i.e. "Small-Blackberry")
    var id = $(this).parent().parent().parent().attr('id')
    // find item in localStorage wishlist with matching id and remove
    if (wishlist.length != 0) {
        for (i=0; i<wishlist.length; i++) {
            if (wishlist[i].id == id) {
                // remove this item from wishlist
                wishlist.splice(i,1);
            }
        }
    }
    // replace placeholder text if wishlist is empty
    if (wishlist.length == 0) {
        $("#wishlist-placeholder").text("You have no items in your wish list.");
    }
    // store updated wishlist in localStorage
    localStorage.wishlist = JSON.stringify(wishlist);
});
