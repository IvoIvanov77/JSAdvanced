class P07_instanceValidation {

    constructor(clientId, email, firstName, lastName) {

        this.products = [];
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    set clientId(value) {
        if(!value.match(/^\d{6}$/)){
            throw new TypeError('Client ID must be a 6-digit number')
        }
        this._clientId = value;
    }

    set email(value) {
        if(!value.match(/^\w+@[a-zA-Z.]+$/)){
            throw new TypeError('Invalid e-mail');
        }
        this._email = value;
    }

    set firstName(value) {
        if(value.length < 3 || value.length > 20){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }

        if(!value.match(/^[a-zA-Z]+$/)){
            throw new TypeError("First name must contain only Latin characters");
        }
        this._firstName = value;
    }

    set lastName(value) {
        if(value.length < 3 || value.length > 20){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }

        if(!value.match(/^[a-zA-Z]+$/)){
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = value;
    }
}

let iv = new P07_instanceValidation('aa131455vv', 'ivan@.', 'Ivan', 'Petrov')

