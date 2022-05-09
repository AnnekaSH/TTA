//ask user that the temperature and weather conditoin is
let temperature = prompt("What is the temperature?")
let condition = prompt("What is the condition? sunny/cloudy/raining/snowing/thunder") ;
let goToWork;

//case switch to declare value of goToWork depending on temperature and condition
if (temperature >=10){
  switch (condition){
    case "sunny":
      goToWork = true;
      break;
    case "cloudy":
      goToWork = true;
      break;
    case "raining":
      goToWork = false;
      break;
    case "snowing":
      goToWork = false;
      break;
    case "thunder":
      goToWork = false;
      break;
  }
} else if (temperature>20){
    switch (condition){
    case "sunny":
      goToWork = true;
      break;
    case "cloudy":
      goToWork = true;
      break;
    case "raining":
      goToWork = true;
      break;
    case "snowing":
      goToWork = false;
      break;
    case "thunder":
      goToWork = false;
      break;
  }
} else if (temperature>30){
    switch (condition){
    case "sunny":
      goToWork = false;
      break;
    case "cloudy":
      goToWork = false;
      break;
    case "raining":
      goToWork = false;
      break;
    case "snowing":
      goToWork = false;
      break;
    case "thunder":
      goToWork = false;
      break;
  }
} if (temperature<10){
    switch (condition){
    case "sunny":
      goToWork = false;
      break;
    case "cloudy":
      goToWork = false;
      break;
    case "raining":
      goToWork = false;
      break;
    case "snowing":
      goToWork = false;
      break;
    case "thunder":
      goToWork = false;
      break;
  }

  //message printed which shows user that they are able to either go to work or not and states the temperature and condition
} 
 if (goToWork) {
   console.log (`You can work and construct your lab today as it is ${temperature} degrees and ${condition}!`);
 } else
   console.log (`You cannot construct your lab today as it is ${temperature} degrees and ${condition}`);
