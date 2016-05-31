(function() {
  'use strict';

  angular
    .module('vimeotest')
    .factory('CategoryFactory', CategoryFactory);

  /** @ngInject */
  function CategoryFactory($http, vimeoConfig) {
    var categoryFactory = {};

    categoryFactory.getCategories = function(){
      return $http.get(vimeoConfig.API_HOST + vimeoConfig.CATEGORIES_URL);
    };

    return categoryFactory;
  }
})();
