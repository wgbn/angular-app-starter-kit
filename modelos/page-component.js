(function () {
    "use strict";

    /**
     * [[desc]]
     * @memberof [[app]]
     */
    angular.module('[[app]]')
        .config([[ctrl]]Config)
        .component('[[func]]Component', {
            transclude: false,
            templateUrl: './[[path]]/[[nome]]/[[nome]].component.html',
            controller: [[ctrl]]Controller,
            bindings: {
                bind1: '<', // input
                bind2: '@', // input
                bind3: '=', // two-way bind 
                bind4: '&'  // outpot
            }
        });


    /**
     * Injeção de depenências do controller
     */
    [[ctrl]]Controller.$inject = ['$scope'];

    /**
     * Função que define o controller do component
     * @memberof [[func]]Component
     * @function [[ctrl]]Controller
     * @param {Object} $scope
     */
    function [[ctrl]]Controller($scope) {
        var ctrl = this;

        // view bindings
        ctrl.titulo = '[[ctrl]]';

        // actions

        // events

        ////////////////////////
    }

    /**
     * Função de configuração de rotas
     * @memberof [[app]]
     * @function [[ctrl]]Config
     * @param {Provider} $routeProvider
     */
    function [[ctrl]]Config($routeProvider) {
        $routeProvider.when('[[rota]]', {
            template: '<[[nome]]-component></[[nome]]-component>'
        });

        // descomente esta linha caso esta rota seja a rota padrão da aplicação
        //$routeProvider.otherwise('[[rota]]');
    }
    [[ctrl]]Config.$inject = ['$routeProvider'];

})();