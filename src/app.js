(function(){
    "use strict";

    angular.module('app', ['ngRoute', 'ngSanitize'])
        .config(_configBlock)
        .run(_runBlock);

    ////////////////////////////////

    /**
     * Função que configura o app
     * @memberof app
     * @function _configBlock
     */
    function _configBlock (/* inclua aqui os módulos para injeção de dependências */) {
        // configuração
    }
    _configBlock.$inject = [/* inclua aqui os módulos para injeção de dependências */];

    /**
     * Função que executa o start inicial
     * @memberof app
     * @function _runBlock
     */
    function _runBlock (/* inclua aqui os módulos para injeção de dependências */) {
        // run app
    }
    _runBlock.$inject = [/* inclua aqui os módulos para injeção de dependências */];

})();
