let expect = require('chai').expect;
// let jsdom = require('jsdom-global')();
let PaymentPackage = require('../PaymentPackage');

describe("PaymentPackage",function () {

    let pp;
    let name = 'name';
    let value = 4;
    beforeEach(() => {
        pp = new PaymentPackage(name, value);
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(pp).hasOwnProperty('name')).to.equal(true);
        expect(Object.getPrototypeOf(pp).hasOwnProperty('value')).to.equal(true);
        expect(Object.getPrototypeOf(pp).hasOwnProperty('VAT')).to.equal(true);
        expect(Object.getPrototypeOf(pp).hasOwnProperty('active')).to.equal(true);
        expect(Object.getPrototypeOf(pp).hasOwnProperty('toString')).to.equal(true);
    });

    describe('test initial values', function () {

        it("Test name",function () {
            expect(pp.name).to.be.equal(name);
        });

        it("Test value",function () {
            expect(pp.value).to.be.equal(value);
        });

        it("Test Vat",function () {
            expect(pp.VAT).to.be.equal(20);
        });

        it("Test is active",function () {
            expect(pp.active).to.be.equal(true);
        });
    });

    describe('test validation', function () {

        it("Test set name with correct value",function () {
            pp.name = 'i';
            expect(pp.name).to.be.equal('i');
        });

        it("Test set name with empty string",function () {
            expect(() => pp.name = '').to.throw();
        });

        it("Test set name with not string",function () {
            expect(() => pp.name = 3).to.throw();
        });

        it("Test set value with correct value",function () {
            pp.value = 0;
            expect(pp.value).to.be.equal(0);
        });

        it("Test set value with not number",function () {
            expect(() => pp.value = '0').to.throw();
        });

        it("Test set value with negative number",function () {
            expect(() => pp.value = -1).to.throw();
        });

        it("Test set vat with correct value",function () {
            pp.VAT = 0;
            expect(pp.VAT).to.be.equal(0);
        });

        it("Test set VAT with not number",function () {
            expect(() => pp.VAT = '0').to.throw();
        });

        it("Test set VAT with negative number",function () {
            expect(() => pp.VAT = -1).to.throw();
        });

        it("Test set active with correct value",function () {
            pp.active = false;
            expect(pp.active).to.be.equal(false);
        });

        it("Test set VAT with incorrect value",function () {
            expect(() => pp.active = 'false').to.throw();
        });

        it("Test constructor with incorrect name",function () {
            expect(() => pp = new PaymentPackage('', value)).to.throw();
        });

        it("Test constructor with incorrect value",function () {
            expect(() => pp = new PaymentPackage(name, -3)).to.throw();
        });

    });

    describe('test toString', function () {

        beforeEach(() => {
            pp = new PaymentPackage('HR Services', 1500);
        });

        it("Test initial value",function () {
            expect(pp.toString()).to.be.equal('Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800');
        });

        it("Test with active = false",function () {
            pp.active = false;
            expect(pp.toString()).to.be.equal('Package: HR Services (inactive)\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800');
        });
    });

});