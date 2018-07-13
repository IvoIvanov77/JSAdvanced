class PaymentProcessor {
    constructor(options){
        this.setOptions(options);
        this._payments = new Map();
    }

    registerPayment(id, name, type, value){
        if(typeof id !== 'string' || id.length < 1){
            throw new Error('invalid')
        }

        if(typeof name !== 'string' || name.length < 1){
            throw new Error('invalid')
        }

        if(typeof value !== 'number' ){
            throw new Error('invalid')
        }

        if(!this._options.types.includes(type)){
            throw new Error('invalid')
        }

        if(this._payments.has(id)){
            throw new Error('invalid')
        }

        let payment = {
            id : id,
            name: name,
            type: type,
            value: value.toFixed(this._options.precision)
        }

        this._payments.set(id, payment)
    }

    deletePayment(id){
        if(!this._payments.has(id)){
            throw new Error('not found')
        }
        this._payments.delete(id);
    }

    get(id){
        if(!this._payments.has(id)){
            throw new Error('not found')
        }
        let payment = this._payments.get(id);
        return `Details about payment ID: ${id}\n` +
                `- Name: ${payment.name}\n` +
                `- Type: ${payment.type}\n` +
                `- Value: ${payment.value}`

    }

    setOptions(options){
        this._options = {
            types: ["service", "product", "other"],
            precision: 2
        };

        if(!options){
            return
        }

        if(options.types){
            this._options.types = options.types;
        }

        if(options.precision){
            this._options.precision = options.precision;
        }

    }

    toString(){
        return `Summary:\n` +
               `- Payments: ${this._payments.size}\n` +
               `- Balance: ${this.getBalance()}`;

    }

    getBalance(){
        let sum = 0;
        for (let p of this._payments.values()) {
            sum += Number(p.value);
        }
        return sum.toFixed(this._options.precision);
    }

}




