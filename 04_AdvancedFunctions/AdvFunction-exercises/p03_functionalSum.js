/**
 * Created by Ivaylo on 5/20/2018.
 */

let f = (function () {
    let sum = 0;
    return function add(a) {
        sum += a;
        add.toString = () => sum;
        return add;
    }
})();

function add(num) {
    let sum = num;

    function calc(num2) {
        sum += num2;
        return calc;
    }
    calc.toString = function() { return sum };
    return calc;
}

console.log(''+add(1)(2)(3))



