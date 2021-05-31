const {async_compose} = require('../index');
const {expect, assert} = require('chai');
const {multipleSix, addTen} = require('./utils/async_funcs');


describe("Async Compose Function Tests", ()=>{
    it("1. should take a simple function pipeline and return a function", () => {
        const pipeline = async_compose(v=>{},v1=>{});
        expect(typeof pipeline).to.equal('function');
    });

    it("2. should take a simple function pipeline and return the proper result", ()=> {
        const pipeline = async_compose(multipleSix, addTen);
        pipeline(0).then((result) => {
            expect(result).to.equal(60);
        });
    });

    it("3. should take the same functions as test 2, but it reversed order and return a different result", ()=> {
        const pipeline = async_compose(addTen, multipleSix);
        pipeline(0).then((result) => {
            expect(result).to.equal(10);
        });
    });

});