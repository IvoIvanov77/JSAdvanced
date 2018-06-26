/**
 * Created by Ivaylo on 5/21/2018.
 */

function solve(input) {
    let processor = (function () {
        let result = [];
        function add(str) {
            result.push(str);
        }
        function remove(str) {
            result = result.filter(item => item !== str);
        }
        function print() {
            console.log(result.join(','));
        }
        return {add, remove, print};
    })();
        //
    for (let item of input) {
        let args = item.split(' ');
        let command = args[0];
        let str = args[1];
        processor[command](str);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

// https://stackoverflow.com/a/22918556