/**
 * Created by Ivaylo on 5/28/2018.
 */

class SortedList{
    constructor(){
        this.arr = [];
        this.size = 0;
    }

    // – adds a new element to the collection
    add(elemenent) {
        this.arr.push(elemenent);
        this.arr.sort((el1, el2) => el1 - el2);
        this.size ++;
    }

    // – removes the element at position index
    remove(index) {
        if(index >= 0 && index < this.arr.length){
            this.arr.splice(index, 1);
            this.size --;
        }
    }

    // – returns the value of the element at position index
    get(index) {
        return this.arr[index];
    }

    // – number of elements stored in the collection
    // get size(){
    //     return this.arr.length;
    // }
}