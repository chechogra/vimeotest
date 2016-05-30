(function() {
  'use strict';

  angular
    .module('vimeotest')
    .directive('sidenav', sidenavDirective);

  /** @ngInject */
  function sidenavDirective() {
    return{
      restrict: 'E',
      replace: true,
      templateUrl: 'app/shared/sidenav/sidenav.html'
    }
  }
})();
