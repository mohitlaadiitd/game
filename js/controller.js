(function() {

    'use strict';

    angular.module('TicTacToeApp')
        .controller('MainAppController', MainAppController);

    MainAppController.$inject = ['MainAppService']

    function MainAppController(MainAppService) {
        var ctrl = this;

        MainAppService.player1 = ctrl.player1;
        MainAppService.player2 = ctrl.player2;


        ctrl.count = MainAppService.count;

        ctrl.clicked11 = MainAppService.clicked11;
        ctrl.clicked12 = MainAppService.clicked12;
        ctrl.clicked13 = MainAppService.clicked13;
        ctrl.clicked21 = MainAppService.clicked21;
        ctrl.clicked22 = MainAppService.clicked22;
        ctrl.clicked23 = MainAppService.clicked23;
        ctrl.clicked31 = MainAppService.clicked31;
        ctrl.clicked32 = MainAppService.clicked32;
        ctrl.clicked33 = MainAppService.clicked33;
    };

})();