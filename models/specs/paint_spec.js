const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function() {
    it('should have litres of paint', function (){
    const paint = new Paint(10);
    const actual = paint.litres;
    assert.strictEqual(actual, 10); 
    })
});