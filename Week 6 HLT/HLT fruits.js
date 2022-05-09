//created array called fruits and listed elements
var fruits = ["apple", "orange", "banana", "pear", "peach", "strawberry", "cherry", "acai"]

//iterate through the array with for-in loop
for (let fruit in fruits){
  //created 2 variables vowels and consonant which will be used to count the letters in each element
    var vowels = 0;
    var consonants = 0;

//created for loop to loop through each element of the array.    
  for (var i = 0; i<fruits[fruit].length; i++){
      //if any of these letters (vowels) present in the element then one is added to the vowel variable
      if (fruits[fruit][i] == 'a' || fruits[fruit][i] == 'e' ||fruits[fruit][i] == 'i' || fruits[fruit][i] == 'o' || fruits[fruit][i] == 'u' ){
          vowels ++;
     //if there ar any other letters (not vowels) present in the element then 1 is added to the consonant variable
        } else
            consonants ++;

    }

//print out to console each element in the array with how many vowels and consonants are in each element    
  console.log (`${fruits[fruit]} has ${vowels} vowels and ${consonants} consonants`)
 
    
}