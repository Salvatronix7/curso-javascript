var sum = require('../src/sum.js')
var expect = require('expect.js')

describe('sum', function () {
    it('should be a function', function(){
        expect(typeof sum).to.be('function')

    });

    it('should throw an exception with non-numeric params', function(){
        expect(sum).withArgs(3, 'a').to.throwException();
    });
    
    it('sum positive and negative numbers', function () {
        expect(sum(2, -1)).to.be(1);
        expect(sum(-2, -2)).to.be(-4);
        expect(sum(-2, -1)).to.be(-3);
        expect(sum(-2, 1)).to.be(-1);
    });

    it('should sum two positive number', function () {
        expect(sum(2, 3)).to.be(5);
        expect(sum(0, 2)).to.be(2);
        expect(sum(3, 0)).to.be(3);
        expect(sum(0, 0)).to.be(0);
    });
});