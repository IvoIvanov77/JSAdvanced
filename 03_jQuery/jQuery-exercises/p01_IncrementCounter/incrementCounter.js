/**
 * Created by Ivaylo on 5/15/2018.
 */

function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', 'true');

    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    list.addClass('results');

    $(incrementBtn).on('click', () => {
        textArea.val(+textArea.val() + 1);
    });
    $(addBtn).on('click', () => {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);

}

// •	<textarea> with class="counter", value="0" and the disabled attribute.
// •	<button> with class="btn", id="incrementBtn" and text "Increment".
// •	<button> with class="btn", id="addBtn" and text "Add".
// •	Unordered list <ul> with class="results".
