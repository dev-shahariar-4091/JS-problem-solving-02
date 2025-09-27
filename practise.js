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


// 5. Check if a Year is a Leap Year 
function leepYear(year){
 if(year % 4 == 0){
       console.log("This year is leep year : " , year);
   }
  else {
       console.log("This year is not leep year : ", year);
 }
}

leepYear(2000);
leepYear(2025);