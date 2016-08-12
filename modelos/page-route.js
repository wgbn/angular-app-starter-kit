(function(){
    "use strict";

    angular.module('app')
        .config([[func]]Config);

    //////////////////////////

    /**
     * Função de configuração de rotas
     * @memberof app
     * @function [[func]]Config
     * @param {Provider} $routeProvider
     */
    function [[func]]Config ($routeProvider) {
        $routeProvider
            .when('/[[rota]]', {
                templateUrl: '[[path]]/[[nome]]/[[nome]].html',
                controller: '[[func]]Ctrl',
                controllerAs: 'vm'
            });

        // descomente esta linha caso essa rota seja a padrão para rotas que não existem
        //$routeProvider.otherwise('/[[rota]]');
    }
    [[func]]Config.$inject = ['$routeProvider'];

})();
