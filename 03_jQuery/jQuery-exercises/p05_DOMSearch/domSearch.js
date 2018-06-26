/**
 * Created by Ivaylo on 5/18/2018.
 */

function domSearch(selector, caseSensitive) {
    let container = $(selector);

    let addControls = $('<div>').addClass('add-controls');
    let addLabel = $('<label>').text('Enter text: ');
    let addInput = $('<input>');
    addInput.appendTo(addLabel);

    let addBtn = $('<a>').text('Add')
        .css('display', 'inline-block').addClass('button');

    addBtn.on('click', () => {
        let strong = $('<strong>').text(addInput.val());
        let item = $('<li>').addClass('list-item').append(strong);
        let deleteButton = $('<a>').addClass('button').text('X')
            .on('click', () => {
               $(item).remove();
            });

        item.prepend(deleteButton);
        ul.append(item);
        addInput.val('');

    });
    addLabel.appendTo(addControls);
    addBtn.appendTo(addControls);

    let searchControls = $('<div>').addClass('search-controls');
    let searchLabel = $('<label>').text('Search:');

    let searchInput = $('<input>')
        .on('input', () => {
            let searchRgx = caseSensitive ? new RegExp(searchInput.val()) : new RegExp(searchInput.val(), 'i');

            $( "li strong" ).each((i, e) =>  {

                if(!searchRgx.test($(e).text())){
                    $(e).parent().css('display', 'none');
                }else{
                    $(e).parent().css('display', '');
                }
            });

        });
    searchInput.appendTo(searchLabel);
    searchLabel.appendTo(searchControls);

    let resultControls = $('<div>').addClass('result-controls');
    let ul = $('<ul>').addClass('items-list')
        .appendTo(resultControls);

    addControls.appendTo(container);
    searchControls.appendTo(container);
    resultControls.appendTo(container);

}