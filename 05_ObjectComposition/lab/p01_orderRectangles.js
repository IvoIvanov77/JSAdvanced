/**
 * Created by Ivaylo on 5/21/2018.
 */

function solve(input) {
    return Array.from(input)
        .map(arr => ({
            width : arr[0],
            height : arr[1],
            area : function(){
                return this.width * this.height;
            },
            compareTo : function(other){
                let diff = other.area() - this.area();
                return diff || other.width - this.width;
            }
        }))
        .sort((a, b) => a.compareTo(b));
}

console.log(solve([[10,5],[5,12]]));

// Arrow functions cannot be used to write object methods because, as you have found,
// since arrow functions close over the this of the lexically enclosing context,
// the this within the arrow is the one that was current where you defined the object.