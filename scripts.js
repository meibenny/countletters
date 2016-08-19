
var myApp = angular.module('LetterCounterApp', []);
myApp.controller('LetterCounter', ['$scope', function ($scope) {
  $scope.checkboxModel = {
    ignoreCapitals: false
  }
  $scope.countLetters =
    function (title = "") {
      var textIn = title;
      if ($scope.checkboxModel.ignoreCapitals) {
        textIn = textIn.toLowerCase();
      }
      var char_count = new Object();
      var textIn_length = textIn.length;
      for (var i = 0; i < textIn_length; i++) {
        if (!(textIn.charAt(i) == " ")) {
          char_count[textIn.charAt(i)] = 0;
        }
      }
      for (var i = 0; i < textIn_length; i++) {
        if (!(textIn.charAt(i) == " ")) {
          char_count[textIn.charAt(i)] += 1;
        }
      }
      textIn = "";
      for (var eachProperty in char_count) {
        textIn += eachProperty + " " + char_count[eachProperty] + "\n";
      }
      return textIn;
    };
}]);