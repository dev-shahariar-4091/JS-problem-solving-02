// 1. Check if a Number is Positive, Negative, or Zero (Complete)

// function num(number){
    
//     if(number > 0){
//         console.log("This number is positive : ", number);
//     }
//     else if(number < 0 ){
//         console.log("This numbe is negitive :", number);
//     }
//     else{
//         console.log("This number is zero : ", number);
//     }
//     }

//     num (0);
//     num(1);
//     num(-2);

// 2. Check if a Number is Even or Odd (complete)
// function num(number){
//      if(number % 2 == 0){
//        console.log("This number is Even : ",number );
    
//      }
//      else{
//         console.log("This number is Odd" , number);
//     }

// }

// num(21);
// num(22);


// 3. Find the Largest of Three Numbers 

function largestNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log("Num1 is the largest number : ", num1);
    }
    else if(num2 > num1 && num2 > num3){
        console.log("Num2 is the largest number : ", num2);
    }
    else{
        console.log("Num3 is the largest number : ", num3);
    }
}

largestNum(25, 30, 18);
largestNum(40, 510, 555);

