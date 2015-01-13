profileApp.config(['$httpProvider', '$routeProvider',
    function($routeProvider) {

        $routeProvider.when("/", {
            templateUrl : "./work/work.html",
            controller : 'WorkCtrl'
        })
        .when("/experience", {
            templateUrl : "./experience/experience.html",
            controller : 'UserCtrl',
            resolve : {
                topics: ['snippetUser', function (snippetUser) {
                    return snippetUser();
                }]
            }
        });
    }]);

