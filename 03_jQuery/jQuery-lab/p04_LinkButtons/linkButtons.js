/**
 * Created by Ivaylo on 5/14/2018.
 */

function attachEvents() {
    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }

    $('a.button').on('click', buttonClicked);
}