class Textbox {
    constructor(selector, pattern){
        this._elements = $(selector);
        this._invalidSymbols = pattern;
        this.addEvent();
    }

    get value() {
        return this._value;
    }

    get elements() {
        return this._elements;
    }

    set value(value) {
        this._value = value;
        this.updateValues();
    }

    isValid(){
        return !this.value.match(this._invalidSymbols);
    }

    addEvent(){
        this._elements.on('input',(e)=>{
            this._value = $(e.target).val();
            this.updateValues();
        });
    }

    updateValues() {
        this._elements.val(this._value);
    }

}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');
textbox.value = 'pesho'

inputs.on('input',function(){console.log(textbox.value);});
