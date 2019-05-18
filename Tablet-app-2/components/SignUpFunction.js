// ../components/SignUpFunction.js

function signup(user) {
    if(!user.first_name.length){
        return false;
    }
    if(!user.last_name.length){
        return false;
    }
    if(!user.email.length){
        return false;
    }
    if(!user.phone.length){
        return false;
    }
    if(!user.date_of_birth.length){
        return false;
    }
    if(!user.drivers_license.length){
        return false;
    }
    if(!user.drivers_license_state.length){
        return false;
    }
    if(!user.credit_card_type.length){
        return false;
    }
    if(!user.credit_card_number.length){
        return false;
    }
    if(!user.cvc.length){
        return false;
    }
    if(!user.expiration_date.length){
        return false;
    }
    if(!user.address.length){
        return false;
    }
    // no test for additional address because it's not required
    if(!user.city.length){
        return false;
    }
    if(!user.state.length){
        return false;
    }
    if(!user.country.length){
        return false;
    }
    if(!user.zip.length){
        return false;
    }
    if(!user.password.length){
        return false;
    }
    if(!user.confirm_password.length){
        return false;
    }
    if(user.phone.length != 10){
        return false;
    }
    if(user.cvc.length != 3){
        return false;
    }
    if(user.zip.length != 5){
        return false;
    }
    if(user.credit_card_number.length != 16){
        return false;
    }



    if(!isNaN(user.first_name)){
        return false;
    }
    if(!isNaN(user.last_name)){
        return false;
    }
    if(!isNaN(user.drivers_license_state)){
        return false;
    }
    if(!isNaN(user.city)){
        return false;
    }
    if(!isNaN(user.state)){
        return false;
    }
    if(!isNaN(user.country)){
        return false;
    }
    // email: '',
    
    // date_of_birth: '',
    // drivers_license: '',
    // credit_card_type: '',
    // credit_card_number: '',
    // cvc: '',
    // expiration_date: '',
    // address: '',

    if(user.password.length < 8){
        return false;
    }
    if(!(user.password == user.confirm_password)){
        return false;
    }

    return true;
}

module.exports = signup; 