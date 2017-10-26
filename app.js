var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope){
  $scope.list = [
    'wash the car',
    'clean the house',
    'walk the dog',
    'mop the floor',
    'get the dry clean'
  ];
  //add item
  $scope.addItem = function(newItem){
    $scope.temp = false;
    $scope.list.push(newItem)
    $scope.item = "";
  };
  //delete list item
  $scope.deleteRow = function(item){
    $scope.list.splice($scope.list.indexOf(item), 1);
  };
  //add plural if multiple
  $scope.plural = function(list){
    return list.length > 1 || list.length == 0 ? 's' :'';
  };

  $scope.addTemp = function(item) {
    if($scope.temp) $scope.list.pop();
    else if($scope.addName) $scope.temp = true;
    if($scope.addName)
    $scope.list.push($scope.addName);
    else $scope.temp = false;
    };

});
