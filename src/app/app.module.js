(function() {
    'use strict';
    
    angular
        .module('app', [
        'ngRoute',
        'app.landing',
        'app.layout',
        'app.shop'
    ])
    .config(configFunction);
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        })
    }
})();