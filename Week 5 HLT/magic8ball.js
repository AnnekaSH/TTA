//defined variable userName and set to empty string. user can enter name if desired
var userName = '';

//if no user name is entered, "Hello!" will be displayed. If a username is entered their name will be displayed after hello. 
console.log (`Hello ${userName}!`); 

//created new variable userQuestion and set to empty string which will be changed to the wuestion the user wants to ask.
var userQuestion = '';

//  states users name and their question
console.log (`${userName} asked ${userQuestion}`);

//created new variable randomNumber to generate a random WHOLE number between 0 and 7
var randomNumber = Math.floor(Math.random()*8);

//create new variable eightBall and set to empty string
var eightBall = '';

//assigned eightBall to randomNumber... However could I have not done these next steps using randomNumber rather than eightBall? 
eightBall = randomNumber;

//used switch to select a code block to be selected depending on the outcome of the random number that is selected
switch (eightBall) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = `Cannot predict now`;
        break;
    case 4:
        eightBall = `Do not count on it`;
        break;
    case 5:
        eightBall = `My sources say no`;
        break;
    case 6:
        eightBall = `Outlook not so good`;
        break;
    case 7:
        eightBall = `Signs point to yes`;
}
console.log (`The magic eight ball replied "${eightBall}"...`);

/*//alternative code using if and else if statements rather than switch
    console.log(`It is certain`);
}else if (eightBall==1) {
    console.log (`It is decidedly so`);
}else if (eightBall==2) {
    console.log (`Reply hazy try again`);
}else if (eightBall==3) {
    console.log (`Cannot predict now`);
}else if (eightBall==4) {
    console.log (`Do not count on it`);
}else if (eightBall==5) {
    console.log (`My sources say no`);
}else if (eightBall==6) {
    console.log (`Outlook not so good`);
}else if (eightBall==7) {
    console.log (`Signs point to yes`);
}*/