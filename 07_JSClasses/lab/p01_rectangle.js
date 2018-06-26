/**
 * Created by Ivaylo on 5/26/2018.
 */

class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return this.height * this.width;
    }
}

let r = new Rectangle(3, 4, 'red');
console.log(r.calcArea());