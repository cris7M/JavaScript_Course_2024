/*
sdhfksjdfhsdkfsjdf
sddfkjsdgfkisjdf
fjsdfksjdfsd
dhsdkfsd
sdhfksdhf
jfhfkds
*/
//sum of two number js code
// a = 10;
// b = 20;
// console.log(a + b);

//comparission operator
// == equal to
// !=
// >
// <
// <=
// >=
// Strict comparission
// ===
// !==

//logical operator
// && logical and
// (5 > 3) && (2 < 4) = T
// AND
// T & T = T
// T & F = F
// F & T = F
// F & F = F

// age = 60;

// if (age < 12) {
//   console.log("kid");
// }
// if (age > 12 && age < 18) {
//   console.log("teen");
// }
// if (age > 18 && age < 50) {
//   console.log("Young");
// }
// if (age > 50) {
//   console.log("old");
// }

// || logical or
// OR
// T & T = T
// T & F = T
// F & T = T
// F & F = F

// ! logical not
// !T = F
// F = T

// // ctrl+/ conditional statement
// age = 17;
// if (age >= 18) {
//   console.log("You are eligible for voting");
// } else {
//   console.log("You are not eligible for voting");
// }
// ------------------------
//  if statement
// if (condition) {
//   // code to execute if condition is true
// }
// let age = 18;
// if (age >= 18) {
//   console.log("You are eligible for voting");
// }

// -----------------------------------
// // else statement
// if (condition){
// // true
// }else{
// //false
// }

// let age = 15;
// if (age >= 18) {
//   console.log("You are eligible for voting");
// } else {
//   console.log("You are not eligible for voting");
// }

// ---------------------------------
// else if statement
// if (condition){

// }else if (condition){

// }else{

// }
// let marks = 65;
// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }
// ----------------------------------------------
// nested if
// if (condition){
//     if(condtion){
//         true
//     }else{

//     }
// }else{

// }
// if (condition){

// }else if(condition){

// }else{

// }
// switch(expression){
//     case value1:
//         // statement
//         break;
//     case value2:
//         // statement
//         break;
//     case n:
//         // statement
//         break;
//     default:
//         // statement
//         break;
// }

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("wed");
//     break;
//   case 4:
//     console.log("thr");
//     break;
//   case 5:
//     console.log("frid");
//     break;
//   case 6:
//     console.log("sat");
//     break;
//   case 7:
//     console.log("sun");
//     break;
//   default:
//     console.log("wrong day number");
//     break;
// }

// let age = 18;
// switch (true) {
//   case age < 13:
//     console.log("You are a child");
//     break;
//   case age >= 13 && age < 20:
//     console.log("You are a teenager");
//     break;
//   case age >= 20:
//     console.log("You are a adult");
//     break;
//   default:
//     console.log("Age not recognized");
// }

// loops
// For loop
// while loop
// // do while loop
// for(initilization; condition ; increment/decrement){
//     // code bl
// }
// for (let i = 1; i <= 10; i++) {
//   console.log("hello world");
// }

// while loop
// while(condition){
//     // code block to be executed
// }
// let i = 1;
// while (i > 1) {
//   console.log("hello world");
//   i++;
// }

// // do while
// do {
//  // code block to be executed
// }while(condtion);
// let j = 1;
// do {
//   console.log("hello world");
//   j++;
// } while (j < 1);

// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// functions

// function functionName(parmeter){
//     // code block to be executed
// }

// function greeting(name) {
//   console.log("hello " + name);
// }

// greeting("sandeep");
// greeting("magesh");
// greeting("sanjay");

// parameter and argumetns
// parameters - variable listed in the function defination
// argument values passed to the function when it is called

// function test(a) {
//   return a + 20;
// }

// function sum(a, b) {
//   return a + b;
// }

// result = sum(2, 2);
// console.log(result);

// result = test(5);
// console.log(result);

// function sum(number) {
//   return number + 20;
// }

// result = sum(40);
// console.log(result);

// const sum = function (number) {
//   return number + 20;
// };

// console.log(sum(30));

// arrow function es6
// const sum = (number) => {
//   return number + 20;
// };

// console.log(sum(30));

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(10, 20));
