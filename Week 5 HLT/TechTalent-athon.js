//assign race number randomly
let raceNumber = Math.floor(Math.random()*1000);


//created variable to indicate if runner registed early (09.30)=true or late(11.30) =false
let registrationTime = false;
    

//created variable for runners age
let runnerAge = 19;

//control flow statement to check that runner is 18 and over, and registered early(true)
if (runnerAge>18 && registrationTime == true){
    raceNumber += 1000 // 1000 added to their raceNumber if these conditions are met
//if runner is 18 or over and registered early they will have a 09.30 start time and a randomly generate  raceNumber (+1000)
    console.log (`Your race time is 09.30am. ${raceNumber} is your race number.`);

} else if (runnerAge >18) {
    console.log (`Your race time is 11.00am. ${raceNumber} is your race number.`);
}else if (runnerAge <18) {
    console.log (`Your race time is 12.30pm. ${raceNumber} is your race number.`);
}else {
    console.log (`Please go to the registration desk for further information.`); 
}

