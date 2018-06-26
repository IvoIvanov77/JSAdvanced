/**
 * Created by Ivaylo on 5/27/2018.
 */

function asCircle() {
    this.area = function() {
        return Math.PI * this.radius * this.radius;
        // return 5;
    };
    return this;
}

class Circle{
    constructor(r){
        this.radius = r;
    }
}

class SubCircle extends Circle{

}

asCircle.call(Circle.prototype);

// console.log(Circle.prototype)

let c = new SubCircle(5);
console.log(c instanceof Circle);
// asCircle.call(c);
console.log(c.area());
