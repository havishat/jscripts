
function printRange(Start, Stop, skip) {

  for (var i = Start; i < Stop; i+skip) {
        
       console.log(i);
       i = i + skip;
  }
}
printRange(2,10,2);
