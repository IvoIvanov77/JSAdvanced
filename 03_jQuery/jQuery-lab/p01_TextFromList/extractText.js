/**
 * Created by Ivaylo on 5/14/2018.
 */

function extractText() {
    let items = $('ul#items li')
        .toArray()
        .map(li => li.textContent)
        .join(', ');
    $('#result').text(items);
}