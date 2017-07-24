var daysUntilMyBirthday = 60; 


for(var daysUntilMyBirthday=0; daysUntilMyBirthday<=60; daysUntilMyBirthday++) {
    if(daysUntilMyBirthday >= 30) {
        console.log(daysUntilMyBirthday, "days until my birthday. Such a long time... :(");
    }
    else if(daysUntilMyBirthday < 30 && daysUntilMyBirthday > 5) {
          console.log(daysUntilMyBirthday, "It sounds excited!");

    }
    else  if(daysUntilMyBirthday <= 5 && daysUntilMyBirthday >= 1  ) {
         
         console.log(daysUntilMyBirthday, "DAYS UNTIL MY BIRTHDAY!!!");
    }
    else console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪ "); 
}