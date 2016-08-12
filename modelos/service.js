(function(){
    'use strict';

    /**
    * @description [[desc]]
    * @author [seu nome <seu email>]
    * @memberof app
    * @version 1.0.0
    */
    angular
        .module('app')
        .factory('[[nome]]', [[nome]]);

    /** injeção de dependencias do service **/
    [[nome]].$inject = [/* inclua aqui os módulos para injeção de dependências */];

    /**
    * @memberof app
    * @ngdoc factory
    * @name [[nome]]
    * @param {}
    * @description
    *   [[desc]]
    */
    function [[nome]] (/* inclua aqui os módulos para injeção de dependências */) {
        var _return = {
            metodoDoServico: _metodoDoServico
        };

        return _return;

        /////////////// implementaçõs ///////////////

        /**
        * metodoDoServico
        * @memberof [[nome]]
        * @param {}
        * @returns {}
        */
        function _metodoDoServico () {
            return null;
        }
    }
})();
