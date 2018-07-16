let expect = require('chai').expect;
// let jsdom = require('jsdom-global')();
let Calculator = require('../Calculator');
// let $ = require('jquery');

describe("Calculator tests",function () {

    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(calc).hasOwnProperty('add')).to.equal(true);
        expect(Object.getPrototypeOf(calc).hasOwnProperty('divideNums')).to.equal(true);
        expect(Object.getPrototypeOf(calc).hasOwnProperty('toString')).to.equal(true);
        expect(Object.getPrototypeOf(calc).hasOwnProperty('orderBy')).to.equal(true);
    });

    describe('test initial values', function () {

        it("test expenses is array",function () {
            expect(Array.isArray(calc.expenses)).to.be.equal(true);
        });

        it("test expenses initial length",function () {
            expect(calc.expenses.length).to.be.equal(0);
        });

    });

    describe('test add method', function () {

        it("test add number",function () {
            calc.add(5);
            expect(calc.expenses[0]).to.be.equal(5);
        });

        it("test add string",function () {
            calc.add('5');
            expect(calc.expenses[0]).to.be.equal('5');
        });

        it("test add object",function () {
            let obj = {name: 'name', val: 5};
            calc.add(obj);
            expect(calc.expenses[0]).to.be.equal(obj);
        });

        it("test  sequence",function () {
            let obj = {name: 'name', val: 5};
            calc.add(5);
            calc.add('5');
            calc.add(obj);
            expect(calc.expenses[0]).to.be.equal(5);
            expect(calc.expenses[1]).to.be.equal('5');
            expect(calc.expenses[2]).to.be.equal(obj);
        });
    });

    describe('test divide method', function () {

        it("test without number",function () {
            calc.add('5');
            calc.add('5');
            expect(() => calc.divideNums()).to.throw("There are no numbers in the array!");
        });

        it("test with zero",function () {
            calc.add(0);
            calc.add(0);
            expect(calc.divideNums()).to.be.equal('Cannot divide by zero');
        });

        it("test with first number zero",function () {
            calc.add(0);
            calc.add(1);
            expect(calc.divideNums()).to.be.equal(0);
        });

        it("test with valid numbers",function () {
            calc.add(1);
            calc.add(3);
            expect(calc.divideNums()).to.be.closeTo(0.333, 0.01);
        });


    });

    describe('test toString method', function () {

        it("test with empty array",function () {
            expect(calc.toString()).to.be.equal('empty array');
        });

        it("test with not empty array",function () {
            let number = 5;
            let str = '5';
            calc.add(number);
            calc.add(str);
            expect(calc.toString()).to.be.equal(`${number} -> ${str}`);
        });

    });



    describe('test orderBy method', function () {

        it("test with empty array",function () {
            expect(calc.orderBy()).to.be.equal('empty');
        });

        it("test with numbers",function () {
            let a = 5;
            let b = -5;
            calc.add(a);
            calc.add(b);
            expect(calc.orderBy()).to.be.equal(`${b}, ${a}`);
        });

        it("test with strings",function () {
            let a = 'a';
            let b = 'b';
            calc.add(b);
            calc.add(a);
            expect(calc.orderBy()).to.be.equal(`${a}, ${b}`);
        });

        it("test with strings and numbers",function () {
            let a = 'a';
            let b = 4;
            calc.add(a);
            calc.add(b);
            expect(calc.orderBy()).to.be.equal(`${b}, ${a}`);
        });

    });

});