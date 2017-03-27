(function (angular) {
  'use strict';
  
  angular.module('univExamResults.menulist-directive',[])
    
  .directive('menulist',function(){
    
    return{
      restrict : 'E',
      scope : {
        items : '='
      },
      template : '<ul class="nav navbar-nav"><li ng-repeat="menuItem in items"><a href="#!/{{ menuItem.toLowerCase() }}"> {{ menuItem }} </a><li></ul>'
    };
    
  })

})(window.angular);