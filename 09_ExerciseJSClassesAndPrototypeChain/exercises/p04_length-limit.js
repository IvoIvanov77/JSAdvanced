/**
 * Created by Ivaylo on 5/28/2018.
 */

class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(n){
        this.innerLength += n;
    }

    decrease(n){
        this.innerLength = this.innerLength - n >= 0 ? this.innerLength - n : 0;
    }

    toString(){
        if(this.innerString.innerLength <= this.innerLength){
            return this.innerString;
        }
        return this.innerString.slice(0, this.innerLength) + '...';
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test

