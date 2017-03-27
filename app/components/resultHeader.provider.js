(function (angular) {

  'use strict';

  angular.module('univExamResults.resultHeader',[])
    
    .provider("resultHeader", function () {
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
  

})(window.angular);