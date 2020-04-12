(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch_menu = "";
  $scope.message = "";

  $scope.check = function () {
    var numItems = countItems($scope.lunch_menu);

    $scope.colorClass = "text-success";
    if (numItems == 0) {
      $scope.message = "Please enter data first";
      $scope.colorClass = "text-danger";
    }
    else if (numItems <= 3)
      $scope.message = "Enjoy!";
    else if (numItems > 3)
      $scope.message = "Too much!";
  };

  function countItems(string) {
    if (!string)//empty string
      return 0;

    var chars = string.split(',');

    var numItems = 0;
    for (var i=0; i<chars.length; i++) {
      var item = chars[i];
      if (item)
        numItems++;
    }

    return numItems;
  }
}

})();
