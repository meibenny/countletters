var myApp = angular.module('LetterCounterApp', ['ui.bootstrap']);
myApp.controller('LetterCounter', ['$scope', function ($scope) {
  $scope.checkboxModel = {
    ignoreCapitals: false
  }

  $scope.letterCounts = {};

  $scope.countLetters = function (title = '') {
    var textIn = title;
    if ($scope.checkboxModel.ignoreCapitals) {
      textIn = textIn.toLowerCase();
    }
    var charCount = {};
    var i;
    for (i = 0; i < textIn.length; i++) {
      if (!(textIn.charAt(i) == ' ')) {
        charCount[textIn.charAt(i)] = 0;
      }
    }
    for (i = 0; i < textIn.length; i++) {
      if (!(textIn.charAt(i) == ' ')) {
        charCount[textIn.charAt(i)] += 1;
      }
    }
    $scope.letterCounts = charCount;
  }
}]);
