/**
 * Created by Ivaylo on 5/14/2018.
 */

function create(sentences) {
    let content = document.querySelector('#content');
    for (let word of sentences) {
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = word;
        paragraph.style.display = 'none';
        content.appendChild(div).appendChild(paragraph);
        div.addEventListener('click', event => {
            paragraph.style.display = 'block';

        });
    }
}