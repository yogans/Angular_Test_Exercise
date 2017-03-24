app.controller('ResultsCtrl',['$scope','$http','resultService', 'resultHeader',function ResultCtrl($scope,$http,resultService,resultHeader){

  $scope.resultTitle = resultHeader.header;

  //variable data initialization
  $scope.pass = "";
  $scope.showResult = false;
  $scope.examResult = {};
  $scope.userName = "";

  var continueIteration = true;
  var showResultTable = false;
  var examResultObj = {};
  var userName;

  //**** Service call to get latest exchange rates from fixer.io */
  resultService.getResults("/Resources/Results.json").then(function(data){
    resultSet = data;
  });

  $scope.viewResults = function(){

   if(typeof $scope.regNum === "undefined" || $scope.regNum === ""){

     alert("Enter registration number!");

   }
   
   else if(typeof $scope.pass === "undefined" || $scope.pass === ""){

     alert("Enter password!");

   }

   else{

     showResultTable = false;
     continueIteration = true;
     examResultObj = {};

     angular.forEach(resultSet.records,function(value){

       if(continueIteration){

         if(value.Registration_Number === $scope.regNum){

           if(value.Registration_Number === $scope.regNum && value.Password != $scope.pass){

             continueIteration = false;
             $scope.pass = "";
             alert("Invalid Password!... Please try again.");

           }

           else{

             continueIteration = false;
             examResultObj = value.Marks;
             showResultTable = true;
             userName = value.Name;

           }

         }

       }

     })

     if(continueIteration && !showResultTable){

       $scope.pass = "";
       alert("Invalid Registration Number!... Please try again.");

     }

   }
   
   resultService.storeLocally(userName,examResultObj);
   $scope.showResult = showResultTable;
   $scope.examResult = examResultObj;
   $scope.userName = userName;
   
   $scope.total = 0;
   for(var key in examResultObj){
     console.log(examResultObj[key]);
     $scope.total += examResultObj[key];
   }
    
  };
  
  $scope.viewAnotherResult = function(){
    
    continueIteration = true;
    showResultTable = false;
    examResultObj = {};
    userName = "";
    $scope.showResult  = !$scope.showResult;
    $scope.regNum = "";
    $scope.pass = "";
    
  }

}]);
