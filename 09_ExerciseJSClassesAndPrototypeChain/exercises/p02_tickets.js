/**
 * Created by Ivaylo on 5/28/2018.
 */

function solve(ticketsArray, criteria) {

    let resultArray = [];
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareTo(other, criteria){
            let thisValue = this[criteria];
            let otherValue = other[criteria];

            if(Number(thisValue) === thisValue){
                return thisValue - otherValue
            }else{
                return thisValue.localeCompare(otherValue);
            }
        }
    }
    for (let line of ticketsArray) {
        let input = line.split('|');
        resultArray.push(new Ticket(input[0], Number(input[1]), input[2]));
    }

    return resultArray.sort((t1, t2) => t1.compareTo(t2, criteria));


}

console.log(solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
));

// console.log(Number('') === 0);