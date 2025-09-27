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


// 3. Find the Largest of Three Numbers  (complete)

// function largestNum(num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         console.log("Num1 is the largest number : ", num1);
//     }
//     else if(num2 > num1 && num2 > num3){
//         console.log("Num2 is the largest number : ", num2);
//     }
//     else{
//         console.log("Num3 is the largest number : ", num3);
//     }
// }

// largestNum(25, 30, 18);
// largestNum(40, 510, 555);


// 4. Check if a Person is an Adult  (complete)
// function adult (age){
//     if(age > 18 ){
//       console.log("You can voted : " , age);
//   }
//   else{
//       console.log("You can't voted : ", age)
//   }
// }

// adult(18);
// adult(16);
// adult(25);


// 5. Check if a Year is a Leap Year (complete)
// function leepYear(year){
//  if(year % 4 == 0){
//        console.log("This year is leep year : " , year);
//    }
//   else {
//        console.log("This year is not leep year : ", year);
//  }
// }

// leepYear(2000);
// leepYear(2025);

// 6. Check if a Number is Divisible by 5 and 10 
// function divitited (num){
//     if( num % 5 == 0 && num % 10 == 0){
//         console.log("This number is divitite by both 5 & 10 : ", num);
//     }
//     else{
//         console.log("This number is not divitited by both 5 & 10 : ",num);
//     }
// }
// divitited(100);
// divitited(205);

// 7. Find the Length of a String 
// function lengthOfStr(str){
//     return str.length
// }
// console.log(lengthOfStr("Bangladesh"));
// console.log(lengthOfStr("Shahariar"));


// 8. Check if a Number is Prime 

function primeNumber(num){
   
    for(let i = 2; i <= Math.sqrt(num); i++){
       
         if(num %2 !== 0){
            console.log("This is a prime number : ", num)
         }
         else{
            console.log("This is not a prime number : ", num)
         }
    }
}

primeNumber(14);
primeNumber(17);