const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint.js');

describe('Decorator', function(){

    let decorator;
    beforeEach(function(){
        can1 = new PaintCan(2);
        can2 = new PaintCan(9);
        can3 = new PaintCan(8);
        can4 = new PaintCan(3);
        can5 = new PaintCan(1);
        decorator = new Decorator()
    })

    it('should have no paint cans in stock', function(){
        const actual = decorator.stock
        assert.deepStrictEqual(actual, []);
    })

    xit('should have paint cans in stock', function(){
        const actual = decorator.stock;
        assert.strictEqual(actual, [can1, can2, can3, can4, can5])
    });
})