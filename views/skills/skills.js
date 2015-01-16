portfolioApp.controller('SkillsCtrl', ['$rootScope', '$scope',
                               function($rootScope,   $scope) {
    $rootScope.selectedPage = 'skills';
    $scope.skillList = [
        {   id: "Web",
            skills: [
                {   title: "HTML",
                    href: "",
                    summary: ""
                },
                {   title: "CSS/LESS",
                    href: "",
                    summary: ""
                },
                {   title: "JavaScript",
                    href: "",
                    summary: ""
                },
                {   title: "AngularJS/SPA",
                    href: "",
                    summary: ""
                },
                {   title: "jQuery",
                    href: "",
                    summary: ""
                },
                {   title: "Twitter-Bootstrap",
                    href: "",
                    summary: ""
                },
                {   title: "REST",
                    href: "",
                    summary: ""
                },
                {   title: "Python/Flask",
                    href: "",
                    summary: ""
                }
            ]
        },
        {
            id: "Language",
            skills: [
                {   title: "JavaScript",
                    href: "",
                    summary: ""
                },
                {   title: "Python",
                    href: "",
                    summary: ""
                },
                {   title: "C/C++",
                    href: "",
                    summary: ""
                },
                {   title: "Bash/Shell Scripting",
                    href: "",
                    summary: ""
                }
            ]
        },
        {   id: "OS",
            skills: [
                {   title: "Mac OS X",
                    href: "",
                    summary: ""
                },
                {   title: "Windows (Win7 / Vista, XP, some Win8)",
                    href: "",
                    summary: ""
                },
                {   title: "Linux (Red Hat / Ubuntu)",
                    href: "",
                    summary: ""
                },
                {   title: "Cygwin",
                    href: "",
                    summary: ""
                }
            ]
        },
        {   id: "Framework",
            skills: [
                {   title: "AngularJS",
                    href: "",
                    summary: ""
                },
                {   title: "jQuery",
                    href: "",
                    summary: ""
                },
                {   title: "Twitter-Bootstrap",
                    href: "",
                    summary: ""
                },
                {   title: "Python/Flask",
                    href: "",
                    summary: ""
                },
                {   title: "Qt",
                    href: "",
                    summary: ""
                },
                {   title: "boost",
                    href: "",
                    summary: ""
                },
                {   title: "STL",
                    href: "",
                    summary: ""
                },
                {   title: "ICE",
                    href: "",
                    summary: ""
                }
            ]
        },
        {   id: "Methodology",
            skills: [
                {   title: "BDD/TDD",
                    href: "",
                    summary: ""
                },
                {   title: "Scrum",
                    href: "",
                    summary: ""
                },
                {   title: "XP",
                    href: "",
                    summary: ""
                },
                {   title: "Incremental/Spiral",
                    href: "",
                    summary: ""
                },
                {   title: "Waterfall",
                    href: "",
                    summary: ""
                }
            ]
        },
        {    id: "IDE",
            skills: [
                {   title: "JetBrains",
                    href: "",
                    summary: ""
                },
                {   title: "Visual Studio",
                    href: "",
                    summary: ""
                },
                {   title: "Vi/Vim/Terminal/Shell",
                    href: "",
                    summary: ""
                }
            ]
        },
        {   id: "Revision Control",
            skills: [
                {   title: "Git/GitHub",
                    href: "",
                    summary: ""
                },
                {   title: "Subversion",
                    href: "",
                    summary: ""
                },
                {   title: "BitKeeper",
                    href: "",
                    summary: ""
                },
                {   title: "Clearcase",
                    href: "",
                    summary: ""
                },
                {   title: "RCS/SCCS",
                    href: "",
                    summary: ""
                }
            ]
        },
        {   id: "Testing",
            skills: [
                {   title: "BDD/TDD",
                    href: "",
                    summary: ""
                },
                {   title: "Jasmin/Protractor/Selenium",
                    href: "",
                    summary: ""
                },
                {   title: "Python's unittest",
                    href: "",
                    summary: ""
                }
            ]
        },
        {   id: "Build",
            skills: [
                {   title: "Gulp",
                    href: "",
                    summary: ""
                },
                {   title: "Visual Studio",
                    href: "",
                    summary: ""
                },
                {   title: "qmake",
                    href: "",
                    summary: ""
                },
                {   title: "Make/NMake/iMake",
                    href: "",
                    summary: ""
                }
            ]
        },
        {   id: "DBMS",
            skills: [
                {   title: "SQLite",
                    href: "",
                    summary: ""
                },
                {   title: "Flask-SQLAlchemy ORM",
                    href: "",
                    summary: ""
                }
            ]
        },
        {   id: "Book",
            skills: [
                {   title: "Soft Skills - The software developer's life manual - John Z. Sonmez",
                    href: "http://amzn.com/1617292397",
                    summary: ""
                },
                {   title: "JavaScript: The Good Parts - Douglass Crockford",
                    href: "http://amzn.com/0596517742",
                    summary: ""
                },
                {   title: "JavaScript Patterns - Stoyan Stefanov",
                    href: "http://amzn.com/0596806752",
                    summary: ""
                },
                {   title: "CSS Mastery - Andy Budd",
                    href: "http://amzn.com/1430223979",
                    summary: ""
                },
                {   title: "Flask Web Development - Miguel Grinberg",
                    href: "http://amzn.com/1449372627",
                    summary: ""
                },
                {   title: "Effective C++ - Scott Meyers",
                    href: "http://amzn.com/0321334876",
                    summary: ""
                },
                {   title: "Design Patterns - GOF (Gamma, Helm, Johnson, Vlissides",
                    href: "http://amzn.com/0201633612",
                    summary: ""
                },
                {   title: "Domain Driven Design - Eric Evans",
                    href: "http://amzn.com/0321125215",
                    summary: ""
                },
                {   title: "Advance Programming in the UNIX Environment - Stevens, Rago",
                    href: "http://amzn.com/0321637739",
                    summary: ""
                },
                {   title: "UNIX Network Programming - Stevens",
                    href: "http://amzn.com/0131411551",
                    summary: ""
                },
                {   title: "Programming Windows Security - Brown",
                    href: "http://amzn.com/0201604426",
                    summary: ""
                }
            ],
            summary: ""
        }
    ]
}])

.directive('skill', [function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<li class="skill"> <a ng-href={{skill.href}} target="_blank">{{skill.title}}</a> </li>'
    }
}]);
