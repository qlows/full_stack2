var assert = require("assert")

describe("calculatorText", function () {
    // Multiplication testing
    describe("Multiplication", function () {
        it("Equal to 15 when 5 is multiplied by 3", function () {
            var result = 5 * 3;

            assert.equal(result, 15);
        });
    });

    // Division testing
    describe("Divide", function () {
        it("Not equal to 4 when 15 is divided by 5", function () {
            var value = 4;
            var result = 15 / 5

            assert.notEqual(result, value)
        })
    })

    // Addition testing
    describe("Addition", function () {
        it("Equal to 9 when 6 is added by 3", function () {
            var value = 7;
            var result = 3 + 6
            assert.notEqual(result, value)
        })
    })

    // Subtracting testing
    describe("Subtraction", function () {
        it("Equal to 10 when 20 is subtracted by 10", function () {
            var value = 10;
            var result = 20 - 10
            assert.equal(result, value)
        })
    })
});