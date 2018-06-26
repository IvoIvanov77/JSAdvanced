function validate() {

    let usernameRgx = /^[A-Za-z0-9]{3,20}$/;
    let passwordRgx = /^\w{5,15}$/;
    let emailRgx = /^.*@.*\..*$/;

    let username = $('#username');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let email = $('#email');
    let companyNumber = $('#companyNumber');
    let valid = $('#valid');

    let formIsValid = true;

    function isValid(id, regex) {
        if(!regex.test(id.val())){
            id.css('border-color', 'red');
            formIsValid = false;
        }
        return regex.test(id.val());
    }

    function passwordMatch(passwordId, confirmPasswordId) {
        if(confirmPassword.val() !== password.val()){
            confirmPasswordId.css('border-color', 'red');
            formIsValid = false;
        }
        return confirmPassword.val() === password.val();
    }
    
    function companyNumberValidation(companyNumberId) {
        let number = Number(companyNumberId.val());

        if(checkbox.prop('checked') && (number < 1000 || number > 9999 )){
            companyNumberId.css('border-color', 'red');
            formIsValid = false;
        }
        return checkbox.prop('checked') && number > 1000 && number < 10000;
    }
    let checkbox =  $('#company');
    let companyInfo = $('#companyInfo');
    checkbox.on('change', () =>  {
        if(checkbox.prop('checked')) {
            companyInfo.css('display', '');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    $('#submit').on('click', (event) => {
        event.preventDefault();
        formIsValid = true;
        isValid(username, usernameRgx);
        isValid(email, emailRgx);
        isValid(password, passwordRgx);
        isValid(confirmPassword, passwordRgx);
        passwordMatch(password, confirmPassword);
        companyNumberValidation(companyNumber);

        if(formIsValid){
            valid.css('display', '');
        }else{
            valid.css('display', 'none');
        }


    });

    username.on('change', () => username.css('border-color', ''));
}
