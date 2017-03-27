(function (angular) {

  'use strict';

  angular.module('univExamResults',
    ['ngRoute',
    'univExamResults.home',
    'univExamResults.results',
    'univExamResults.about',
    'univExamResults.resultHeader',
    'univExamResults.copyright',
    'univExamResults.menulist-directive'])
    
    .config(['$locationProvider','$routeProvider','resultHeaderProvider',function($locationProvider,$routeProvider,resultHeaderProvider){
      
      $locationProvider.hashPrefix('!');
      $routeProvider.otherwise({redirectTo:'/home'});
      
    
      resultHeaderProvider.setYear("Nov 2016");
    }])
    
    .controller('HomePageCtrl', ['$scope','copyright',function HomePageCtrl($scope,copyright) {
      
      $scope.menuItems=[
        "Home",
        "Results",
        "About"
        ];
        
      $scope.copyrightText = copyright;
      
    }]);
    
})(window.angular);