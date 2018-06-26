/**
 * Created by Ivaylo on 5/14/2018.
 */

function attachEvents() {
    $('#items').on('click', 'li', function() {
        let li = $(this);
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    });

    $('#showTownsButton').on('click', () =>{
       let selectedLi = $('#items').find('li[data-selected=true]');
       let towns = selectedLi.toArray()
           .map(li => li.textContent).join(', ');
       $('#selectedTowns').text("Selected towns: " + towns);
    });

}