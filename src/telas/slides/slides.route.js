(function(){
    "use strict";

    angular.module('cdo-informativo')
        .config(_slidesConfig);

    //////////////////////////

    /**
     * Função de configuração de rotas
     * @memberof cbo-informativo
     * @function _slidesConfig
     * @param {Provider} $routeProvider
     */
    function _slidesConfig ($routeProvider) {
        $routeProvider
            .when('/slides', {
                templateUrl: 'telas/slides/slides.html',
                controller: 'SlidesCtrl',
                controllerAs: 'vm'
            })
            .otherwise('/slides');
    }
    _slidesConfig.$inject = ['$routeProvider'];

})();
