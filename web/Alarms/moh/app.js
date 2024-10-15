// Define the AngularJS module
var app = angular.module('myApp', []);

// Controller definition
app.controller('MainController', ['$scope', 'MyService', 'MyFactory', function($scope, MyService, MyFactory) {
    $scope.greeting = 'Hello, World!';
    $scope.serviceData = MyService.getData();  // Using the service
    $scope.factoryData = MyFactory.getData();  // Using the factory
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
}]);

// Service definition
app.service('MyService', function() {
    this.getData = function() {
        return 'Data from MyService';
    };
});

// Factory definition
app.factory('MyFactory', function() {
    var factory = {};
    
    factory.getData = function() {
        return 'Data from MyFactory';
    };
    
    return factory;
});

// Filter definition
app.filter('capitalize', function() {
    return function(input) {
        if (input) {
            return input.charAt(0).toUpperCase() + input.slice(1);
        }
        return input;
    };
});

// Custom directive definition
app.directive('myDirective', function() {
    return {
        restrict: 'E',
        template: '<div>Hello from my directive!</div>'
    };
});
