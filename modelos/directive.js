(function(){

    /**
    * @description [[desc]]
    * @author [seu nome <seu email>]
    * @memberof app
    * @version 1.0.0
    */
    angular
        .module('app')
        .directive('[[func]]', [[func]]);

    /**
    * @memberof app
    * @ngdoc directive
    * @scope {} (Options are true for a new inherited scope, false for shared scope, and either {} or object for isolate scope.)
    * @restrict E ([E]lement, [A]ttribute, and [C]lass, use @restrict ECA)
    * @name [[func]]
    * @param  {}
    * @description
    *   [[desc]]
    * @example
    *   Usage:
    *   <[[nome]]></[[nome]]>
    */
    function [[func]] () {
        var directive = {
            restrict: 'E',
            templateUrl: '[[path]]/[[nome]].directive.html',
            replace: true,
            scope: {
                // todos os 'atributos' passado para a diretiva.
                // [scopo] é o nome do atributo
                // [tipo-escopo] pode ser:
                //      '@' para vincular os valores vindos do controller {string, number, boolean},
                //      '=' para vincular variaveis vindas do controller {objetos, arrays}
                //      '&' para vincular ações vindas do controller {funções}
                // exemplo:
                //      nome: '@',
                //      post: '=',
                //      acao: '&',
                [scopo]: '[tipo-escopo]'
            },
            link: link[[func]],
            controller: ctrl[[func]],
            controllerAs: 'vm'
        };

        return directive;
    }

    /////////////////////// implementações ////////////////////

    /**
     * Permite [[func]] a manipular o DOM
     * @memberof [[func]]
     * @param {service} scope       scopo do elemento
     * @param {service} el          elemento raiz da diretiva
     * @param {service} attr        atributos do elemento
     * @param {MapController} vm    [[func]] controller
     */
    function link[[func]] (scope, el, attr, vm) {
        // manipulação do DOM da diretiva
    }

    /** injeção de dependencia do controller **/
    ctrl[[func]].$inject = ['$scope'];
    /**
     * Controller de [[func]]
     * @memberof [[func]
     * @param {Object} $scope
     */
    function ctrl[[func]] ($scope) {
        var vm = this;

        // bindings
        vm.nome = '[[nome]]';

        // ações
        vm.acao = _acao;

        // init
        __init();

        /////////// implementações //////////

        /**
         * Função que inicializa o controller
         * @memberof [[func]]
         * @function __init
         */
        function __init() {
            // inicializa
        }

        /**
         * Ação parsonalizada da diretiva
         * @memberof [[func]]
         * @function _acao
         * @param {}
         * @returns {}
         */
        function _acao () {
            // ação
        }
    }

})();


