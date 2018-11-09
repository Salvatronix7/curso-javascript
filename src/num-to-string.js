function numberToStringIfElse(num) {

    var numberName;

    if (typeof num !== 'number') {
        throw new Error('not a number');
    } else if (num < 0) {
        throw new Error('must be greater than zero');
    } else if (num > 10) {
        throw new Error('must be equal or less than zero');
    }


    if (num === 0) {
        numberName = 'Zero';
    } else if (num === 1) {
        numberName = 'One';
    } else if (num === 2) {
        numberName = 'Two';
    } else if (num === 3) {
        numberName = 'Three';
    } else if (num === 4) {
        numberName = 'Four';
    } else if (num === 5) {
        numberName = 'Five';
    } else if (num === 6) {
        numberName = 'Six';
    } else if (num === 7) {
        numberName = 'Seven';
    } else if (num === 8) {
        numberName = 'Eight';
    } else if (num === 9) {
        numberName = 'Nine';
    } else if (num === 10) {
        numberName = 'Ten';
    }
    return numberName;
}

console.log(numberToStringIfElse(10));


function numberToStringSwitchCase(num) {

    var numberName;

    if (typeof num !== 'number') {
        throw new Error('not a number');
    } else if (num < 0) {
        throw new Error('must be greater than zero');
    } else if (num > 10) {
        throw new Error('must be equal or less than zero');
    }

    switch (num) {
        case 0:
            numberName = 'Zero';
            break;
        case 1:
            numberName = 'One';
            break;
        case 2:
            numberName = 'Two';
            break;
        case 3:
            numberName = 'Three';
            break;
        case 4:
            numberName = 'Four';
            break;
        case 5:
            numberName = 'Five';
            break;
        case 6:
            numberName = 'Six';
            break;
        case 7:
            numberName = 'Seven';
            break;
        case 8:
            numberName = 'Eight';
            break;
        case 9:
            numberName = 'Nine';
            break;
        case 10:
            numberName = 'Ten';
            break;
        default:
            throw new Error('It must be an Integer');
    }
    return numberName;
}

console.log(numberToStringSwitchCase(1));


function numberToStringIfMultipleReturn(num) {

    if (typeof num !== 'number') {
        throw new Error('not a number');
    } else if (num < 0) {
        throw new Error('must be greater than zero');
    } else if (num > 10) {
        throw new Error('must be equal or less than zero');
    } 

    if(num === 0)
    return 'Zero';
    if(num === 1)
    return 'One';
    if(num === 2)
    return 'Two';
    if(num === 3)
    return 'Three';
    if(num === 4)
    return 'Four';
    if(num === 5)
    return 'Five';
    if(num === 6)
    return 'Six';
    if(num === 7)
    return 'Seven';
    if(num === 8)
    return 'Eight';
    if(num === 9)
    return 'Nine';
    if(num === 10)
    return 'Ten';

}

console.log(numberToStringIfMultipleReturn(3));


function numberToStringIfSingleReturn(num) {
    
    var numberName;

    if (typeof num !== 'number') {
        throw new Error('not a number');
    } else if (num < 0) {
        throw new Error('must be greater than zero');
    } else if (num > 10) {
        throw new Error('must be equal or less than zero');
    } 

    if(num === 1)
     numberName = 'One';
    if(num === 2)
     numberName = 'Two';
    if(num === 3)
     numberName = 'Three';
    if(num === 4)
     numberName = 'Four';
    if(num === 5)
     numberName = 'Five';
    if(num === 6)
     numberName = 'Six';
    if(num === 7)
     numberName = 'Seven';
    if(num === 8)
     numberName = 'Eight';
    if(num === 9)
     numberName = 'Nine';
    if(num === 10)
     numberName = 'Ten';

     return numberName;

}

console.log(numberToStringIfSingleReturn(2));

module.exports = {
    numberToStringIfElse: numberToStringIfElse,
    numberToStringSwitchCase: numberToStringSwitchCase,
    numberToStringIfMultipleReturn: numberToStringIfMultipleReturn,
    numberToStringIfSingleReturn: numberToStringIfSingleReturn
};

