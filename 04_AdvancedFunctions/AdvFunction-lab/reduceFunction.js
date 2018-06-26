/**
 * Created by Ivaylo on 5/20/2018.
 */

function reduce(items, func) {
    let result = items[0];

    for (let item of items.slice(1)) {
        result = func(result, item);
    }
    return result;
}

let sum = reduce([2, 3, 4], (a, b) => a + b);
console.log(sum);