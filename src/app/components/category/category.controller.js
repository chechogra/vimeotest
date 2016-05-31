(function() {
  'use strict';

  angular
    .module('vimeotest')
    .controller('CategoryController', CategoryController);

  /** @ngInject */
  function CategoryController($log, categories) {
    $log.debug(categories);
  }
})();
