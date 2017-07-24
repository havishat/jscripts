var penny = 0.01;
var value = 0;

//for(var day=1; day<=30; day++) {
    for(var i=0; i<=29;i++){
       value +=  penny * (Math.pow(2,i));
       console.log("days", i+1, "money", value);
      
  }



