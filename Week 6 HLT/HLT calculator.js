//prompt user to imput first number, the operator and then the second number which get stored as variables
let firstValue = prompt ("What is the first number?")
let operation = prompt ("What is the operation? (+ or - or / or * or ^)")
let secondValue = prompt ("What is the second number?")

//case switch to identify which operator it is and carry out each operation
switch (operation){
    case `*`:
        function multiplication (firstValue, secondValue){
            return firstValue*secondValue;
        }
        console.log (`${firstValue} ${operation} ${secondValue} = ${firstValue*secondValue}`);
        break;
     case `/`:
        function division (firstValue, secondValue){
            return firstValue/secondValue;
        }
        console.log (`${firstValue} ${operation} ${secondValue} = ${firstValue/secondValue}`);
        break;   
     case `+`:
        function addition (firstValue, secondValue){
            return firstValue+secondValue;
        }
        console.log (`${firstValue} ${operation} ${secondValue} = ${firstValue ^ secondValue}`);
        break;
    case `-`:
        function subtraction (firstValue, secondValue){
            return firstValue-secondValue;
        }
        console.log (`${firstValue} ${operation} ${secondValue} = ${firstValue-secondValue}`);
        break;
    case `^`:
            function toPowerOf (firstValue, secondValue){
                return firstValue**secondValue;
            }
            console.log (`${firstValue} ${operation} ${secondValue} = ${firstValue**secondValue}`);
            break;

    }