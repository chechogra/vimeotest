(function () {
  'use strict';

  angular
    .module('vimeotest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        resolve: {/* @ngInject */
          categories: function(CategoryFactory){
            return CategoryFactory.getCategories();
          }
        }
      })
      .state('main.category', {
        url: '/category/:categoryId',
        resolve: {/* @ngInject */

        },
        onEnter: function($state, $stateParams, categories){
          if (!$stateParams.categoryId && categories && categories.data && categories.data.data
            && categories.data.data.length > 0) {
            var defaultCategoryId = categories.data.data[0].uri.split('/').pop();
            $state.go('main.category', {'categoryId': defaultCategoryId });
          }
        },
        views: {
          'content@': {
            templateUrl: 'app/components/category/category.html',
            controller: 'CategoryController',
            controllerAs: 'categoryCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/category/');
  }

})();
