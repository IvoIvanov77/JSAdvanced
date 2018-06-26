/**
 * Created by Ivaylo on 5/20/2018.
 */

function calcAggregates(arr) {

    console.log('Sum = ' + reduce(arr, (a, b) => Number(a) + Number(b)));
    console.log('Min = ' + reduce(arr, (a, b) => Math.min(Number(a), Number(b))));
    console.log('Max = ' + reduce(arr, (a, b) => Math.max(Number(a), Number(b))));
    console.log('Product = ' + reduce(arr, (a, b) => Number(a) * Number(b)));
    console.log('Join = ' + reduce(arr, (a, b) => a + b));

    function reduce(items, func) {
        let result = items[0];
        for (let item of items.slice(1)) {
            result = func(result, item);
        }
        return result;
    }
}

calcAggregates(['2', '3', '10', '5']);
