class Contact {
    constructor(firstName, lastName, phone, email){
        // this._firstName = firstName;
        // this._lastName = lastName;
        // this._phone = phone;
        // this._email = email;
        this._online = false;
        this._contactForm = this.setForm(firstName, lastName, phone, email);
    }

    render(selector){
        $(`#${selector}`).append(this._contactForm);
    }


    set online(value) {
        this._online = value;
        if(value){
            $(this._contactForm).find('div').eq(0).addClass('online');
        }else{
            $(this._contactForm).find('div').eq(0).removeClass('online');
        }
    }

    get online() {
        return this._online;
    }

    setForm(firstName, lastName, phone, email){
        function show() {
            $(this).parent().siblings().eq(0).toggle();
        }

        return $('<article>')
            .append($('<div>').addClass('title').text(`${firstName} ${lastName}`)
                .append($('<button>').html('&#8505').on('click', show)))
            .append($('<div>').addClass('info').css('display', 'none')
                .append($('<span>').html(`&phone; ${phone}`))
                .append($('<span>').html(`&#9993; ${email}`)));
    }
}