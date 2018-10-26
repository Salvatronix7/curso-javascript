var expect = require('expect.js');



describe('javascript', function () {
    describe('typeof', function () {
        it('should return the typeof an expression', function () {

            function test() {}
            expect(typeof 5).to.be('number');
            expect(typeof 'b').to.be('string');
            expect(typeof test).to.be('function');
            expect(typeof true).to.be('boolean')
        })
    });
})