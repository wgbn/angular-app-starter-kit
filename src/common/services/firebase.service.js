(function(){
    "use strict";

    angular.module('cdo-informativo')
        .factory('FireService', _fireService);

    /////////////////////////////

    /**
     * Função que cria o factory FireService
     * @memberof cdo-informativo
     * @function _fireService
     * @param {Object} $firebaseArray
     * @param {Object} $firebaseObject
     * @returns {}
     */
    function _fireService ($firebaseArray, $firebaseObject) {
        // locais
        var config = {
            apiKey: "AIzaSyDOkbjd0LGJ8SfrGWIweXG5X4eAqic0ETs",
            authDomain: "viva-salute.firebaseapp.com",
            databaseURL: "https://viva-salute.firebaseio.com",
            storageBucket: "viva-salute.appspot.com",
        };
        firebase.initializeApp(config);

        var _root = firebase.database().ref().child('informtivo');

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
            //
        }
    }
    _fireService.$inject = ['$firebaseArray', '$firebaseObject'];

})();
