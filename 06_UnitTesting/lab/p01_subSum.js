/**
 * Created by Ivaylo on 5/25/2018.
 */

function subSum(arr, start, end) {
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if(end > arr.length - 1){
        end = arr.length - 1;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}
