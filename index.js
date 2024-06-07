//loops for String
var greeting = "Hello World"
for (var j = 0 ;  j< 10 ; j++){
    for(var i = 0 ; i < greeting.length ; i++)

    document.write( greeting[i])
     document.write("<br/>")
}

  //nested array
  let nestedArray = [1, 2, 3, 5, 8, [9 , 6]];
let sum = 0;

for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        sum += nestedArray[i][j];
    }
}

console.log("The sum of all numbers in the nested array is: " + sum);