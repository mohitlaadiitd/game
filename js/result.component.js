(function() {

    'use strict';

    angular.module('TicTacToeApp')
        .component('result', {
            templateUrl: 'js/templates/result.html',
            controller: ResultController,
            bindings: {
                winner: '&'
            }

        })

    ResultController.$inject = ['MainAppService', '$rootScope'];

    function ResultController(MainAppService, $rootScope) {
        var $ctrl = this;

        $ctrl.winner = "";

        var cancelListener = $rootScope.$on('result: ready', function(event, data) {
            var modal = $('.screen')[0];
            if (MainAppService.winner == 'red') {
                $ctrl.winner = MainAppService.player1;
                if (MainAppService.changes == false) {
                    $ctrl.winner = 'Player1'
                }
                modal.style.display = 'block';

            } else {
                $ctrl.winner = MainAppService.player2;
                if (MainAppService.changes == false) {
                    $ctrl.winner = 'Player2'
                }
                modal.style.display = 'block';
            }
        })

        $ctrl.hide = function() {
            var modal = $('.screen')[0];
            modal.style.display = 'none';
        }

        $ctrl.$onDestroy = function() {
            cancelListener();
        };

    };

})();