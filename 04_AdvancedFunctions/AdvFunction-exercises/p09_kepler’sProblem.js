/**
 * Created by Ivaylo on 5/20/2018.
 */

function solve(anomaly, ecc) {

    approximate(anomaly);

    function approximate(value) {
        let f = (value - ecc * Math.sin(value) - anomaly);

        if (Math.abs(f) <= Math.pow(10, -9)) {
            console.log(Math.round(value * Math.pow(10, 9)) / Math.pow(10, 9));
            return;
        }

        let newValue = value - (f / (1 - ecc * Math.cos(value)));

        approximate(newValue);
    }
}