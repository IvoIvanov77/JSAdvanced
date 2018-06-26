/**
 * Created by Ivaylo on 5/23/2018.
 */

(function solve () {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.sum = function () {
        let result = 0;
        for (let i = 0; i < this.length; i++) {
            result += this[i];
        }
        return result;
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };

})();

(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n, this.length);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };

    Array.prototype.average = function () {
        return this.reduce((a, b) => a + b)/this.length;
    };

})();

let arr = [1,2,3,4];
console.log(arr.last());
console.log(arr.skip(2));
console.log(arr.take(1));
console.log(arr.sum());
console.log(arr.average());