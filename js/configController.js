(function() {

    'use strict';

    angular.module('TicTacToeApp')
        .controller('ConfigureController', ConfigureController);

    ConfigureController.$inject = ['MainAppService'];

    function ConfigureController(MainAppService) {
        var ctrl = this;

        ctrl.player1 = '';
        ctrl.player2 = '';

        ctrl.changeName = function() {
            MainAppService.player1 = ctrl.player1;
            MainAppService.player2 = ctrl.player2;
            MainAppService.changes = true;
        };

    };

})();