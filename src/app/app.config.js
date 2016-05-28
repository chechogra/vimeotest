(function() {
  'use strict';

  angular
    .module('vimeotest')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
