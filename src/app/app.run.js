(function() {
  'use strict';

  angular
    .module('vimeotest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($http, vimeoConfig) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + vimeoConfig.ACCESS_TOKEN;
  }

})();
