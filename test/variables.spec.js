var expect = require('expect.js')

describe('copy by value', function () {
    it('tipos esalares se copian por valor y no por referencia', function () {
        var a = 2;
        var b = a;
        a = a + 1;

        // console.log(a) // 3
        // console.log(b) // 2
        expect(a).to.be(3);
        expect(b).to.be(2);
    })
})

describe('copy by reference', function () {
    it('tipos complejos se copian por referencia y no por valor', function () {

        var a = {};
        var b = a;
        a.x = 1;
        // console.log(a) // { x: 1 }
        // console.log(b) // { x: 1 }


        expect(a).to.be(b);

        // expect(a).to.be({ x: 1 }); da false porque { x: 1 } se crea en una referencia distinta y por lo tanto no son iguales
    })

})

describe('copy by reference with an empty object', function () {
    it('tipos complejos se copian por referencia y no por valor', function () {

        var a = {};
        var b = {};
        // console.log(a) //

        expect(a).not.to.be(b);

    })

    it('tipos complejos se copian por referencia y no por valor prueba 2', function () {

        var a = {};
        var b = a;
        // console.log(a) //

        expect(a).to.be(b);

    })

})