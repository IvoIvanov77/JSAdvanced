class Repository  {
    constructor(props){
        this._props = props;
        this.data = new Map();
        this.id = 0;
    }

    add(entity){
        if(this.validate(entity)){
            this.data.set(this.id, entity);
            return this.id++;
        }

    }

    get(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        return this.data.get(id);
    }

    update(id, newEntity){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        if(this.validate(newEntity)){
            this.data.set(id, newEntity);
        }
    }

    del(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`)
        }
        this.data.delete(id);
    }

    get count(){
        return this.data.size;
    }

    validate(entity){
        for (let prop in this._props) {
            if(!entity.hasOwnProperty(prop)){
                throw new Error(`Property ${prop} is missing from the entity!`);
            }
            if(this._props[prop] !== typeof entity[prop]){
                throw new TypeError(`Property ${prop} is of incorrect type!`)
            }
        }
        return true;
    }
}


