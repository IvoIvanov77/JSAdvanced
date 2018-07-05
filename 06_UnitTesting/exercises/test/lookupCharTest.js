let expect = require('chai').expect;

let assert = require('assert');

let lookupChar = require('../lookup-char');

describe('lookup char', function () {

    it('with number first parameter should return undefined', function () {
        expect(lookupChar(13, 5)).to.be.equal(undefined,
            'function must return undefined')
    });

    it('with string second parameter should return undefined', function () {
        expect(lookupChar('pesho', '3')).to.be.equal(undefined,
            'function must return undefined');

    });

    it('with decimal second parameter should return undefined', function () {
        expect(lookupChar('pesho', 3.3)).to.be.equal(undefined,
            'function must return undefined');

    });

    it('with negative second parameter should return Incorrect index', function () {
        assert.equal(lookupChar('pesho', -1), 'Incorrect index',
            'function must return Incorrect index')

    });

    it('with greater than or equal to length index should return Incorrect index', function () {
        assert.equal(lookupChar('pesho', 5), 'Incorrect index',
            'function must return Incorrect index')

    });

    it('with correct  index should return correct result', function () {
        assert.equal(lookupChar('pesho', 0), 'pesho'.charAt(0),
            'function must return correct result')
    });

    it('with correct  index should return correct result', function () {
        assert.equal(lookupChar('pesho', 2), 'pesho'.charAt(2),
            'function must return correct result')
    });

    it('with correct  index should return correct result', function () {
        assert.equal(lookupChar('pesho', 4), 'pesho'.charAt(4),
            'function must return correct result')
    });

});