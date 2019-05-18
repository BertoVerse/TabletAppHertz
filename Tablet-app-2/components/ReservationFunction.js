// ../components/ReservationFunction.js

function reservation(resNum, lastName) {
    if (resNum == null) {
        return false;
    }
    if (lastName == null) {
        return false;
    }
    if (!isNaN(resNum)) {
        return false;
    }
    // if (typeof lastName !== 'string'){
    //     return false; 
    // }
    if (!isNaN(lastName)) {
        return false;
    }
    return true;
}

module.exports = reservation;