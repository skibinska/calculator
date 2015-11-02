angular.module("calculator")
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'calculator/calculator.html',
                    controller: 'CalculatorCtrl'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);