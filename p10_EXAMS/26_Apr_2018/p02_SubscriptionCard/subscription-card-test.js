let expect = require('chai').expect;
// let jsdom = require('jsdom-global')();
let SubscriptionCard = require('../SubscriptionCard');

describe("SubscriptionCard test",function () {

    let card;
    beforeEach(() => {
        card = new SubscriptionCard('first', 'last', 'SSN');
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(card).hasOwnProperty('addSubscription')).to.equal(true);
        expect(Object.getPrototypeOf(card).hasOwnProperty('isValid')).to.equal(true);
        expect(Object.getPrototypeOf(card).hasOwnProperty('block')).to.equal(true);
        expect(Object.getPrototypeOf(card).hasOwnProperty('unblock')).to.equal(true);
        expect(Object.getPrototypeOf(card).hasOwnProperty('firstName')).to.equal(true);
        expect(Object.getPrototypeOf(card).hasOwnProperty('lastName')).to.equal(true);
        expect(Object.getPrototypeOf(card).hasOwnProperty('SSN')).to.equal(true);
        expect(Object.getPrototypeOf(card).hasOwnProperty('isBlocked')).to.equal(true);
    });


    describe('test initial values', function () {

        it("Test first name",function () {
            expect(card._firstName).to.be.equal('first');
        });

        it("Test last name",function () {
            expect(card._lastName).to.be.equal('last');
        });

        it("Test SSN ",function () {
            expect(card._SSN).to.be.equal('SSN');
        });

        it("Test is blocked",function () {
            expect(card._blocked).to.be.equal(false);
        });

        it("Test subscriptions type",function () {
            expect(Array.isArray(card._subscriptions)).to.be.equal(true);
        });

        it("Test subscriptions size",function () {
            expect(card._subscriptions.length).to.be.equal(0);
        });

    });

    describe('test accessors', function () {

        it("Test first name accessor",function () {
            expect(card.firstName).to.be.equal('first');
        });

        it("Test last name accessor",function () {
            expect(card.lastName).to.be.equal('last');
        });

        it("Test SSN accessor",function () {
            expect(card.SSN).to.be.equal('SSN');
        });

        it("Test is blocked accessor",function () {
            expect(card.isBlocked).to.be.equal(false);
        });

    });

    describe('test addSubscription', function () {

        let line = 'line';
        let startDate = new Date(2018, 11, 24);
        let endDate = new Date(2018, 12, 25);

        beforeEach(() => {
            card = new SubscriptionCard('first', 'last', 'SSN');
            card.addSubscription(line, startDate, endDate);
            card.addSubscription(line, startDate, endDate);
        });

        it("Test subscriptions size",function () {
            expect(card._subscriptions.length).to.be.equal(2);
        });

        it("Test subscription line",function () {
            expect(card._subscriptions[1].line).to.be.equal(line);
        });

        it("Test subscription startDate",function () {
            expect(card._subscriptions[1].startDate).to.be.equal(startDate);
        });

        it("Test subscription endDate",function () {
            expect(card._subscriptions[1].endDate).to.be.equal(endDate);
        });
    });

    describe('test block and unblock', function () {


        beforeEach(() => {
            card.block();
        });

        it("test blocked true",function () {
            expect(card._blocked).to.be.equal(true);
        });

        it("test isValid false",function () {
            expect(card.isValid('*', new Date(2018, 11, 24))).to.be.equal(false);
        });

        it("test blocked true",function () {
            card.unblock();
            expect(card._blocked).to.be.equal(false);
        });
    });

    describe('test isValid', function () {


        beforeEach(() => {
            card = new SubscriptionCard('first', 'last', 'SSN');
            card.addSubscription('line', new Date(2018, 11, 24), new Date(2018, 11, 29));
            card.addSubscription('newLine', new Date(2018, 10, 24), new Date(2018, 10, 29));
        });

        it("must return true",function () {
            expect(card.isValid('line', new Date(2018, 11, 24))).to.be.equal(true);
        });

        it("must return true",function () {
            expect(card.isValid('line', new Date(2018, 11, 29))).to.be.equal(true);
        });

        it("must return true",function () {
            expect(card.isValid('line', new Date(2018, 10, 24))).to.be.equal(false);
        });

        it("must return false",function () {
            expect(card.isValid('oldLine', new Date(2018, 11, 24))).to.be.equal(false);
        });

        it("must return true",function () {
            card.addSubscription('*', new Date(2018, 11, 24), new Date(2018, 11, 29));
            // console.log(card._subscriptions);
            expect(card.isValid('oldLine', new Date(2018, 11, 24))).to.be.equal(true);
        });

        it("must return true",function () {
            card.addSubscription('*', new Date(2018, 11, 24), new Date(2018, 11, 29));
            card.block();
            expect(card.isValid('oldLine', new Date(2018, 11, 24))).to.be.equal(false);
        });

        it("must return true",function () {
            card.addSubscription('*', new Date(2018, 11, 24), new Date(2018, 11, 29));
            // console.log(card._subscriptions);
            expect(card.isValid('oldLine', new Date(2018, 12, 24))).to.be.equal(false);
        });
    });
});
