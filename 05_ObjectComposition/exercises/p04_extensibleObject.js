/**
 * Created by Ivaylo on 5/23/2018.
 */

function solve(){
    return {
        extend : function (obj) {

            for (let key in obj) {
                if(typeof obj[key] === 'function'){
                    this.__proto__[key] = obj[key];
                    continue;
                }
                this[key] = obj[key];
            }
        }
    }

}

let template = {
    a : 1,
    b: 2
};

let obj = solve();

obj.extend(template);

console.log(obj);