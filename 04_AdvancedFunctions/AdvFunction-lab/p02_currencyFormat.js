/**
 * Created by Ivaylo on 5/20/2018.
 */



function getDollarFormatter(formatter) {
    return ((value) => formatter(',', '$', true, value));
}

function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let formatter = getDollarFormatter(formatCurrency);
console.log(formatter(23.456));
console.log(getDollarFormatter(formatCurrency)(34.5682));