function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')
        throw new Error('Los parametros no son numeros')
    return x + y;
}


module.exports = sum;