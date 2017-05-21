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

    .controller('QueryCtrl', [function() {

    }]);