angular.module("calculator")
.service("CalculatorService", function () {
       this.add = function (number1, number2) {
           return number1 + number2;
       };

        this.addAndMultiplyBy2 = function (number1, number2) {
            return (number1 + number2)*2;
        };
    });