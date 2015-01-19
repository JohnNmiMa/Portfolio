var portfolioApp = angular.module('JohnMarksPortfolio', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/work", {
        templateUrl : "./views/work/work.html",
        controller : 'WorkCtrl'
    })
    .when("/", {
        redirectTo: "/work"
    })
    .when("/experience", {
        templateUrl : "./views/experience/experience.html",
        controller : 'ExperienceCtrl'
    })
    .when("/skills", {
        templateUrl : "./views/skills/skills.html",
        controller : 'SkillsCtrl'
    })
    .otherwise({ redirectTo: '/' });
}])

.controller('main', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.headerPic = function() {
        if ($rootScope.selectedPage === 'work') {
            return 'bc';
        } else if ($rootScope.selectedPage === 'experience') {
            return 'de-rosa';
        } else if ($rootScope.selectedPage === 'skills') {
            return 'downy';
        }
    }
}]);

