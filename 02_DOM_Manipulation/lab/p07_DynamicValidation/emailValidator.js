/**
 * Created by Ivaylo on 5/13/2018.
 */

function validate() {
    document.querySelector('input')
        .addEventListener('change', event => {
                let regex = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
                if(!regex.test(event.target.value)){
                    event.target.className = 'error';
                }else {
                    event.target.removeAttribute('class');
                }

            }
        )
}