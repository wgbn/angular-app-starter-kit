(function(){
    "use strict";

    angular.module('cdo-informativo')
        .controller('SlidesCtrl', _slidesCtrl);

    ////////////////////////////

    /**
     * Função que define o controller da tela Slides
     * @memberof cbo-informativo
     * @function _slidesCtrl
     * @param {Object} $scope
     */
    function _slidesCtrl ($scope) {
        var vm = this;

        // bindings
        vm.titulo = "Olá mundo!";

        // ações

        // init
        __init();

        ////////////////////////////////

        /**
         * Função que inicializa o controller
         * @memberof _slidesCtrl
         * @function __init
         */
        function __init () {
            //
        }
    }
    _slidesCtrl.$inject = ['$scope'];

})();
