(function() {
  'use strict';

  angular
    .module('vimeotest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
