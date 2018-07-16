function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    const MAX_CAPACITY = 150;

    let totalPrice = 0;
    let totalQuantity = 0;

    let productInput = $('input[class="custom-select"]');
    let priceInput = $('#price');
    let quantityInput = $('#quantity');


    let button = $('#submit');
    productInput.on('keyup', function () {
        if($(this).val().length === 0){
            button.attr('disabled', true);
        }else{
            button.removeAttr('disabled');
        }
    })

    button.on('click', function () {
        let product = {
            name: productInput.val(),
            price: Number(priceInput.val()),
            quantity: Number(quantityInput.val())
        }

        totalPrice += product.price;
        totalQuantity += product.quantity;

        // ul class="display"
        $('.display').append($('<li>').text(`Product: ${product.name} Price: ${product.price} Quantity: ${product.quantity}`))
        console.log(product);

        $('#capacity').val(totalQuantity);
        $('#sum').val(totalPrice);

        if(totalQuantity >= MAX_CAPACITY){
            productInput.attr('disabled', true);;
            priceInput.attr('disabled', true);;
            quantityInput.attr('disabled', true);;
            button.attr('disabled', true);
            $('#capacity').val('full').addClass('fullCapacity');
        }


        productInput.val('');
        priceInput.val('1');
        quantityInput.val('1');
        button.attr('disabled', true);
    })



}
