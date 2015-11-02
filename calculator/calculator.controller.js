angular.module("calculator")
    .controller("CalculatorCtrl", function ($scope, $log, CalculatorService) {
        $scope.number1;
        $scope.number2;
        $scope.wynik;

        $scope.dodawanie = function () {
            if (typeof $scope.number1 !== "undefined" && typeof $scope.number2 !== "undefined") {
                $scope.wynik = CalculatorService.addAndMultiplyBy2($scope.number1, $scope.number2);
            }
        };
        $log.log("2 + 3 = ", CalculatorService.add(2, 3));

    });