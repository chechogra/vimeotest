(function() {
  'use strict';

  angular
    .module('vimeotest')
    .config(config);

  /** @ngInject */
  function config($translateProvider, $logProvider) {

    $translateProvider.preferredLanguage('en');

    $translateProvider.useStaticFilesLoader({
      prefix: 'app/languages/',
      suffix: '.json'
    });

    $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
      'en_SG': 'en',
      'en_UK': 'en',
      'en_US': 'en',
      'es_145': 'es',
      'es_ES': 'es'
    });

    $translateProvider.useLocalStorage();

    $translateProvider.determinePreferredLanguage(function () {
      return 'en';
    }).fallbackLanguage('en');

    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
