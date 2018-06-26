/**
 * Created by Ivaylo on 5/20/2018.
 */

let solution = (function () {
    let elements = {
        protein : 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,

        toString : function () {
            return `protein=${this.protein} carbohydrate=${this.carbohydrate}` +
            ` fat=${this.fat} flavour=${this.flavour}`
        }
    };

    let products = {
        apple : {
            carbohydrate: 1,
            flavour: 2
        },
        coke :{
            carbohydrate: 10,
            flavour: 20
        },
        burger :{
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein : 5,
            fat: 1,
            flavour: 1
        },
        cheverme:{
            protein : 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    function prepare(obj, n) {
        for (let pr in obj) {

            if(obj[pr] * n > elements[pr]){
                return `Error: not enough ${pr} in stock`
            }else {
                elements[pr] -= obj[pr] * n;
            }
        }
        return 'Success'
    }

    return function (input) {

        if(input === 'report'){
            return elements.toString();
        }
        let inputArr = input.split(' ');
        let command = inputArr[0];
        let item = inputArr[1];
        let quantity = Number(inputArr[2]);

        if(command === 'restock'){
            elements[item] += quantity;
            return 'Success';

        }else{
            return prepare(products[item], quantity);
        }
    }

});

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare coke 4"));



