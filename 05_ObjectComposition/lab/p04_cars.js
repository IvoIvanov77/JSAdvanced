/**
 * Created by Ivaylo on 5/21/2018.
 */

function solve(input) {
    let objects = new Map();

    for (let line of input) {
        let token = line.split(' ');
        let command = token[0];
        switch (command){
            case 'create' : {
                let objName = token[1];
                if (token.length === 2) {
                    objects.set(objName, {});
                } else {
                    let parent = token[3];
                    objects.set(objName,
                        Object.create(objects.get(parent)));
                }
                break;
            }
            case 'set' : {
                let obj = objects.get(token[1]);
                let prop = token[2];
                let value = token[3];
                obj[prop] = value;
            }
                break;
            case 'print' : {
                let obj = objects.get(token[1]);
                let properties = [];
                for (let key in obj) { properties.push(`${key}:${obj[key]}`); }
                console.log(properties.join(', '));
            }
                break;
        }
    }

}

solve(
    ['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)