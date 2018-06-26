/**
 * Created by Ivaylo on 5/27/2018.
 */

class Abstract{
    constructor(){
        if(new.target === Abstract){
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }
}

class Extend extends Abstract{}

let a = new Abstract();
let b = new Extend();