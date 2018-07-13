class PaymentProcessor {

    constructor(options){
        this._options = {
            types: ["service", "product", "other"],
            precision: 2
        };
        this.setOptions(options);
        this.payments = new Map();

    }

    registerPayment(id, name, type, value){
        if(this.payments.has(id)){
            throw new Error();
        }
        if(!this.isValid(id, name, type, value)){
            throw new Error();
        }
        let payment = {
            id: id,
            name: name,
            type: type,
            value: value.toFixed(this._options.precision)
        }
        this.payments.set(id, payment);
    }

    isValid(id, name, type, value){
        return typeof id === 'string' && id.length > 0
            && typeof name === 'string' && name.length > 0
            && this._options.types.includes(type)
            && typeof value === 'number';

    }

    deletePayment(id){
        if(!this.payments.delete(id)){
            throw new Error();
        }
    }

    get(id){
        let payment = this.payments.get(id);
        if(!payment){
            throw new Error();
        }
        return `Details about payment ID: ${payment.id}\n` +
                `- Name: ${payment.name}\n` +
                `- Type: ${payment.type}\n` +
                `- Value: ${payment.value}`

    }

    setOptions(options){
        if(options === undefined){
            return;
        }
        if(options.types !== undefined){
            this._options.types = options.types;
        }
        if(options.precision !== undefined){
            this._options.precision = options.precision;
        }
    }

    toString(){
        return `Summary:\n` +
               `- Payments: ${this.payments.size}\n` +
               `- Balance: ${this.getBalance().toFixed(this._options.precision)}`

    }

    getBalance(){
        let sum = 0;
        for (let p of this.payments.values()) {
            sum += Number(p.value);
        }
        return sum;
    }
}


const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
