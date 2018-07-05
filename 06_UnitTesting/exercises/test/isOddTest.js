let expect = require('chai').expect;

let assert = require('assert');

let isOddOrEven = require('../is-odd');

describe('is odd or even', function () {

    it('with number parameter should return undefined', function () {
        expect(isOddOrEven(13)).to.be.equal(undefined,
            'function must return undefined')
    });

    it('with object parameter should return undefined', function () {
        expect(isOddOrEven({name:'Pesho'})).to.be.equal(undefined,
            'function must return undefined');

    });

    it('with even length string should return even', function () {
        assert.equal(isOddOrEven('roar'), 'even',
            'function must return even')
    });

    it('with odd length string should return odd', function () {
        assert.equal(isOddOrEven('Hai'), 'odd',
            'function must return odd')
    });

});