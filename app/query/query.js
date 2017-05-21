/**
 * Created by Riyan on 20/5/2017.
 */
angular.module('myApp.query', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/query', {
            templateUrl: 'query/query.html',
            controller: 'QueryCtrl'
        });
    }])

    .controller('QueryCtrl', ['$scope', function ($scope) {
        $scope.data = [
            {
                id: 'SampleData0', val: [30, 200, 100, 400, 150, 250]
            },
            {
                id: 'SampleData1', val: [50, 20, 10, 40, 15, 25]
            },
            {
                id: 'SampleData2', val: [30, 200, 100, 400, 150, 250]
            },
            {
                id: 'SampleData3', val: [30, 200, 100, 400, 150, 250]
            },
            {
                id: 'SampleData4', val: [30, 200, 100, 400, 150, 250]
            },
            {
                id: 'SampleData5', val: [30, 200, 100, 400, 150, 250]
            },
            {
                id: 'SampleData6', val: [30, 200, 100, 400, 150, 250]
            },
            {
                id: 'SampleData7', val: [30, 200, 100, 400, 150, 250]
            }
        ];
    }]);