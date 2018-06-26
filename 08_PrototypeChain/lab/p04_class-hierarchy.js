/**
 * Created by Ivaylo on 5/28/2018.
 */

function solve() {

    class Figure{
        constructor(){
            if(new.target === Figure){
                throw new Error("Error");
            }
        }

        toString() {
            return this.constructor.name;
        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        get area(){
            return Math.PI * this.radius * this.radius;
        }

        toString(){
            let type = super.toString();
            return type + ` - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area(){
            return this.height * this.width;
        }

        toString(){
            let type = super.toString();
            return type + ` - width: ${this.width}, height: ${this.height}`;
        }
    }

    return{Figure, Circle, Rectangle};

}

solve();