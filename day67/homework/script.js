// Conditional statements:

// 1. Write a function that takes a number as input and logs whether it is positive, negative, or zero.
// function number(x){
//     if (x > 0){
//         console.log("positive")
//     }else if (x < 0){
//         console.log("negative")
//     }else{
//         console.log("zero")

//     }
// }
// number(0)


// 2. Write a function that determines if a number is even or odd and logs the result.
// function oddOrEven(num){
//     if (num % 2 == 0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }
// oddOrEven(7)

// 3. Write a function that checks if a given year is a leap year and logs the result.
// function leapYear(year){
//     if(year % 4 == 0){
//         console.log("leap year")
//     }else{
//         console.log("no")
//     }
// }
// leapYear(100)

// 4. Write a function that takes two numbers as parameters and returns the larger one.
// function largest(num1,num2){
//     if (num1 > num2){
//         console.log(num1)
//     }else{
//         console.log(num2)
//     }
// }
// largest(10,20)

// 5. Write a function that takes three numbers as parameters and returns the smallest one.
// function smallets(num1,num2,num3){
//     console.log(Math.min(num1,num2,num3))
// }
// smallets(10,20,30)

// 6. Write a function that checks if a given string is empty (has zero length).
// function stringLenght(stringg){
//    if (stringg.length === 0){
//     console.log("empty")
//    }else{
//     console.log("string lenght is:",stringg.length)
//    }
// }
// stringLenght("")

// 7. Write a function that checks if a given string is a palindrome (reads the same backward as forward).


// 8. Write a function that converts a numeric grade (0-100) to a letter grade (A, B, C, etc.).
// function grade(score){
//     if(score >= 90 && score <= 100){
//         console.log("A")
//     }else if(score >= 80 && score < 90){
//         console.log("B")
//     }else if(score >= 70 && score < 80){
//         console.log("C")
//     }else if(score >= 60 && score < 70){
//         console.log("D")
//     }else if(score >= 0 && score < 60){
//         console.log("F")
//     }
// }
// grade(100)
// 9. Write a function that checks if a given number is a prime number.

// function primeNumber(number){
//     if (number <= 1){
//         console.log("no")
//     }
//     for(let i = 2; i < number; i++){
//         if(number % i === 0){
//             console.log("no")
//         }else{
//             console.log("yes")
//         }
//     }
// }
// primeNumber(7)
// 10. Write a function that converts temperature from Celsius to Fahrenheit based on user input.
// let temp = prompt("enter temperature")
// function temperature(t){
//     console.log((t * 9) / 5 + 32)
// }
// temperature(temp)