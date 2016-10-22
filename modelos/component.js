(function () {
    "use strict";

    /**
     * [[desc]]
     * @memberof [[app]]
     */
    angular.module('[[app]]')
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

})();