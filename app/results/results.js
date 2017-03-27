(function (angular) {
  'use strict';
  
  angular.module('univExamResults.results', ['ngRoute'])

      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/results', {
          templateUrl: '../results/results.html',
          controller: 'ResultCtrl as rc'
        });
      }]);

})(window.angular);