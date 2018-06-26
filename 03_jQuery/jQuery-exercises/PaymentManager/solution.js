class PaymentManager {
    constructor(title){
        this._title = title;
    }

    render(target){
        $(`#${target}`)
            .append(
                $('<table>')
                .append($('<caption>').text(`${this._title} Payment Manager`))
                .append($('<thead>')
                .append($('<tr>')
                    .append($('<th>').addClass('name').text('Name'))
                    .append($('<th>').addClass('category').text('Category'))
                    .append($('<th>').addClass('price').text('Price'))
                    .append($('<th>').text('Actions'))))
                .append($('<tbody>').addClass('payments'))
                .append($('<tfoot>').addClass('input-data')
                    .append($('<tr>')
                        .append($('<td>')
                            .append($('<input>').attr({'name':'name', 'type':'text'})))
                        .append($('<td>')
                            .append($('<input>').attr({'name':'category', 'type':'text'})))
                        .append($('<td>')
                            .append($('<input>').attr({'name':'price', 'type':'number'})))
                        .append($('<td>').append($('<button>').text('Add').on('click', addItem))))));

        function addItem(){
            let nameInput = $(`#${target} input[name='name']`);
            let categoryInput = $(`#${target} input[name='category']`);
            let priceInput = $(`#${target} input[name='price']`);

            if($(nameInput).val() && $(categoryInput).val() && $(priceInput).val()){
                $(`#${target} .payments`).append($('<tr>')
                    .append($('<td>').text($(nameInput).val()))
                    .append($('<td>').text($(categoryInput).val()))
                    .append($('<td>').text(Number($(priceInput).val())))
                    .append($('<td>')
                        .append($('<button>').text('Delete').on('click', deleteItem))));

                $(nameInput).val('');
                $(categoryInput).val('');
                $(priceInput).val('');
            }

        }

        function deleteItem() {
            $(this).parent().parent().remove();
        }

    }
    
}