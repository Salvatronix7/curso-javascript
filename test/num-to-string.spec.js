var branches = require('../src/num-to-string.js');
var expect = require('expect.js');

describe('num-to-string.js', function () {
    describe('numberToStringIfElse', function () {
        it('Should be a function', function () {
            expect(typeof branches.numberToStringIfElse).to.be('function');
        });
        it('Should be less than 10', function () {
            expect(branches.numberToStringIfElse).withArgs(11).to.throwException('must be equal or less than zero');
        });
        it('Should be greather or equal than 0', function () {
            expect(branches.numberToStringIfElse).withArgs(-1).to.throwException('must be greater than zero');
        });
        it('Should be a number', function () {
            expect(branches.numberToStringIfElse).withArgs('r').to.throwException('not a number');
        });
        it('Should return the name of the number like a string', function () {
            expect(branches.numberToStringIfElse(2)).to.be('Two');
            expect(branches.numberToStringIfElse(0)).to.be('Zero');
            expect(branches.numberToStringIfElse(10)).to.be('Ten');
            expect(branches.numberToStringIfElse(5)).to.be('Five');
        });
    });
    
    describe('numberToStringSwitchCase', function () {
        it('Should be a function', function () {
            expect(typeof branches.numberToStringSwitchCase).to.be('function');
        });
        it('Should be less than 10', function () {
            expect(branches.numberToStringSwitchCase).withArgs(11).to.throwException('must be equal or less than zero');
        });
        it('Should be greather or equal than 0', function () {
            expect(branches.numberToStringSwitchCase).withArgs(-1).to.throwException('must be greater than zero');
        });
        it('Should be a number', function () {
            expect(branches.numberToStringSwitchCase).withArgs('r').to.throwException('not a number');
        });
        it('Should return the name of the number like a string', function () {
            expect(branches.numberToStringSwitchCase(2)).to.be('Two');
            expect(branches.numberToStringSwitchCase(0)).to.be('Zero');
            expect(branches.numberToStringSwitchCase(10)).to.be('Ten');
            expect(branches.numberToStringSwitchCase(5)).to.be('Five');
            expect(branches.numberToStringSwitchCase).withArgs(1.2).to.throwException('it must be an integer');
        });
    });

    describe('numberToStringIfMultipleReturn', function () {
        it('Should be a function', function () {
            expect(typeof branches.numberToStringIfMultipleReturn).to.be('function');
        });
        it('Should be less than 10', function () {
            expect(branches.numberToStringIfMultipleReturn).withArgs(11).to.throwException('must be equal or less than zero');
        });
        it('Should be greather or equal than 0', function () {
            expect(branches.numberToStringIfMultipleReturn).withArgs(-1).to.throwException('must be greater than zero');
        });
        it('Should be a number', function () {
            expect(branches.numberToStringIfMultipleReturn).withArgs('r').to.throwException('not a number');
        });
        it('Should return the name of the number like a string', function () {
            expect(branches.numberToStringIfMultipleReturn(2)).to.be('Two');
            expect(branches.numberToStringIfMultipleReturn(0)).to.be('Zero');
            expect(branches.numberToStringIfMultipleReturn(10)).to.be('Ten');
            expect(branches.numberToStringIfMultipleReturn(5)).to.be('Five');
        });
    });

    describe('numberToStringIfSingleReturn', function () {
        it('Should be a function', function () {
            expect(typeof branches.numberToStringIfSingleReturn).to.be('function');
        });
        it('Should be less than 10', function () {
            expect(branches.numberToStringIfSingleReturn).withArgs(11).to.throwException('must be equal or less than zero');
        });
        it('Should be greather or equal than 0', function () {
            expect(branches.numberToStringIfSingleReturn).withArgs(-1).to.throwException('must be greater than zero');
        });
        it('Should be a number', function () {
            expect(branches.numberToStringIfSingleReturn).withArgs('r').to.throwException('not a number');
        });
        it('Should return the name of the number like a string', function () {
            expect(branches.numberToStringIfMultipleReturn(2)).to.be('Two');
            expect(branches.numberToStringIfMultipleReturn(0)).to.be('Zero');
            expect(branches.numberToStringIfMultipleReturn(10)).to.be('Ten');
            expect(branches.numberToStringIfMultipleReturn(5)).to.be('Five');
        });
    });

    
});
