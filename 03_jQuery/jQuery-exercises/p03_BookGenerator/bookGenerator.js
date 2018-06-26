/**
 * Created by Ivaylo on 5/16/2018.
 */

function createBook(selector, title, author, ISBN) {
    let create = (function () {
        let id = 1;
        return function (selector, title, author, ISBN) {

            let container = $(selector);

            let div = $('<div>');
            div.attr('id', 'book' + id++);
            let titleParagraph = $(`<p>${title}</p>`);
            titleParagraph.addClass('title');
            let authorParagraph = $(`<p>${author}</p>`);
            authorParagraph.addClass('author');
            let isbnParagraph = $(`<p>${ISBN}</p>`);
            isbnParagraph.addClass('isbn');

            let selectBtn = $('<button>Select</button>');
            selectBtn.on('click', () =>{
                div.css('border', '2px solid blue');

            });
            let deselectBtn = $('<button>Deselect</button>');
            deselectBtn.on('click', () => {
                div.css('border', '');
            });

            div.append(titleParagraph, authorParagraph, isbnParagraph,
                selectBtn, deselectBtn);
            div.appendTo(container);
        }
    })();

    create(selector, title, author, ISBN)
}

// let createBook = (function () {
//     let id = 1;
//     return function (selector, title, author, ISBN) {
//
//         let container = $(selector);
//
//         let div = $('<div>');
//         div.attr('id', 'book' + id++);
//         let titleParagraph = $(`<p>${title}</p>`);
//         titleParagraph.addClass('title');
//         let authorParagraph = $(`<p>${author}</p>`);
//         authorParagraph.addClass('author');
//         let isbnParagraph = $(`<p>${ISBN}</p>`);
//         isbnParagraph.addClass('isbn');
//
//         let selectBtn = $('<button>Select</button>');
//         selectBtn.on('click', () =>{
//             div.css('border', '2px solid blue');
//
//         });
//         let deselectBtn = $('<button>Deselect</button>');
//         deselectBtn.on('click', () => {
//             div.css('border', '');
//         });
//
//         div.append(titleParagraph, authorParagraph, isbnParagraph,
//             selectBtn, deselectBtn);
//         div.appendTo(container);
//     }
// })();
