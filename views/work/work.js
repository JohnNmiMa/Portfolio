portfolioApp.controller('WorkCtrl', ['$rootScope', '$scope',
                             function($rootScope,   $scope) {
    $rootScope.selectedPage = 'work';
    $scope.angularProjects = {
        title: "ANG (Learn AngularJS) @",
        class: "thinkful",
        titleImage: "images/thinkful.png",
        periodOfWork: "7/2014 - 9/2014",
        summary:
            "<p>This was a great class. It taught the following really well:<p>" +
            "<ul>" +
                "<li><b>Two way data-binding</b> - A way to project the Model into the View, realtime, as the Model " +
                    "changes, without having to do any DOM work. It is quite powerful, saving much time and added stability.</li>" +
                "<li><b>Templates/Partials</b> - the View - great for <em>declaritively</em> inserting dynamic content. " +
                    "Templates provide much project structure, and remove any need for HTML strings.</li>" +
                "<li><b>MVC</b> - <em>Controllers</em> give the model access to the View, through the <em>scope</em></li>" +
                "<li><b>Dependency Injection/Services</b> - DI is so powerful and useful - it brings great power and " +
                    "stability to your code. Simply create a <em>Service</em> that has some useful function, such " +
                    "as mashing up data from an external API, and inject the <em>service</em> into your controller " +
                    "directive, or other Angular service.</li>" +
                "<li><b>Directives</b> - As someone said, \"AngularJS should become HTML6\", and directives provide that. " +
                    "Simply create your own <em>tag</em>, code up the directive, and declare your tags " +
                    "throughout the HTML.</li><br/>" +
            "</ul>" +
            "<p>Testing in Angular is a bit tricky, but because of DI, it makes creating mocks much easier. The " +
                "Jasmine and Karma testing frameworks are introduced where controllers, services, and directives are " +
                "brought under test. </p><br/>" +
            "<p>The final unit was dedicated to creating a capstone project. John chose to enhance his PIP MVP Snippet Tool " +
                "project called <em>SomeCode</em>. Three months was spent working on <em>SomeCode</em> where the" +
                "old jQuery code was re-written using the declarative nature of AngularJS. " +
                "Click on the picture of <em>SomeCode</em> below " +
                "and check it out. Create an account, read the Welcome topic, and create your own topics and snippets!",
        projects: [
            {
                id: "somecode",
                href: "http://somecode.pythonanywhere.com/",
                title: "SomeCode<br/>Snippet Tool",
                orientation: "wide",
                hostenv: "Website",
                indata: {xoff: 30, yoff: 0, zoom: 130},
                outdata: {xoff: 0, yoff: 0, zoom: 100}
            },
            {
                id: "photobrowser",
                href: "http://jettagozoom.github.io/PhotoBrowser",
                title: "Instagram Searcher",
                orientation: "wide",
                hostenv: "GitHub Pages",
                indata: {xoff: 50, yoff: 95, zoom: 140},
                outdata: {xoff: 0, yoff: 0, zoom: 100}
            },
            {
                id: "countriescapitals",
                href: "http://jettagozoom.github.io/CountriesCapitals/app",
                title: "Countries-N-Capitals",
                orientation: "wide",
                hostenv: "GitHub Pages",
                indata: {xoff: 90, yoff: 35, zoom: 125},
                outdata: {xoff: 0, yoff: 0, zoom: 125}
            },
            {
                id: "waitstaffcalc",
                href: "http://jettagozoom.github.io/WaitstaffCalculatorWithRoutes/app",
                title: "Waitstaff Calculator",
                orientation: "tall",
                hostenv: "GitHub Pages",
                indata: {xoff: 55, yoff: 40, zoom: 120},
                outdata: {xoff: 0, yoff: 0, zoom: 85}
            },
            {
                id: "calendardirective",
                href: "http://jettagozoom.github.io/CalendarDirectiveChallenge/app",
                title: "Calendar Directive",
                orientation: "wide",
                hostenv: "GitHub Pages",
                indata: {xoff: 50, yoff: 20, zoom: 150},
                outdata: {xoff: 0, yoff: 70, zoom: 80}
            },
            {
                id: "codemirrortextarea",
                href: "http://jettagozoom.github.io/AngularCodeMirrorTextarea/app",
                title: "CodeMirror Textarea",
                orientation: "tall",
                hostenv: "GitHub Pages",
                indata: {xoff: 80, yoff: 20, zoom: 150},
                outdata: {xoff: 0, yoff: 0, zoom: 100}
            },
            {
                id: "spacer1",
                href: "",
                title: "",
                orientation: "tall",
                hostenv: "",
                indata: {xoff: 0, yoff: 0, zoom: 100},
                outdata: {xoff: 0, yoff: 0, zoom: 100}
            },
            {
                id: "ngmadlibs",
                href: "http://jettagozoom.github.io/ngMadLibs",
                title: "ngMadLibs",
                orientation: "wide",
                hostenv: "GitHub Pages",
                indata: {xoff: 90, yoff: 0, zoom: 110},
                outdata: {xoff: 0, yoff: 50, zoom: 75}
            }
        ]
    };

    $scope.pipProjects = {
        title: "PIP (Programming In Python) @",
        class: "thinkful",
        titleImage: "images/thinkful.png",
        periodOfWork: "3/2014 - 6/2014",
        summary: " \
            <p>The PIP class has five sections. Part one gives a solid intro to the <b>Python</b> language \
               (basic data structures, string formatting, lists, dictionaries, comprehensions, \
               control flow, exception handling, functions, OO, File IO, serialization, debugging, \
               logging, etc.). Check out my <a href='https://github.com/jettagozoom/LPTHW' target='_blank'>Learning Python \
               the Hard Way</a> GitHub repo <em>README</em> for further details.</p> \
            </p><br> \
            <p>Part two introduces <b>HTTP</b>, <b>REST</b>, <b>OAuth</b>, and taking those topics and hooking up \
               to the Twitter API.</p><br> \
            <p>Part three is where the we begin to work with databases. We are introduced to \
               <b>SQL</b>, the <b>SQLite DB</b>, and begin to practice creating tables, inserting records, normalizing \
               tables, performing queries and updates. Next, the <b>SQLAlchemy</b> ORM is discussed, \
               where we practice doing basic queries, filters, joins, searching using <b>WhooshAlchemy</b>, and finally \
               how to approach database migrations using <b>Flask-Migrate</b>.</p><br> \
            <p>Part four is where we are introduced to the <b>Flask</b>. Flask is a micro webdevelopment \
               framework for Python. It is based on the <b>Jinja2</b> templating engine (very cool) and \
               the <b>Werkzeug WSGI toolkit</b>. We are intoduced to <b>BDD</b> (Behavior Driven Design) \
               through the use of <b>Behave</b>, a Python based unit testing framework.</p><br> \
            <p>Part five is where we create an MVP. I chose to create a code snippet tool for developers. It \
               is based on HTML/CSS/JavaScript/jQuery on the front end, and Flask/SQLite/SQLAlchemy on the back-end. \
               This project was later enhance in the AngularJS class (above), where the front-end was \
               rewritten using AngularJS. Here is the GitHub \
               <a href='https://github.com/jettagozoom/MVP' target='_blank'>repository</a> \
               and \
               <a href='http://jmsomecode.herokuapp.com' target='_blank'>website</a> \
               for <b>JMSomeCode</b>.</p><br>",
        projects: []
    };

    $scope.fewdProjects = {
        title: "FEWD (Front End WebDev) @",
        class: "thinkful",
        titleImage: "images/thinkful.png",
        periodOfWork: "12/2013 - 2/2014",
        summary: "" +
            "<p>John spun up on HTML, CSS, introductory JavaScript, jQuery, git/GitHub, AJAX, SPA, Responsive design, " +
                "color theory, and creating wireframes and mockups. Many exercises and projects were created throughout " +
            "the class. Below are a few of John's projects, showing introductory examples up to his final <em>Stock " +
            "Portfolio</em> mashup.</p><br/>" +
            "<p>To further his abilities in JavaScript, John read the following books:</p>" +
            "<ul>" +
                "<li><b>JavaSript</b>: The Good Parts by Douglas Crockford</li>" +
                "<li><b>JavaSript</b> Patterns by Stoyan Stefanov</li>" +
            "</ul><br/>" +
            "<p>The final project was a personal online portfolio, which you are now viewing.",
        projects: [
            {
                id: "stockportfolio",
                href: "http://jettagozoom.github.io/JsonApiHack/",
                title: "Stock Portfolio",
                orientation: "tall",
                hostenv: "GitHub Pages",
                indata: {xoff: 0, yoff: 0, zoom: 150},
                outdata: {xoff: 0, yoff: 0, zoom: 100}
            },
            {
                id: "quizalator",
                href: "http://jettagozoom.github.io/Quizalator/",
                title: "Quizalator",
                orientation: "wide",
                hostenv: "GitHub Pages",
                indata: {xoff: 0, yoff: 0, zoom: 120},
                outdata: {xoff: 0, yoff: 0, zoom: 70}
            },
            {
                id: "valentine",
                href: "http://jettagozoom.github.io/ValentinesDayCard/",
                title: "Happy Valentines",
                orientation: "wide",
                hostenv: "GitHub Pages",
                indata: {xoff: 93, yoff: 50, zoom: 140},
                outdata: {xoff: 50, yoff: 0, zoom: 95}
            },
            {
                id: "pamsdoterra",
                href: "http://pamsdoterra.herokuapp.com",
                title: "Pam's doTerra<br/>Invitations",
                orientation: "wide",
                hostenv: "Website",
                indata: {xoff: 0, yoff: 70, zoom: 110},
                outdata: {xoff: 0, yoff: 0, zoom: 100}
            },
            {
                id: "hotorcold",
                href: "http://jettagozoom.github.io/HotOrCold/",
                title: "Hot-or-Cold",
                orientation: "wide",
                hostenv: "GitHub Pages",
                indata: {xoff: 50, yoff: 30, zoom: 150},
                outdata: {xoff: 50, yoff: 0, zoom: 100}
            },
            {
                id: "tssignals",
                href: "http://jettagozoom.github.io/37signals/",
                title: "37signals Clone",
                orientation: "wide",
                hostenv: "GitHub Pages",
                indata: {xoff: 50, yoff: 20, zoom: 150},
                outdata: {xoff: 50, yoff: 0, zoom: 100}
            },
            {
                id: "spacer1",
                href: "",
                title: "",
                orientation: "tall",
                hostenv: "",
                indata: {xoff: 0, yoff: 0, zoom: 100},
                outdata: {xoff: 0, yoff: 0, zoom: 100}
            },
            {
                id: "googleclone",
                href: "http://jettagozoom.github.io/GoogleClone/",
                title: "Google Clone",
                orientation: "wide",
                hostenv: "GitHub Pages",
                indata: {xoff: 50, yoff: 70, zoom: 150},
                outdata: {xoff: 50, yoff: 0, zoom: 100}
            }
        ]
    };

    $scope.hpProjects = {
        title: "Software Engineering Projects @",
        class: "hp",
        titleImage: "images/hplogo.png",
        periodOfWork: "9/1989 - 8/2012",
        summary: "" +
            "<p>John joined HP in 1989 and worked 24 years in the Fort Collins, CO plant. Initially working " +
            "as an engineer in their computer graphics lab, he worked on many interesting and challenging projects. " +
            "In the graphics lab he worked on the new at the time X11 windowing system, writing graphics drivers, " +
            "producing the world's fastest X11 implementation, and adding cool functionality such as multi-monitor " +
            "and multi-layer (image/overlay) support.</p><br/>" +
            "<p>John then became interested in software collaboration and was one of three engineers to start a group " +
            "within HP that produced " +
            "the <b>RGS</b> (Remote Graphics Software) product. " +
            "His experience in the graphics space was just what was needed for a " +
            "successful and performant product. Here his skills centered on C++, OO A&D, multi-threaded support, ICE, Qt, " +
            "cross platform support, and organizing team dynamics using Agile (XP, Scrum) techniques.</p><br/>" +
            "<p>John's final project got him involved in helping to port the Palm webOS operating system to run on " +
            "a PC desktop. " +
            "There were many challenges, very complex builds, and fun problems to solve. webOS on PC was successfully " +
            "ported but was later " +
            "mothballed when HP decided to stop investing in webOS. Shortly after the close of the project John took early " +
            "retirement from HP, and decided to pursue other career interests.",
        projects: [
            {
                id: "rgs",
                href: "http://www8.hp.com/us/en/campaigns/workstations/remote-graphics-software.html",
                title: "HP Remote Graphics<br/>Software",
                orientation: "wide",
                hostenv: "Website",
                indata: {xoff: 50, yoff: 0, zoom: 150},
                outdata: {xoff: 50, yoff: 0, zoom: 100}
            },
            {
                id: "webos",
                href: "http://www.hpwebos.com/us/",
                title: "webOS on PC",
                orientation: "wide",
                hostenv: "Website",
                indata: {xoff: 100, yoff: 70, zoom: 150},
                outdata: {xoff: 100, yoff: 70, zoom: 100}
            },
            {
                id: "graphicsdevice",
                href: "",
                title: "HPUX Graphics<br/>Device Drivers",
                orientation: "wide",
                hostenv: "",
                indata: {xoff: 50, yoff: 50, zoom: 150},
                outdata: {xoff: 50, yoff: 50, zoom: 100}
            },
            {
                id: "spacer1",
                href: "",
                title: "",
                orientation: "tall",
                hostenv: "",
                indata: {xoff: 0, yoff: 0, zoom: 100},
                outdata: {xoff: 0, yoff: 0, zoom: 100}
            },
            {
                id: "x11",
                href: "http://en.wikipedia.org/wiki/X_Window_System",
                title: "X11 Windows<br/>System",
                orientation: "wide",
                hostenv: "Website",
                indata: {xoff: 50, yoff: 100, zoom: 150},
                outdata: {xoff: 50, yoff: 50, zoom: 100}
            }
        ]
    };

    $scope.seismicProjects = {
        title: "Seismic Data Acquisition and Processing @ SSC and",
        class: "seismic",
        titleImage: "images/hess.jpg",
        periodOfWork: "9/1979 - 8/1986",
        summary: "" +
            "<p>John started work out of school as a Geophysical Engineer, working for SSC and Amerada Hess Research. " +
            "At SSC, he worked in the field as an Observer on a Seismic Crew shooting and gathering seismic data. He was " +
            "promoted to the Tulsa office to run their Seismic Data Processing lab. He was responsible for producing " +
            "accurate seismic images of the subsurface for SSC's clients.</p><br/>" +
            "<p>John then hired on to work in the Amerada Hess Geophysics Research Lab in Tulsa, OK. " +
            "He worked with a team of scientists " +
            "experimenting on various image processing techniques to better image oil reserves in the " +
            "Gulf of Mexico and throughout America.",
        projects: [
            {
                id: "seismicprocessing",
                //href: "http://www.hess.com/",
                href: "http://www.hess.com/technology/finding-oil-and-gas/quality-of-seismic",
                title: "Seismic Data<br/>Processing<br/>@ Amerada Hess",
                orientation: "tall",
                hostenv: "Website",
                indata: {xoff: 10, yoff: 0, zoom: 150},
                outdata: {xoff: 10, yoff: 20, zoom: 100}
            },
            {
                id: "seismicacquisition",
                href: "",
                title: "Seismic Data<br/>Acquisition<br/>@ Seismograph<br/>Service<br/>Corporation",
                orientation: "wide",
                hostenv: "",
                indata: {xoff: 0, yoff: 0, zoom: 150},
                outdata: {xoff: 0, yoff: 0, zoom: 100}
            }
        ]
    };
}])

.directive('projects', [function() {
    return {
        restrict: 'E',
        templateUrl: './views/work/projects.html',
        scope: true, // there's one of these for each project
        link: function (scope, element, attrs) {
            scope.projects = scope.$eval(attrs.work);

            scope.showSummary = false;
            scope.$on('showSummaries', function(event, show) {
                scope.showSummary = show;
            });

            scope.toggleSummary = function() {
                scope.showSummary = !scope.showSummary;
            };
        }
    }
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
               if (displaOverlay) {
                   displayOverlay(displaOverlay);
                   setFontSize(h2, h2size);
                   setFontSize(h4, h4size);
                   centerOverlayTitle();
               } else {
                   setFontSize(h2, h2size);
                   setFontSize(h4, h4size);
                   centerOverlayTitle();
                   displayOverlay(displaOverlay);
               }
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

