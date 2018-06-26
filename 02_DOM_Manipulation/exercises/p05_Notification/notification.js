/**
 * Created by Ivaylo on 5/14/2018.
 */

function notify(message) {
    let notification = document.querySelector('#notification');
    notification.textContent = message;
    notification.style.display = 'block';

    window.setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}