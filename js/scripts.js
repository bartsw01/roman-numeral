//Business Logic
var userInput = 0;
var decimalArray = [1,   4,   5,   9,  10,  40,  50,  90, 100, 400, 500, 900,1000];
var romanArray = ["I","IV", "V","IX", "X","XL", "L","XC", "C","CD", "D","CM", "M"];
var index, romanOutput, decimalArray, romanArray;
    romanOutput = "";
var converter = function(userInput) {
  for (var index = 12; index >= 0; index--) {
    while (userInput >= decimalArray[index]) {
      romanOutput += romanArray[index];
      userInput -= decimalArray[index];
    }
  }
  return romanOutput;
}









// UI Logic
$(document).ready(function(){
  $(".roman-form").submit(function(event){
    event.preventDefault();

    userInput = $("#userNumber").val();
    var result = converter(userInput);

    $("#result").text(result);

  });
});

// var userInput = 0;
// var obj = {1: 'I', 2: 'II', 3: 'III', 4:'IV', 5:'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX'}
// var converter = function(userInput) {
//   var userArray = Array.from(userInput);
//   for (var i = 0; i < userArray.length; i++) {
//
//       if (userArray.length === 0) {
//         Object.values(obj)
//       }
//   }
// }
