let result = (function() {

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

    class Form {
        constructor(...textboxes){
            textboxes.forEach(tb => {
                if(tb.constructor.name !== 'Textbox'){
                    throw new TypeError('wrong type');
                }
            });
            this._element = $('<div>').addClass('form');
            textboxes.forEach(tb => {
                this._element.append(tb.elements)
            });
            this._textboxes = textboxes;

        }

        attach(selector){
            console.log(this._element);
            $(selector).append(this._element);
        }

        submit(){
            let flag = true;
            this._textboxes.forEach(tb =>{
                if(tb.isValid()){
                    tb.elements.css('border', '2px solid green')
                }else{
                    tb.elements.css('border', '2px solid red');
                    flag = false
                }
            });
            return flag;
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form;
try{
    let form = new Form(username, password);
    form.attach("#root");
    form.submit()
}catch (e) {
    console.log(e)
}


