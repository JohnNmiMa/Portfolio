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
}]);

