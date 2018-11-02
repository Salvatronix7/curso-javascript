const AGE_MIN_ADULT = 18


function getAgeType(age) {


    if (typeof age !== 'number')
        throw new console.error('not a number');


    if (isBoy(age)) {
        return ('boy')
    } else {
        return ('man')
    }
}

function isBoy(age) {

    if (age < AGE_MIN_ADULT) {
        return true
    } else {
        return false
    }
}

function isAdult(age) {
    return !isBoy(age);
}

module.exports = {
    getAgeType: getAgeType,
    isBoy: isBoy,
    isAdult: isAdult
}