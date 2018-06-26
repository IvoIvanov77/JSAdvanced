/**
 * Created by Ivaylo on 5/20/2018.
 */

function solve(arr, method) {
    let sortingStrategies = {
        'asc' : (a, b) => a - b,
        'desc' : (a, b) => b - a
    };
    return arr.sort(sortingStrategies[method]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));