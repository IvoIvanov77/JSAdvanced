/**
 * Created by Ivaylo on 5/21/2018.
 */

function getFibonator() {
    let first = 0;
    let second = 1;
    return function () {
        let next = first + second;
        first = second;
        second = next;
        return first;
    }
}



