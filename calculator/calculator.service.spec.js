angular.module("calculator")
.service("CalculatorService", function () {
       this.add = function (number1, number2) {
           return number1 + number2;
       }
    });