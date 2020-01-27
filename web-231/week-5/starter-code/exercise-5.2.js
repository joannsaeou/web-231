
const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");



/*
============================================
; Title: Saeou-discussion-arrays-5.2.js
; Author: Krasso  
; Date: 24 December 2019
; Modified By: Joann Saeou
; Description: exercise 5.2 week 5 Javascript arrays built-in functions
;===========================================
*/

//start program


var foods = ["Sushi", "Beijing-Duck", "Ramen", "Springroll", "BBQ"];  //array of foods 

foods.forEach(function(food) { // output 
  console.log(food);
  });


// array of numbers
const numbers = [1, 2, 3, 4, 5];

// output
numbers.forEach((num) => {
  console.log(num)
})







/*
  Expected output:

  Joann Saeou
  Exercise 5.2
  12/24/2019

  Sushi
  Beijing-Duck
  Ramen
  Springroll
  BBQ

*/
