
function random(quarters) {

        if(quarters > 0) {
            for (var i = quarters; i > 0; i--) {
                quarters -= 1;
                if ( Math.random() < 0.01 ){
             console.log("given", quarters)
            quarterswon = (Math.floor(Math.random()* 50) + 50);
            
            quarters += quarterswon;
            console.log("quarters won", quarterswon);
            console.log("quarters with me ", quarters);
        }
        else {
            console.log("you didnt win")
        }
    }
      
}
    else {
        console.log("sorry you dont have enough quarters")
    }
return random;
}
random(3);


