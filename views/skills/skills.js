portfolioApp.controller('SkillsCtrl', ['$rootScope', '$scope',
                               function($rootScope,   $scope) {
    $rootScope.selectedPage = 'skills';
    $scope.skillList = [
        {   id: "Web",
            skills: [
                {   title: "HTML",
                    href: ""
                },
                {   title: "CSS/LESS",
                    href: ""
                },
                {   title: "JavaScript",
                    href: ""
                },
                {   title: "AngularJS/SPA",
                    href: ""
                },
                {   title: "jQuery",
                    href: ""
                },
                {   title: "Twitter-Bootstrap",
                    href: ""
                },
                {   title: "REST",
                    href: ""
                },
                {   title: "Python/Flask",
                    href: ""
                }
            ],
            summary: ""
        },
        {
            id: "Language",
            skills: [
                {   title: "JavaScript",
                    href: ""
                },
                {   title: "Python",
                    href: ""
                },
                {   title: "C/C++",
                    href: ""
                },
                {   title: "Bash/Shell Scripting",
                    href: ""
                }
            ],
            summary: ""
        },
        {   id: "OS",
            skills: [
                {   title: "Mac OS X",
                    href: ""
                },
                {   title: "Windows (Win7 / Vista, XP, some Win8)",
                    href: ""
                },
                {   title: "Linux (Red Hat / Ubuntu)",
                    href: ""
                },
                {   title: "Cygwin",
                    href: ""
                }
            ],
            summary: ""
        },
        {   id: "Framework",
            skills: [
                {   title: "AngularJS",
                    href: ""
                },
                {   title: "jQuery",
                    href: ""
                },
                {   title: "Twitter-Bootstrap",
                    href: ""
                },
                {   title: "Python/Flask",
                    href: ""
                },
                {   title: "Qt",
                    href: ""
                },
                {   title: "boost",
                    href: ""
                },
                {   title: "STL",
                    href: ""
                },
                {   title: "ICE",
                    href: ""
                }
            ],
            summary: ""
        },
        {   id: "Methodology",
            skills: [
                {   title: "BDD/TDD",
                    href: ""
                },
                {   title: "Scrum",
                    href: ""
                },
                {   title: "XP",
                    href: ""
                },
                {   title: "Incremental/Spiral",
                    href: ""
                },
                {   title: "Waterfall",
                    href: ""
                }
            ],
            summary: ""
        },
        {    id: "IDE",
            skills: [
                {   title: "JetBrains",
                    href: ""
                },
                {   title: "Visual Studio",
                    href: ""
                },
                {   title: "Vi/Vim/Terminal/Shell",
                    href: ""
                }
            ],
            summary: ""
        },
        {   id: "Revision Control",
            skills: [
                {   title: "Git/GitHub",
                    href: ""
                },
                {   title: "Subversion",
                    href: ""
                },
                {   title: "BitKeeper",
                    href: ""
                },
                {   title: "Clearcase",
                    href: ""
                },
                {   title: "RCS/SCCS",
                    href: ""
                }
            ],
            summary: ""
        },
        {   id: "Testing",
            skills: [
                {   title: "BDD/TDD",
                    href: ""
                },
                {   title: "Jasmin/Protractor/Selenium",
                    href: ""
                },
                {   title: "Python's unittest",
                    href: ""
                }
            ],
            summary: ""
        },
        {   id: "Build",
            skills: [
                {   title: "Gulp",
                    href: ""
                },
                {   title: "Visual Studio",
                    href: ""
                },
                {   title: "qmake",
                    href: ""
                },
                {   title: "Make/NMake/iMake",
                    href: ""
                }
            ],
            summary: ""
        },
        {   id: "DBMS",
            skills: [
                {   title: "SQLite",
                    href: ""
                },
                {   title: "Flask-SQLAlchemy ORM",
                    href: ""
                }
            ],
            summary: ""
        },
        {   id: "Book",
            skills: [
                {   title: "Soft Skills - The software developer's life manual - John Z. Sonmez",
                    href: "http://amzn.com/1617292397"
                },
                {   title: "JavaScript: The Good Parts - Douglass Crockford",
                    href: "http://amzn.com/0596517742"
                },
                {   title: "JavaScript Patterns - Stoyan Stefanov",
                    href: "http://amzn.com/0596806752"
                },
                {   title: "CSS Mastery - Andy Budd",
                    href: "http://amzn.com/1430223979"
                },
                {   title: "Flask Web Development - Miguel Grinberg",
                    href: "http://amzn.com/1449372627"
                },
                {   title: "Effective C++ - Scott Meyers",
                    href: "http://amzn.com/0321334876"
                },
                {   title: "Design Patterns - GOF (Gamma, Helm, Johnson, Vlissides",
                    href: "http://amzn.com/0201633612"
                },
                {   title: "Domain Driven Design - Eric Evans",
                    href: "http://amzn.com/0321125215"
                },
                {   title: "Advance Programming in the UNIX Environment - Stevens, Rago",
                    href: "http://amzn.com/0321637739"
                },
                {   title: "UNIX Network Programming - Stevens",
                    href: "http://amzn.com/0131411551"
                },
                {   title: "Programming Windows Security - Brown",
                    href: "http://amzn.com/0201604426"
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
