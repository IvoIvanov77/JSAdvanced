let expect = require('chai').expect;

let assert = require('assert');

let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject  = require('../shared-object');



describe('shared objects', function () {

    beforeEach(() => {
        document.body.innerHTML = `<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`;
    })

    describe('name', function () {
        it('initial value must be null', function () {
            expect(sharedObject.name).to.be.equal(null,
                'name must be null')
        });
        it('name should not be changed if parameter is empty', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.equal(null,
                'name must be null')
        });

        it('name should  be changed if parameter is not empty', function () {
            sharedObject.changeName('Ivaylo');
            expect(sharedObject.name).to.be.equal('Ivaylo',
                'name must be not null')
        });

        it('name input value should  be changed if parameter is not empty', function () {
            let nameInput = $('#name');
            sharedObject.changeName('Ivaylo');
            expect(nameInput.val()).to.be.equal('Ivaylo')
        });

        it('name should not be updated if parameter is empty', function () {
            let nameInput = $('#name');
            sharedObject.changeName('Eminem');
            nameInput.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Eminem');
        });

        it('name should be updated if parameter is not empty', function () {
            let nameInput = $('#name');
            sharedObject.changeName('Eminem');
            nameInput.val('Ivaylo');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Ivaylo');
        });
    });


    describe('income', function () {

        it('initial value must be null', function () {
            expect(sharedObject.income).to.be.equal(null,
                'income must be null')
        });

        it('initial value must be null', function () {
            expect(sharedObject.income).to.be.equal(null,
                'income must be null')
        });

        it('income should not be changed if parameter is string', function () {
            sharedObject.changeIncome('hello');
            expect(sharedObject.income).to.be.equal(null,
                'income must be null')
        });

        it('income should not be changed if parameter is negative integer', function () {
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.be.equal(null,
                'income must be null')
        });

        it('income should not be changed if parameter is zero', function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(null,
                'income must be null')
        });

        it('income should not be changed if parameter is decimal number', function () {
            sharedObject.changeIncome(2.3);
            expect(sharedObject.income).to.be.equal(null,
                'income must be null')
        });

        it('income should  be changed if parameter is positive integer', function () {
            sharedObject.changeIncome(3);
            expect(sharedObject.income).to.be.equal(3,
                'income must be 3')
        });

        it('income input value should  be changed if parameter is positive integer', function () {
            let incomeInput = $('#income');
            sharedObject.changeIncome(3);
            expect(incomeInput.val()).to.equal('3');
        });

        it('income should not be updated if parameter is string', function () {
            let incomeInput = $('#income');
            sharedObject.changeIncome(3);
            incomeInput.val('ivo');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(3);
        });

        it('income should not be updated if parameter is zero', function () {
            let incomeInput = $('#income');
            sharedObject.changeIncome(3);
            incomeInput.val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(3);
        });

        it('income should not be updated if parameter is decimal', function () {
            let incomeInput = $('#income');
            sharedObject.changeIncome(3);
            incomeInput.val(3.3);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(3);
        });

        it('income should not be updated if parameter is negative number', function () {
            let incomeInput = $('#income');
            sharedObject.changeIncome(3);
            incomeInput.val(-1);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(3);
        });

        it('income should not updated if parameter is positive integer', function () {
            let incomeInput = $('#income');
            sharedObject.changeIncome(3);
            incomeInput.val(5);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(5);
        });
    });



});