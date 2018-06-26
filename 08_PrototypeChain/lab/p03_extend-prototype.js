/**
 * Created by Ivaylo on 5/27/2018.
 */

function extendPrototype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

class P{
    toString(){
        return 'hello'
    }
}
extendPrototype(P);
let p = new P();
console.log(p.toSpeciesString());