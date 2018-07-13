class PaymentManager {
    constructor(title){
        this._title = title;
    }

    render(id){
        this._table = $('<table>')
            .append($('<caption>').text(`${this._title} Payment Manager`));

        this._tableBody = $('<tbody>').addClass('payments');

        this._table
            .append(this.tableHeader);

        this._table.append(this._tableBody);

        this._footer = $('<tfoot>').addClass('input-data');
        console.log(this._footer);
        this._footer.append(this.tableFooter());

        this._table
            .append(this._footer);

        $(`#${id}`).append(this._table);
    }

    tableHeader(){
        return $('<thead>')
            .append($('<tr>')
                .append($('<th>').addClass('name').text('Name'))
                .append($('<th>').addClass('category').text('Category'))
                .append($('<th>').addClass('price').text('Price'))
                .append($('<th>').text('Actions'))
            )
    }

    addData() {
        let inputs = $(this._footer).find('input');

        // console.log(inputs)
        let name = inputs.eq(0);
        let category = inputs.eq(1);
        let price = inputs.eq(2);
        if(!name.val() || !category.val() || !price.val()){
            return;
        }

        $(this._tableBody)
            .append($('<tr>')
                .append($('<td>').text(name.val()))
                .append($('<td>').text(category.val()))
                .append($('<td>').text(Number(price.val())))
                .append($('<button>').text('Delete')
                    .on('click', function () {
                        $(this).parents('tr').remove();
                    }))
            )
        name.val('');
        category.val('');
        price.val('');
    }

    tableFooter(){

        return $('<tr>')
                .append($('<td>').append($('<input>').attr({name: 'name', type: 'text'})))
                .append($('<td>').append($('<input>').attr({name: 'category', type: 'text'})))
                .append($('<td>').append($('<input>').attr({name: 'price', type: 'number'})))
                .append($('<td>').append($('<button>').text('Add')).on('click', () => this.addData()))

    }
}

