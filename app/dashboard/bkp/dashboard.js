// app "One University Exam Results" declaration

var app=angular.module('univExamResults',['ngRoute']);

app.constant("copyright","Copyright 2016-2017");

app.provider("resultHeader", function () {
  var year;
  return {
    setYear: function (value) {
      year = value;
    },
    $get: function () {
      return {
        header: year + " - Exam Results"
      };
    }
  };
});

app.factory('resultService',['$http','$q',function($http,$q){
    return {
        getResults : function(url){
            var defer = $q.defer();
            $http.get(url).then(function(response){
                defer.resolve(response.data);
            },function(){
                defer.reject();
            });
            return defer.promise;
        },
        storeLocally : function(username,resObj){
            if(window.localStorage){
              localStorage.setItem("login record of "+username,angular.toJson(resObj));
            }
            else
              console.log("local storage not supported");
        }
    };
}]);

// ngRoute configuration
app.config(function($routeProvider,resultHeaderProvider) {
  $routeProvider
  
  .when('/',{
    templateUrl : '../Home/Home.html'
  })
  
  .when('/Results',{
    templateUrl : 'Pages/Results.html',
    controller : 'ResultsCtrl'
  })
  
  .when('/About',{
    templateUrl : 'Pages/About.html',
  })
  
  .otherwise('/',{
    templateUrl : 'Pages/Home.html'
  });
  
  resultHeaderProvider.setYear("Nov 2016")
  
});

//menulist directive definition

app.directive('menulist',function(){
  
  return{
  
  restrict : 'E',
  
  scope : {
    items : '='
  },
  
  template : '<ul class="nav navbar-nav"><li ng-repeat="menuItem in items"><a href="#{{ menuItem}}"> {{ menuItem }} </a><li></ul>'

  };
  
});

// Home page controller definition

app.controller('HomePageCtrl', ['$scope','copyright',function HomePageCtrl($scope,copyright) {
  $scope.menuItems=[
    "Home",
    "Results",
    "About"
    ];
  $scope.copyrightText = copyright;
}]);