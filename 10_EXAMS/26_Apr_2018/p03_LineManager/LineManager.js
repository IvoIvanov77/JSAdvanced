class LineManager  {

    constructor(stops){
        this.stops = stops;
        this._currentStopIndex = 0;
        this.duration = 0;
        this._expectedTime = 0;
    }

    set stops(value) {
        for (let stop of value) {
            if(typeof stop.name !== 'string' || stop.name.length < 1
                || typeof stop.timeToNext !== 'number' || stop.timeToNext < 0){
                throw new Error('error');
            }
        }
        this._stops = value;
    }

    get atDepot(){
        // let lastStop = this._stops[this._stops.length - 1];
        // return this._stops[this._currentStopIndex] === lastStop;
        return this._currentStopIndex === this._stops.length - 1;
    }

    get nextStopName(){
        if(this.atDepot){
            return 'At depot.'
        }
        return this._stops[this._currentStopIndex + 1].name;
    }

    get currentDelay(){
        return this.duration - this._expectedTime;
    }

    arriveAtStop(minutes){
        if(minutes < 0 || this.atDepot){
            throw new Error('error');
        }
        this._expectedTime += this._stops[this._currentStopIndex].timeToNext;
        this.duration += minutes;
        this._currentStopIndex ++;
        return !this.atDepot;
    }

    toString(){
        let nextStop = this.atDepot ? 'Course completed' : `Next stop: ${this.nextStopName}`;
        return `Line summary\n` +
                `- ${nextStop}\n` +
                `- Stops covered: ${this._currentStopIndex}\n` +
                `- Time on course: ${this.duration} minutes\n` +
                `- Delay: ${this.currentDelay} minutes`

    }
}

const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(2);
}

console.log(man.toString());
console.log(man.nextStopName);

// Should throw an Error (minutes cannot be negative)
// man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
// man.arriveAtStop(4);

// Should throw an Error at initialization
// const wrong = new LineManager([
//     { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
// ]);
