(function(){
    "use strict";

    /**
     * Service para caso queira usar o Firebase em seu aplicativo [recomendado]
     * Firebase é um serviço de Real-time Database que torna aplicações angular reativas
     * https://console.firebase.google.com/
     */

    angular.module('app')
        .factory('FireService', _fireService);

    /////////////////////////////

    /**
     * Função que cria o factory FireService
     * @memberof app
     * @function _fireService
     * @param {Object} $firebaseArray
     * @param {Object} $firebaseObject
     * @returns {}
     */
    function _fireService ($firebaseArray, $firebaseObject) {
        // locais
        var config = {
            apiKey: "[api-key]",
            authDomain: "[app-name].firebaseapp.com",
            databaseURL: "https://[app-name].firebaseio.com",
            storageBucket: "[app-name].appspot.com"
        };
        firebase.initializeApp(config);

        var _root = firebase.database().ref().child('[root]');

        // interface
        var _return = {
            init:   _init
        };

        return _return;

        /////////////////////////////

        /**
         * Função que inicializa
         * @memberof _fireService
         * @function _init
         */
        function _init () {
            // inicializa o serviço
        }
    }
    _fireService.$inject = ['$firebaseArray', '$firebaseObject'];

})();
