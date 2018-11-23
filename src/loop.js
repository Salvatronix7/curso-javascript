function pyramid(num) {
    var forever = true;
    var iteration = 0;
    while (forever) {
        if (iteration >= num) {
            break;
        }

        console.log(repeatNumber(iteration + 1));
        iteration++;

    }
}




//pyramid(5);


function repeatNumber(num) {
    var forever = true;
    var resultado = '';
    var iteration = 0;
    while (forever) {
        if (iteration >= num)
            break;

        iteration++;

        resultado += num;
    }

    return resultado;


}

function reversePyramid(num) {
    var forever = true;
    var iteration = 0;
    while (forever) {
        if (iteration >= num) {
            break;
        }

        console.log(repeatNumber(num - iteration));
        iteration++;

    }
}

reversePyramid(5);
