/**
 * Created by Ivaylo on 5/14/2018.
 */

function attachEventsListeners() {

    let inputDistance =  document.querySelector("#inputDistance");
    let inputUnits = document.querySelector("#inputUnits");
    let outputUnits = document.querySelector("#outputUnits");
    let button = document.querySelector("#convert");
    let meters;
    button.addEventListener('click', () => {
        let distance = Number(inputDistance.value);
        switch (inputUnits.value){
            case 'km' : meters = distance * 1000;break;
            case 'm' : meters = distance; break;
            case 'cm' : meters = distance * 0.01; break;
            case 'mm' : meters = distance * 0.001; break;
            case 'mi' : meters = distance * 1609.34; break;
            case 'yrd' : meters = distance * 0.9144; break;
            case 'ft' : meters = distance * 0.3048; break;
            case 'in' : meters = distance * 0.0254; break;
        }
        let unit = outputUnits.value;
        document.querySelector('#outputDistance').value = convert(meters, unit);
    });

    function convert(meters, unit) {
        switch (unit){
            case 'km' : return meters / 1000;
            case 'm' : return meters;
            case 'cm' : return meters / 0.01;
            case 'mm' : return meters / 0.001;
            case 'mi' : return meters / 1609.34;
            case 'yrd' : return meters / 0.9144;
            case 'ft' : return meters / 0.3048;
            case 'in' : return meters / 0.0254;
        }
    }
}

