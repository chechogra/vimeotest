(function() {
  'use strict';

  angular
    .module('vimeotest')
    .constant('vimeoConfig', {
      'API_HOST': 'https://api.vimeo.com/',
      'ACCESS_TOKEN': '1b6ac9d70dc6d8d6ff5b5c47b99fb371',
      'CATEGORIES_URL': 'categories'
    });

})();
