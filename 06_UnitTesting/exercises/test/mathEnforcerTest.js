let expect = require('chai').expect;

let assert = require('assert');

let mathEnforcer  = require('../math-enforcer');

describe('lookup char', function () {

    it('with addFive not number  parameter should return undefined', function () {
        expect(mathEnforcer.addFive('5')).to.be.equal(undefined,
            'function must return undefined')
    });

    it('with subtractTen not number  parameter should return undefined', function () {
        expect(mathEnforcer.subtractTen('ivo')).to.be.equal(undefined,
            'function must return undefined')
    });

    it('with sum() not number first parameter should return undefined', function () {
        expect(mathEnforcer.sum('ivo', 3)).to.be.equal(undefined,
            'function must return undefined')
    });

    it('with sum() not number second parameter should return undefined', function () {
        expect(mathEnforcer.sum(4, '4')).to.be.equal(undefined,
            'function must return undefined')
    });

    it('with addFive() number parameter should return correct result', function () {
        assert.equal(mathEnforcer.addFive(5), 10,
            'function must return 10')

    });

    it('with addFive() negative number parameter should return correct result', function () {
        assert.equal(mathEnforcer.addFive(-5), 0,
            'function must return 0')

    });

    it('with addFive() decimal number parameter should return correct result', function () {
        assert.equal(mathEnforcer.addFive(-5.5), -0.5,
            'function must return -0.5')

    });

    it('with subtractTen() number parameter should return correct result', function () {
        assert.equal(mathEnforcer.subtractTen(-5.5), -15.5,
            'function must return -15.5')

    });

    it('with sum() number parameters should return correct result', function () {
        assert.equal(mathEnforcer.sum(-5.6, -5.5), -11.10,
            'function must return -10.1')

    });

});