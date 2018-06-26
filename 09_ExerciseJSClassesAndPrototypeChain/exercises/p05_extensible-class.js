/**
 * Created by Ivaylo on 5/28/2018.
 */

let x = (function () {
    let id = 0;
    class Extensible{
        constructor(){
            this._id = ++ id;
        }

        extend(template){
            for (let key in template) {
                if(typeof template[key] === 'function'){
                    this.__proto__[key] = template[key];
                    continue;
                }
                this[key] = template[key];
            }
        }

        get id(){
            return this._id;
        }
    }
    return {Extensible}
})();

let ex = new x.Extensible();
let ex1 = new x.Extensible();
console.log(ex.id)
console.log(ex1.id)