(function() {

    'use strict';

    angular.module('TicTacToeApp')
        .service('MainAppService', MainAppService);
    MainAppService.$inject = ['$rootScope']

    function MainAppService($rootScope) {
        var service = this;
        service.count = 0;
        var Element;
        var count = service.count;

        service.clicked11 = function() {
            service.press11 = true;
            Element = $('#box11')[0];
            service.colour(Element);
            service.check(Element);
            count++;
        };
        service.clicked12 = function() {
            service.press12 = true;
            Element = $('#box12')[0];
            service.colour(Element);
            service.check(Element);
            count++;
        };
        service.clicked13 = function() {
            service.press13 = true;
            Element = $('#box13')[0];
            service.colour(Element);
            service.check(Element);
            count++;
        };
        service.clicked21 = function() {
            service.press21 = true;
            Element = $('#box21')[0];
            service.colour(Element);
            service.check(Element);
            count++;
        };
        service.clicked22 = function() {
            service.press22 = true;
            Element = $('#box22')[0];
            service.colour(Element);
            service.check(Element);
            count++;
        };
        service.clicked23 = function() {
            service.press23 = true;
            Element = $('#box23')[0];
            service.colour(Element);
            service.check(Element);
            count++;
        };
        service.clicked31 = function() {
            service.press31 = true;
            Element = $('#box31')[0];
            service.colour(Element);
            service.check(Element);
            count++;
        };
        service.clicked32 = function() {
            service.press32 = true;
            Element = $('#box32')[0];
            service.colour(Element);
            service.check(Element);
            count++;
        };
        service.clicked33 = function() {
            service.press33 = true;
            Element = $('#box33')[0];
            service.colour(Element);
            service.check(Element);
            count++;
        };

        service.check = function(Element) {
            console.log(Element)
            var current = Element.id;
            // these all methods are for box11
            if ((current === 'box11') && (Element.x == 'x')) {
                if (($('#box12')[0].x == 'x' && $('#box13')[0].x == 'x') || (($('#box21')[0].x == 'x' && $('#box31')[0].x == 'x')) || (($('#box22')[0].x == 'x' && $('#box33')[0].x == 'x'))) {
                    service.winner = 'red';
                    service.result();

                }
            }
            if ((current === 'box11') && (Element.x == 'o')) {
                if (($('#box12')[0].x == 'o' && $('#box13')[0].x == 'o') || (($('#box21')[0].x == 'o' && $('#box31')[0].x == 'o')) || (($('#box22')[0].x == 'o' && $('#box33')[0].x == 'o'))) {
                    service.winner = 'green';
                    service.result();


                }
            }

            // these all methods are for box12
            if ((current === 'box12') && (Element.x == 'o')) {
                if (($('#box11')[0].x == 'o' && $('#box13')[0].x == 'o') || (($('#box22')[0].x == 'o' && $('#box32')[0].x == 'o'))) {
                    service.winner = 'green';
                    service.result();


                }
            }
            if ((current === 'box12') && (Element.x == 'x')) {
                if (($('#box11')[0].x == 'x' && $('#box13')[0].x == 'x') || (($('#box22')[0].x == 'x' && $('#box32')[0].x == 'x'))) {
                    service.winner = 'red';
                    service.result();

                }
            }

            // these all methods are for box13
            if ((current === 'box13') && (Element.x == 'x')) {
                if (($('#box12')[0].x == 'x' && $('#box11')[0].x == 'x') || (($('#box23')[0].x == 'x' && $('#box33')[0].x == 'x')) || (($('#box22')[0].x == 'x' && $('#box31')[0].x == 'x'))) {
                    service.winner = 'red';
                    service.result();

                }
            }
            if ((current === 'box13') && (Element.x == 'o')) {
                if (($('#box12')[0].x == 'o' && $('#box11')[0].x == 'o') || (($('#box23')[0].x == 'o' && $('#box33')[0].x == 'o')) || (($('#box22')[0].x == 'o' && $('#box31')[0].x == 'o'))) {
                    service.winner = 'green';
                    service.result();


                }
            }

            // these all methods are for box21
            if ((current === 'box21') && (Element.x == 'o')) {
                if (($('#box11')[0].x == 'o' && $('#box31')[0].x == 'o') || (($('#box22')[0].x == 'o' && $('#box23')[0].x == 'o'))) {
                    service.winner = 'green';
                    service.result();


                }
            }
            if ((current === 'box21') && (Element.x == 'x')) {
                if (($('#box11')[0].x == 'x' && $('#box31')[0].x == 'x') || (($('#box22')[0].x == 'x' && $('#box23')[0].x == 'x'))) {
                    service.winner = 'red';
                    service.result();

                }
            }

            // these all methods are for box22
            if ((current === 'box22') && (Element.x == 'x')) {
                if (($('#box11')[0].x == 'x' && $('#box33')[0].x == 'x') || (($('#box13')[0].x == 'x' && $('#box31')[0].x == 'x')) || (($('#box12')[0].x == 'x' && $('#box32')[0].x == 'x')) || (($('#box21')[0].x == 'x' && $('#box23')[0].x == 'x'))) {
                    service.winner = 'red';
                    service.result();

                }
            }
            if ((current === 'box22') && (Element.x == 'o')) {
                if (($('#box11')[0].x == 'o' && $('#box33')[0].x == 'o') || (($('#box13')[0].x == 'o' && $('#box31')[0].x == 'o')) || (($('#box12')[0].x == 'o' && $('#box32')[0].x == 'o')) || (($('#box21')[0].x == 'o' && $('#box23')[0].x == 'o'))) {
                    service.winner = 'green';
                    service.result();


                }
            }

            // these all methods are for box23
            if ((current === 'box23') && (Element.x == 'o')) {
                if (($('#box13')[0].x == 'o' && $('#box33')[0].x == 'o') || (($('#box22')[0].x == 'o' && $('#box21')[0].x == 'o'))) {
                    service.winner = 'green';
                    service.result();


                }
            }
            if ((current === 'box23') && (Element.x == 'x')) {
                if (($('#box13')[0].x == 'x' && $('#box33')[0].x == 'x') || (($('#box22')[0].x == 'x' && $('#box21')[0].x == 'x'))) {
                    service.winner = 'red';
                    service.result();

                }
            }

            // these all methods are for box31
            if ((current === 'box31') && (Element.x == 'x')) {
                if (($('#box11')[0].x == 'x' && $('#box21')[0].x == 'x') || (($('#box32')[0].x == 'x' && $('#box33')[0].x == 'x')) || (($('#box22')[0].x == 'x' && $('#box13')[0].x == 'x'))) {
                    service.winner = 'red';
                    service.result();

                }
            }
            if ((current === 'box31') && (Element.x == 'o')) {
                if (($('#box11')[0].x == 'o' && $('#box21')[0].x == 'o') || (($('#box32')[0].x == 'o' && $('#box33')[0].x == 'o')) || (($('#box22')[0].x == 'o' && $('#box13')[0].x == 'o'))) {
                    service.winner = 'green';
                    service.result();


                }
            }

            // these all methods are for box32
            if ((current === 'box32') && (Element.x == 'o')) {
                if (($('#box12')[0].x == 'o' && $('#box22')[0].x == 'o') || (($('#box31')[0].x == 'o' && $('#box33')[0].x == 'o'))) {
                    service.winner = 'green';
                    service.result();


                }
            }
            if ((current === 'box32') && (Element.x == 'x')) {
                if (($('#box12')[0].x == 'x' && $('#box22')[0].x == 'x') || (($('#box31')[0].x == 'x' && $('#box33')[0].x == 'x'))) {
                    service.winner = 'red';
                    service.result();

                }
            }

            // these all methods are for box33
            if ((current === 'box33') && (Element.x == 'x')) {
                if (($('#box11')[0].x == 'x' && $('#box22')[0].x == 'x') || (($('#box31')[0].x == 'x' && $('#box32')[0].x == 'x')) || (($('#box13')[0].x == 'x' && $('#box23')[0].x == 'x'))) {
                    service.winner = 'red';
                    service.result();

                }
            }
            if ((current === 'box33') && (Element.x == 'o')) {
                if (($('#box11')[0].x == 'o' && $('#box22')[0].x == 'o') || (($('#box31')[0].x == 'o' && $('#box32')[0].x == 'o')) || (($('#box13')[0].x == 'o' && $('#box23')[0].x == 'o'))) {
                    service.winner = 'green';
                    service.result();


                }
            }

        };
        // x is equivalent to red and o is equivalent to green
        service.colour = function(Element) {
            if (count % 2 == 0) {
                Element.style.background = 'url("../game/img/x.png") no-repeat center center/cover';
                Element.x = 'x';
            } else {
                Element.style.background = 'url("../game/img/o.jpg") no-repeat center center/cover';
                Element.x = 'o';
            }
        };

        service.result = function() {
            $rootScope.$broadcast('result: ready', { on: true });
        }

    };
})();
