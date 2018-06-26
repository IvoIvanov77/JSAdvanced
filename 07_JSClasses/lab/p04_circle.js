/**
 * Created by Ivaylo on 5/26/2018.
 */

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(d){
        this.radius = d / 2;
    }

    get area(){
        return Math.PI * this.diameter * this.diameter / 4;
    }
}