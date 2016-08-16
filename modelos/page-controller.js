(function(){
    "use strict";

    angular.module('[[app]]')
        .controller('[[ctrl]]Ctrl', [[ctrl]]Ctrl);

    ////////////////////////////

    /**
     * Função que define o controller da tela
     * @memberof [[app]]
     * @function [[ctrl]]Ctrl
     * @param {Object} $scope
     */
    function [[ctrl]]Ctrl ($scope) {
        var vm = this;

        // bindings
        vm.titulo = "Olá mundo!";

        // ações
        vm.buttonClick = _buttonClick;

        // init
        __init();

        ////////////////////////////////

        /**
         * Função que inicializa o controller
         * @memberof [[ctrl]]Ctrl
         * @function __init
         */
        function __init () {
            // inicializa
        }

        /**
         * Função que captura o clique num botão
         * @memberof [[ctrl]]Ctrl
         * @function _buttonClick
         * @param {}
         * @returns {}
         */
        function _buttonClick () {
            // ação do botão
        }
    }
    [[ctrl]]Ctrl.$inject = ['$scope'];

})();
