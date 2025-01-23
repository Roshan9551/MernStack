// // //user debugger and strict type
// // let x=5;
// // if(x==9){
// //     debugger
// // }

// //template literal
// let name = prompt("Enter your name");
// let email = prompt("Enter your email");
// let phone = prompt("Enter your phone");
// let password = `${name}${name.length}${phone}`;

// console.log(`Name: ${name}
// Email: ${email}
// Phone: ${phone}
// `);

// console.log(`Generated Password: ${password}`);

// let car = {
//     name: prompt("Enter name of the car: "),
//     price: prompt("Enter price of the car: "),
//     color: prompt("Enter color of the car: ")
// }

// if(car.name == "Mahindra" && car.price == "10000" && car.color == "red"){
//     console.log(`We have found your car.
//     Car Details:
//     Name: ${car.name}
//     Price: ${car.price}
//     Color: ${car.color}
//         `);
// }else{
//     console.log("Car not found!");
// }


//camelcase => function name like addVar()
// pascal case => class name like UserName
//snack case => variable name like user_name

//undefined means variable declared but not value whereas not defined means variable is not defined


// var marks = prompt("Enter your marks: ");

// if(marks >= 90 && marks <= 100){
//     console.log("GPA: 4.0");
//     console.log("A+");
//     console.log("Outstanding");
// }else if(marks >= 80 && marks <= 90){
//     console.log("GPA: 3.6");
//     console.log("A");
//     console.log("Excellent");
// }else if(marks >= 70 && marks <= 80){
//     console.log("GPA: 3.2");
//     console.log("B+");
//     console.log("Very Good");
// }else if(marks >= 60 && marks <= 70){
//     console.log("GPA: 2.4");
//     console.log("B");
//     console.log("Good");
// }else if(marks >= 50 && marks <= 60){
//     console.log("GPA: 2.0");
//     console.log("C+");
//     console.log("Satisfactory");
// }else if(marks >= 40 && marks <= 50){
//     console.log("GPA: 1.6");
//     console.log("C");
//     console.log("Acceptable");
// }else if(marks >= 35 && marks <= 40){
//     console.log("GPA: 1.2");
//     console.log("D+");
//     console.log("Basic");
// }else{
//     console.log("GPA: -");
//     console.log("NG");
//     console.log("Work hard");
// }

// let a = parseInt(prompt("Enter first number: "));
// let b = parseInt(prompt("Enter second number: "));
// let c = parseInt(prompt("Enter third number: "));

// if(a > b && a > c && c > b){
//     console.log(`${a}, ${c}, ${b}`);
// }else if(a < b && a < c && c < b){
//     console.log(`${b}, ${c}, ${a}`);
// }


// /* ATM System */
// var totalAmount = 10000;
// var pin = 123;
// var confirmPin;
// var withdrawal;
// var operation = prompt("Enter check for checking balance and withdraw for withdrawing: ");

// if(operation == "check"){
//     alert(`Your remaining amount is: ${totalAmount}`);
// }else if(operation == "withdraw"){
//     confirmPin = parseInt(prompt("Enter your pin: "));
//     if(pin == confirmPin){
//         withdrawal = parseInt(prompt("Enter the amount to be withdrawan: "));
//         if(withdrawal <= totalAmount){
//             totalAmount = totalAmount - withdrawal;
//             alert(`Your remaining amount is: ${totalAmount}`);
//         }else{
//             alert("Insufficient balance.");
//         }
//     }else{
//         alert("Incorrect pin.");
//     }
// }else{
//     alert("Enter valid operation.");
// }



/* 
Write a JavaScript program that takes a single character as input and checks whether it is:
A letter (string).
A number (digit).
A special symbol.
 */
// var userInput = prompt("Enter a input: ");
// var asciiValue = userInput.charCodeAt(0); //65 to 90.  97 to 122.  num=48 to 57. symbols = 33 to 47   91 to 96 and 123 to 126.
// if(asciiValue >= 65 && asciiValue <= 90 || asciiValue >= 97 && asciiValue <= 122){
//     console.log("Enter input is letter.")
// }else if(asciiValue >= 48 && asciiValue <= 57){
//     console.log("Enter input is number.")
// }else if(asciiValue >= 33 && asciiValue <= 47 || asciiValue >= 91 && asciiValue <= 96 || asciiValue >= 123 && asciiValue <= 126){
//     console.log("Enter input is symbol.")
// }


/* Write a program to check if a number is divisible by both 3 and 5. */
// let num = parseInt(prompt("Enter a number: "));
// if(num % 3 == 0 && num % 5 == 0){
//     console.log("The number is divisible by both 3 & 5.");
// }else if(num % 5 == 0){
//     console.log("The number is divisible by 5.");
// }else if(num % 3 == 0){
//     console.log("The number is divisible by 3.");
// }


/* Write a program that checks if a given year is a leap year or not. */
// let days = parseInt(prompt("Enter no.of days in a year: "));
// if(days == 366){
//     console.log("The year is leap year.");
// }else{
//     console.log("This is not a leap year.");
// }

/* Write a program to check if a given character is uppercase or lowercase. */
// var character = prompt("Enter a character: ");
// var asciiValue = character.charCodeAt(0);
// if(asciiValue >= 65 && asciiValue <= 90){
//     console.log("Entered character is uppercase");
// }else if(asciiValue >= 97 && asciiValue <= 122){
//     console.log("Entered character is lowercase");
// }



/* For-of loop => it is used to iterate arrays, strings, or collections. */
// const arr = [10, 20, 30];
// for (const num of arr) {
//   console.log(num);
// }


// /* For-in loop => used to iterate the object with key value pair*/
// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//   console.log(key, obj[key]);
// }
