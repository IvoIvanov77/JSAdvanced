function solve() {
    let list = [];
    return {
        size: 0,
        add : function(element){
            list.push(element);
            list.sort((a,b) => a - b);
            this.size ++;
        },

        remove : function(index) {
            if(index > -1 && index < this.size){
                list.splice(index, 1);
                this.size --;
            }

        },

        get : function(index)  {
            if(index > -1 && index < this.size){
                return list[index];
            }
        },

        toString : () => {
            return list.toString();
        }
    }
}

let orderedList = solve();

orderedList.add(10);
orderedList.add(3);
orderedList.add(-4);
orderedList.remove(2);
console.log(orderedList.get(0));
console.log(orderedList.size);
console.log('' + orderedList);