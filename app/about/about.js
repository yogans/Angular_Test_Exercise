(function (angular) {
  'use strict';

  angular.module('univExamResults.about', ['ngRoute'])

      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/about', {
          templateUrl: '../about/about.html',
          controller: 'aboutCtrl',
        });
      }])

      .controller('aboutCtrl',function () {

      });

})(window.angular);