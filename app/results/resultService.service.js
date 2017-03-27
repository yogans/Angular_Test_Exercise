(function (angular) {

  'use strict';
  
  function resultService($http,$q){
    
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

  }
    
  angular.module('univExamResults.results',[])
    .factory('resultService',['$http','$q',resultService]);

})(window.angular);