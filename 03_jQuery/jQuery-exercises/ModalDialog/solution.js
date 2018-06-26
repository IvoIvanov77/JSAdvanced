class Dialog {
    constructor(message, callback){
        this._message = message;
        this._callback = callback;
        this._dialogBox = this.setDialog();
    }

    addInput(label, name, type){
        $(this._dialogBox).find('button').eq(0)
            .before($('<label>').text(label))
            .before($('<input>').attr({'name': name, 'type': type}));

    }

    render(){
        $('body').append(this._dialogBox);

    }

    setDialog(){
        function removeDialog() {
            $(this).parent().parent().remove();
        }

        let other = this;

        return $('<div>').addClass('overlay')
            .append($('<div>').addClass('dialog')
                .append($('<p>').text(this._message))
                .append($('<button>').text('OK').on('click', function() {
                    other._callback(other.getObjects());
                    removeDialog.call(this);
                }))
                .append($('<button>').text('Cancel').on('click', removeDialog)));
    }

    getObjects(){
        let obj = {};
        $(this._dialogBox).find('input').each((i, e) => {
            obj[e.getAttribute('name')] = $(e).val();
        });

        return obj;
    }
}

