class PublicTransportTable  {
    constructor(town){
        this.town = town;
        $('.search-btn').on('click', this.search);
        $('.clear-btn').on('click', () =>{
            this.clear();
            this.search();
        });
    }


    set town(value) {
        this._town = value;
        $('caption').text(`${this._town}\'s Public Transport`)
    }

    addVehicle(obj){
        let type = obj.type;
        let name = obj.name;
        let route = obj.route;
        let price = obj.price;
        let driver = obj.driver;

        let vehiclesInfo = $('.vehicles-info');

        vehiclesInfo.append($('<tr>').addClass('hide-info')
            .append($('<td>').text(type))
            .append($('<td>').text(name))
            .append($('<td>')
                .append($('<button>').text('More Info')
                    .on('click', showMoreInfo)))
            )


        function showMoreInfo() {
            let currentRow = $(this).parents('tr');
            // let moreInfo = moreInfo(route, price, driver);
            if(currentRow.hasClass('hide-info')){
                currentRow.removeClass('hide-info').addClass('show-info')
                moreInfo(route, price,driver).insertAfter(currentRow)
                $(this).text('Less Info');
            }else{
                currentRow.removeClass('show-info').addClass('hide-info');
                currentRow.next().remove();
                $(this).text('More Info');
            }

        }

        function moreInfo(route, price, driver) {
            let moreInfo = $('<tr>').addClass('more-info');
            moreInfo
                .append($('<td>').attr('colspan', '3')
                    .append($('<table>')
                        .append($('<tr>').append($('<td>').text(`Route: ${route}`)))
                        .append($('<tr>').append($('<td>').text(`Price: ${price}`)))
                        .append($('<tr>').append($('<td>').text(`Driver: ${driver}`)))
                    ))
            return moreInfo;
        }

    }

    search(){
        let tableRows = $('.vehicles-info tr').filter('.hide-info, .show-info');
        tableRows.removeAttr('style')
        let type = $('input[name="type"]').val();
        let name = $('input[name="name"]').val();

        tableRows.toArray().forEach(row => {
            let td = $(row).find('td');
            if(!td.eq(0).text().includes(type) || !td.eq(1).text().includes(name)){
                $(row).css('display', 'none')
                if($(row).next('.more-info')){
                    $(row).next('.more-info').remove();
                    $(row).removeClass('show-info').addClass('hide-info');
                    $(row).find('button').text('More Info');
                }
            }
        })
    }

    clear(){
        let type = $('input[name="type"]').val('');
        let name = $('input[name="name"]').val('');

    }
}

// let a = 's';
// let b = 'ivo';
// console.log(b.includes(a))