const {partial_application} = require('../index');
const {expect, assert} = require('chai');

describe('Partial Application Tests', () => {
    it("Should test that the partial application utility returns a function", ()=>{
        const func = partial_application((a,b)=>{}, 1);
        expect(typeof func).to.equal('function');
    });

    it("Should test the partial application application of a simple add function", ()=>{
        function add(a, b) {return a+b};

        const add5 = partial_application(add, 5);
        expect(add5(6)).to.equal(11);
    });

});