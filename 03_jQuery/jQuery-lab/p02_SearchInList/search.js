/**
 * Created by Ivaylo on 5/14/2018.
 */

function search() {
    let searchText = $('#searchText').val();
    let matches = 0;
    $('#towns').find('li').each((index, item) => {
        if(item.textContent.includes(searchText)){
            $(item).css('font-weight', 'bold');
            matches ++;
        }
    });
    $('#result').text(matches + ' matches found.');
}