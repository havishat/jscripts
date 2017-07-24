
function numbersOnly(arr) {

  
  var array = [];

  for(var i = 0; i < arr.length; i++) {

  
    if (typeof arr[i] == "number"){
      array.push(arr[i]);
    }
  }

  
  return array;

}

newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
console.log(newArray);