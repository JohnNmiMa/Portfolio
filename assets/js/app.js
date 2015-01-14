angular.module('JohnMarksPortfolio', ['ngRoute', 'ngSanitize'])

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

.controller('WorkCtrl', ['$scope', function($scope) {
    $scope.angularProjects = [
        {   id: "somecode",
            href: "http://somecode.pythonanywhere.com/",
            title: "SomeCode<br/>Snippet Tool",
            orientation: "wide",
            hostenv: "Website",
            indata:  {xoff: 30, yoff: 0, zoom:130},
            outdata: {xoff:  0, yoff: 0, zoom:100}
        },
        {   id: "photobrowser",
            href: "http://jettagozoom.github.io/PhotoBrowser",
            title: "Instagram Searcher",
            orientation: "wide",
            hostenv: "GitHub Pages",
            indata:  {xoff: 50, yoff: 95, zoom:140},
            outdata: {xoff:  0, yoff:  0, zoom:100}
        },
        {   id: "countriescapitals",
            href: "http://jettagozoom.github.io/CountriesCapitals/app",
            title: "Countries-N-Capitals",
            orientation: "wide",
            hostenv: "GitHub Pages",
            indata:  {xoff: 90, yoff: 35, zoom:125},
            outdata: {xoff:  0, yoff:  0, zoom:125}
        },
        {   id: "waitstaffcalc",
            href: "http://jettagozoom.github.io/WaitstaffCalculatorWithRoutes/app",
            title: "Waitstaff Calculator",
            orientation: "tall",
            hostenv: "GitHub Pages",
            indata:  {xoff: 55, yoff: 40, zoom:120},
            outdata: {xoff:  0, yoff:  0, zoom:85}
        },
        {   id: "calendardirective",
            href: "http://jettagozoom.github.io/CalendarDirectiveChallenge/app",
            title: "Calendar Directive",
            orientation: "wide",
            hostenv: "GitHub Pages",
            indata:  {xoff: 50, yoff: 20, zoom:150},
            outdata: {xoff:  0, yoff: 70, zoom:80}
        },
        {   id: "codemirrortextarea",
            href: "http://jettagozoom.github.io/AngularCodeMirrorTextarea/app",
            title: "CodeMirror Textarea",
            orientation: "tall",
            hostenv: "GitHub Pages",
            indata:  {xoff: 80, yoff: 20, zoom:150},
            outdata: {xoff:  0, yoff:  0, zoom:100}
        },
        {   id: "spacer1",
            href: "",
            title: "",
            orientation: "tall",
            hostenv: "",
            indata:  {xoff:  0, yoff:  0, zoom:100},
            outdata: {xoff:  0, yoff:  0, zoom:100}
        },
        {   id: "ngmadlibs",
            href: "http://jettagozoom.github.io/ngMadLibs",
            title: "ngMadLibs",
            orientation: "wide",
            hostenv: "GitHub Pages",
            indata:  {xoff: 90, yoff:  0, zoom:110},
            outdata: {xoff:  0, yoff:  50, zoom:75}
        }
    ];

    $scope.fewdProjects = [
        {   id: "stockportfolio",
            href: "http://jettagozoom.github.io/JsonApiHack/",
            title: "Stock Portfolio",
            orientation: "tall",
            hostenv: "GitHub Pages",
            indata:  {xoff:  0, yoff: 0, zoom:150},
            outdata: {xoff:  0, yoff: 0, zoom:100}
        },
        {   id: "quizalator",
            href: "http://jettagozoom.github.io/Quizalator/",
            title: "Quizalator",
            orientation: "wide",
            hostenv: "GitHub Pages",
            indata:  {xoff:  0, yoff: 0, zoom:120},
            outdata: {xoff:  0, yoff: 0, zoom:70}
        },
        {   id: "valentine",
            href: "http://jettagozoom.github.io/ValentinesDayCard/",
            title: "Happy Valentines",
            orientation: "wide",
            hostenv: "GitHub Pages",
            indata:  {xoff: 93, yoff: 50, zoom:140},
            outdata: {xoff: 50, yoff:  0, zoom:95}
        },
        {   id: "pamsdoterra",
            href: "http://pamsdoterra.herokuapp.com",
            title: "Pam's doTerra<br/>Invitations",
            orientation: "wide",
            hostenv: "Website",
            indata:  {xoff:  0, yoff: 70, zoom:110},
            outdata: {xoff:  0, yoff:  0, zoom:100}
        },
        {   id: "hotorcold",
            href: "http://jettagozoom.github.io/HotOrCold/",
            title: "Hot-or-Cold",
            orientation: "wide",
            hostenv: "GitHub Pages",
            indata:  {xoff: 50, yoff: 30, zoom:150},
            outdata: {xoff: 50, yoff:  0, zoom:100}
        },
        {   id: "tssignals",
            href: "http://jettagozoom.github.io/37signals/",
            title: "37signals Clone",
            orientation: "wide",
            hostenv: "GitHub Pages",
            indata:  {xoff: 50, yoff: 20, zoom:150},
            outdata: {xoff: 50, yoff:  0, zoom:100}
        },
        {   id: "spacer1",
            href: "",
            title: "",
            orientation: "tall",
            hostenv: "",
            indata:  {xoff:  0, yoff:  0, zoom:100},
            outdata: {xoff:  0, yoff:  0, zoom:100}
        },
        {   id: "googleclone",
            href: "http://jettagozoom.github.io/GoogleClone/",
            title: "Google Clone",
            orientation: "wide",
            hostenv: "GitHub Pages",
            indata:  {xoff: 50, yoff: 70, zoom:150},
            outdata: {xoff: 50, yoff:  0, zoom:100}
        }
    ];

    $scope.hpProjects = [
        {   id: "rgs",
            href: "http://www8.hp.com/us/en/campaigns/workstations/remote-graphics-software.html",
            title: "HP Remote Graphics<br/>Software",
            orientation: "wide",
            hostenv: "Website",
            indata:  {xoff: 50, yoff: 0, zoom:150},
            outdata: {xoff: 50, yoff: 0, zoom:100}
        },
        {   id: "webos",
            href: "http://www.hpwebos.com/us/",
            title: "webOS on PC",
            orientation: "wide",
            hostenv: "Website",
            indata:  {xoff: 100, yoff: 70, zoom:150},
            outdata: {xoff: 100, yoff: 70, zoom:100}
        },
        {   id: "graphicsdevice",
            href: "",
            title: "HPUX Graphics<br/>Device Drivers",
            orientation: "wide",
            hostenv: "",
            indata:  {xoff: 50, yoff: 50, zoom:150},
            outdata: {xoff: 50, yoff: 50, zoom:100}
        },
        {   id: "spacer1",
            href: "",
            title: "",
            orientation: "tall",
            hostenv: "",
            indata:  {xoff:0, yoff:0, zoom:100},
            outdata: {xoff:0, yoff:0, zoom:100}
        },
        {   id: "x11",
            href: "http://en.wikipedia.org/wiki/X_Window_System",
            title: "X11 Windows System",
            orientation: "wide",
            hostenv: "Website",
            indata:  {xoff: 50, yoff: 100, zoom:150},
            outdata: {xoff: 50, yoff:  50, zoom:100}
        }
    ];

    $scope.seismicProjects = [
        {   id: "seismicprocessing",
            href: "http://www.hess.com/",
            title: "Seismic Data<br/>Processing<br/>@ Amerada Hess",
            orientation: "tall",
            hostenv: "Website",
            indata:  {xoff: 10, yoff:  0, zoom:150},
            outdata: {xoff: 10, yoff: 20, zoom:100}
        },
        {   id: "seismicacquisition",
            href: "",
            title: "Seismic Data<br/>Acquisition<br/>@ Seismograph<br/>Service<br/>Corporation",
            orientation: "wide",
            hostenv: "",
            indata:  {xoff: 0, yoff: 0, zoom:150},
            outdata: {xoff: 0, yoff: 0, zoom:100}
        }
    ]
}])

.controller('ExperienceCtrl', ['$scope', function($scope) {
}])

.controller('SkillsCtrl', ['$scope', function($scope) {
}])

.directive('project', [function() {
   return {
       restrict: 'E',
       templateUrl: './views/work/project.html',
       scope: true, // there's one of these for each project
       link: function(scope, element, attrs) {
           var img =     element.find('.image'),
               overlay = element.find('a.overlay'),
               h2 =      element.find('a.overlay h2'),
               h4 =      element.find('a.overlay h4'),
               des =     element.find('.description');

           scope.hoverin = function(project) {
               if (project.title === "") return;
               doHover(project.indata.xoff, project.indata.yoff, project.indata.zoom,
                       project.orientation, 1.5, 1.0, true);
           };
           scope.hoverout = function(project) {
               if (project.title === "") return;
               doHover(project.outdata.xoff, project.outdata.yoff, project.outdata.zoom,
                       project.orientation, 1.0, 0.7, false);
           };
           scope.hoverout(scope.proj);

           function doHover(xoff, yoff, zoom, orientation, h2size, h4size, displaOverlay) {
               zoomtran(xoff, yoff, zoom, orientation);
               setOverlaySize(img.height());
               displayOverlay(displaOverlay);
               setFontSize(h2, h2size);
               setFontSize(h4, h4size);
               centerOverlayTitle();
           }

           function zoomtran(xoffset, yoffset, zoom, orientation) {
               // Zoom into or out of the image
               var zoomstr = zoom+"%";
               if (orientation === "tall") {
                   zoomstr = zoomstr + " auto";
               } else {
                   zoomstr = "auto " + zoomstr;
               }
               img.css("background-size", zoomstr);

               // Translate the image to the desired location
               var offsetstr = xoffset+"% "+ yoffset+"%";
               img.css("background-position", offsetstr);
           }

           function setOverlaySize(size) {
               overlay.width(overlay.width(size)).height(size);
           }

           function displayOverlay(displaOverlay) {
               if (displaOverlay) {
                   // Make the overlay visible and darken the background
                   overlay.css("background-color", "rgba(0,0,0, 0.5)");
                   overlay.css('visibility', 'visible');
               } else {
                   // Make the overlay hidden and brighten the background
                   overlay.css("background-color", "rgba(0,0,0, 0.0)");
                   var delayobj = overlay;
                   setTimeout(function() {
                       delayobj.css('visibility', 'hidden');
                   }, 200);
               }
           }

           function setFontSize(ele, emsize) {
               var emstr = emsize+'em';
               ele.css('font-size', emstr);
           }

           function centerOverlayTitle() {
               var parentHeight = des.parent().height(),
                   thisHeight = des.height(),
                   topMargin = (parentHeight - thisHeight) / 2;
               des.css('margin-top', topMargin);
           }
       }
   }
}]);

