var age = require('../src/age.js')
var expect = require('expect.js')

describe('age.js', function () {
    describe('getAgeType', function () {
        describe('Mostrar mensaje de si es niño u hombre dependiendo de la edad', function () {

            it('should be a function', function () {
                expect(typeof age.getAgeType).to.be('function')
            });

            it('should throw an exception with non-numeric params', function () {
                expect(age.getAgeType).withArgs('a').to.throwException('not a number');
            });

            it('should return Man if age is >= 18', function () {
                expect(age.getAgeType(25)).to.be('man');
            });

            it('should return boy if age is >= 18', function () {
                expect(age.getAgeType(17)).not.to.be('man');
            });

            it('should return man if age is < 18', function () {
                expect(age.getAgeType(16)).to.be('boy');
            });

            it('should return man if age is >= 18', function () {
                expect(age.getAgeType(25)).not.to.be('boy');
            });
        });
    })
    describe('isAdult', function () {
        describe('Mostrar mensaje de si es niño u hombre dependiendo de la edad', function () {

            it('should be a function', function () {
                expect(typeof age.isAdult).to.be('function')
            });

            it('should return true if age is >= 18', function () {
                expect(age.isAdult(25)).to.be(true);
            });
            it('should return false if age is < 18', function () {
                expect(age.isAdult(17)).to.be(false);
            });
        });

    })
    describe('isBoy', function () {
        describe('Mostrar true o false si es niño u hombre dependiendo de la edad', function () {

            it('should be a function', function () {
                expect(typeof age.isBoy).to.be('function')
            });

            it('should return true if age is < 18', function () {
                expect(age.isBoy(15)).to.be(true);
            });
            it('should return false if age is >= 18', function () {
                expect(age.isBoy(25)).to.be(false);
            });
        });
    });

})