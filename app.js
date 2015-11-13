var portfolioApp = angular.module('JohnMarksPortfolio', ['ngRoute', 'ngSanitize', 'ngTouch', 'ngAnimate'])

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
    // Use for Newton single-line iframe careers pages
    .when("/careers", {
        template : "<div</div>",
        controller : function() {
            window.location.replace("http://192.168.56.101/career/CareerHome.action?clientId=8a80838f4f51d8b0014f525b120e000b");
        }
    })
    // Use for Newton hosted careers pages
    //.when("/careers", {
    //    templateUrl : "./views/careers/careers.html",
    //        controller : 'CareersCtrl'
    //})
    .otherwise({ redirectTo: '/' });
}])

.controller('main', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.showSummaries = false;
    $scope.toggleSummaries = function() {
        $scope.showSummaries = !$scope.showSummaries;
        $rootScope.$broadcast('showSummaries', $scope.showSummaries);
    };

    $scope.headerPic = function() {
        if ($rootScope.selectedPage === 'work') {
            return 'bc';
        } else if ($rootScope.selectedPage === 'experience') {
            return 'de-rosa';
        } else if ($rootScope.selectedPage === 'skills') {
            return 'downy';
        }
    };
}])

.directive('tooltip', [function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).tooltip({delay:{'show':1000,'hide':100}, placement:attrs.placement});
        }
    };
}]);
