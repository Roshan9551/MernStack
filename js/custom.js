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


var marks = prompt("Enter your marks: ");

if(marks >= 90 && marks <= 100){
    console.log("GPA: 4.0");
    console.log("A+");
    console.log("Outstanding");
}else if(marks >= 80 && marks <= 90){
    console.log("GPA: 3.6");
    console.log("A");
    console.log("Excellent");
}else if(marks >= 70 && marks <= 80){
    console.log("GPA: 3.2");
    console.log("B+");
    console.log("Very Good");
}else if(marks >= 60 && marks <= 70){
    console.log("GPA: 2.4");
    console.log("B");
    console.log("Good");
}else if(marks >= 50 && marks <= 60){
    console.log("GPA: 2.0");
    console.log("C+");
    console.log("Satisfactory");
}else if(marks >= 40 && marks <= 50){
    console.log("GPA: 1.6");
    console.log("C");
    console.log("Acceptable");
}else if(marks >= 35 && marks <= 40){
    console.log("GPA: 1.2");
    console.log("D+");
    console.log("Basic");
}else{
    console.log("GPA: -");
    console.log("NG");
    console.log("Work hard");
}