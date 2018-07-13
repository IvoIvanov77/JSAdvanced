function solve() {

    class Melon{
        constructor(weight, melonSort){
            if(new.target === Melon){
                throw new Error('Abstract class cannot be instantiated directly.')
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = this.weight * this.melonSort.length;
            this.element = ''
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString(){
            return `Element: ${this.element}\n` +
                   `Sort: ${this.melonSort}\n` +
                   `Element Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Water'
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Fire'
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Earth'
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Air'
        }
    }

    class Melolemonmelon extends Airmelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = 'Water';
            this.elements = ['Fire', 'Earth', 'Air', 'Water']
        }

        morph(){
            this.element = this.elements.shift();
            this.elements.push(this.element);
        }
    }

    return{
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
    
}