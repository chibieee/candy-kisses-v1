(function() {
    'use strict';
    
    angular
        .module('app.layout')
        .directive('ckNavbar', ckNavbar);
    
    function ckNavbar() {
        return {
            templateUrl: 'app/layout/navbar.html',
            restrict: 'E',
            scope: {},
            controller: NavbarController,
            controllerAs: 'vm'
        }
    }
    
    NavbarController.$inject = ['$location'];
    
    function NavbarController($location) {
        var vm = this;
        
    }
})();