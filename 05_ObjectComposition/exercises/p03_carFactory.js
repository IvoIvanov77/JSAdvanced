/**
 * Created by Ivaylo on 5/23/2018.
 */

function solve(requirements ) {
    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];

    let carriages = [
        { type: 'hatchback', color: ''  },
        { type: 'coupe', color: '' }
    ];

    let resultCar = {};
    resultCar.model = requirements.model;
    resultCar.engine = getEngine(requirements.power);
    resultCar.carriage = getCarriage(requirements.color,
        requirements.carriage);
    resultCar.wheels = getWheels(Number(requirements.wheelsize));

    function getEngine(power) {
        for (let engine of engines) {
            if(engine.power >= power){
                return engine;
            }
        }
    }

    function getCarriage(color, carriageType) {
        for (let carriage of carriages) {
            if(carriage.type === carriageType){
                carriage.color = color;
                return carriage;
            }
        }
    }

    function getWheels(wheelsize) {
        let size = wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize;
        return new Array(4).fill(size)
    }
    // console.log(resultCar);
    return resultCar;
}

function carFactory(wantedCar) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: wantedCar.color }, { type: 'coupe', color: wantedCar.color }];
    let wheelsize = wantedCar.wheelsize %2 === 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;

    return {
        model: wantedCar.model,
        engine: engines.filter(e => e.power >= wantedCar.power)[0],
        carriage: carriages.filter(c => c.type === wantedCar.carriage)[0],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

solve({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
);