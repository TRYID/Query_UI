/**
 * Created by Riyan on 20/5/2017.
 */
angular.module('components', [])

    .directive('tab', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope, $element) {
                var panes = $scope.panes = [];

                $scope.select = function(pane) {
                    angular.forEach(panes, function(pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function(pane) {
                    if (panes.length == 0) $scope.select(pane);
                    panes.push(pane);
                }
            },
            template: '<div>' +
            '<ul class="menu">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
            '<i class="{{pane.icon}}"></i>' +
            '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
            '</ul>' +
            '<div class="tab-content" ng-transclude></div>' +
            '</div>',
            replace: true
        }
    })

    .directive('pane', function () {
        return {
            require: '^tab',
            restrict: 'E',
            transclude: true,
            scope: {
                icon: '@',
                title: '@'
            },
            link: function(scope, element, attrs, tabController) {
                tabController.addPane(scope);
            },
            template: '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
            '</div>',
            replace: true
        }
});