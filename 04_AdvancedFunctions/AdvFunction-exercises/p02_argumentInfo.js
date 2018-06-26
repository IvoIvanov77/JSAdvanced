/**
 * Created by Ivaylo on 5/20/2018.
 */

// Write a function that displays information about the arguments which are passed to it -
// type and value – and a summary about the number of each type.

function solve() {

    let map = new Map();

    for (let obj of arguments) {
        let type = typeof obj;
        console.log(type + ': ' + obj);
        if(map.get(type)){
            map.set(type, map.get(type) + 1);
        }else{
            map.set(type, 1);
        }
    }

    Array.from(map)
        .sort((a, b) => {
            return b[1] - a[1];
        })
        .forEach(obj => console.log(`${obj[0]} = ${obj[1]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); }, 'hello');