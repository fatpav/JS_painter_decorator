const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    it('should have an area', function(){
        const room = new Room(25);
        const actual = room.area;
        assert.strictEqual(actual, 25)
    })

});