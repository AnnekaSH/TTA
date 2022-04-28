//assign race number randomly
let raceNumber = Math.floor(Math.random()*1000);


//created variable to indicate if runner registed early (09.30)=true or late(11.30) =false
let registrationTime = false;
    

//created variable for runners age
let runnerAge = 19;

//control flow statement to check that runner is 18 and over, and registered early(true)
if (runnerAge>18 && registrationTime == true){
    raceNumber += 1000 // 1000 added to their raceNumber if these conditions are met
//if runner is over 18 and registered early they will have a 09.30 start time and a randomly generate  raceNumber (+1000)
    console.log (`Your race time is 09.30am. ${raceNumber} is your race number.`);
//if runner is over 18 and registrationTime is late (false) then they will have a race time of 11am and a random race number
} else if (runnerAge >18) {
    console.log (`Your race time is 11.00am. ${raceNumber} is your race number.`);
//if the runner is under 18 they will be told their race time of 12.30 and be told their random race number   
}else if (runnerAge <18) {
    console.log (`Your race time is 12.30pm. ${raceNumber} is your race number.`);
//if the runner is exactly 18 years old they are redirected to the registration desk    
}else {
    console.log (`Please go to the registration desk for further information.`); 
}

