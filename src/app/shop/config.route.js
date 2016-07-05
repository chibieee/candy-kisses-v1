(function() {
    'use strict';
    
    angular
        .module('app.shop')
        .config(configFunction)
    
    configFunction.$inject = ['$routeProvider'];
    
    function configFunction($routeProvider) {
        $routeProvider.when('/candycake', {
            templateUrl: 'app/shop/candycake.html',
            restrict: 'E'
        })
        
        $routeProvider.when('/candybouquet', {
            templateUrl: 'app/shop/candybouquet.html',
            restrict: 'E'
        })
    }
})();