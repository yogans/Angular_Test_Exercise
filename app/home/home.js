(function (angular) {
  'use strict';

  angular.module('univExamResults.home', ['ngRoute'])

      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
          templateUrl: '../home/home.html',
          controller: 'homeCtrl'
        });
      }])

      .controller('homeCtrl',function () {

      });

})(window.angular);