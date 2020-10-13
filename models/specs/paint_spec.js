const assert = require('assert');
const PaintCan = require('../paint.js');

describe('PaintCan', function() {
    it('should have litres of paint', function (){
    const paint = new PaintCan(10);
    const actual = paint.litres;
    assert.strictEqual(actual, 10); 
    });
});