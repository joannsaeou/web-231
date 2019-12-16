const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "Exercise 3.2  Matching Functions"));
console.log("\n");

//start program

/* 

Title: Exercise-3.2
; Author: Professor Krasso
; Date: 13 December 2019
; Modified By: Joann Saeou
; Description: pattern matching function

*/

//variables of firstName and civilStatus to test out statement

var firstName = 'Joann';
var civilStatus = 'single';

// If...else statements

if (civilstatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + 'will hopefully marry soon');

}



//output from the match function  true or false

var isMarried = true;

if (ismarried) {

  console.log(firstName + ' is married!');

} else { 
  console.log(firstName + 'will hopefully marry soon');
  
}

function match (firstName, civilStatus) {
  if (firstName === civilStatus) {
    return true;
  } else {
    return false;
  }
}

//creating variables for mass and height in kg/meters

var massBrock = 78; // kg
var heightBrock = 1.69; // meters

var massMisty = 92; // kg
var heightMisty = 1.96; // meter

var BMIBrock = massBrock / (heightBrock * heightBrock);
var BMIMisty = massMisty / (heightMisty * heightMisty);

//output from the match() function

if (match(BMIBrock > BMIMisty)) {
  (logMatch(BMIBrock > BMIMisty))
    console.log(' Brock\'s BMI is higher than Misty\'s. ');
} else {
  (logMisMatch(BMIBrock > BMIMisty))
  console.log(' Misty\'s BMI is higher than Brock\'s. ');
}



/*adding function logMismatch with two parameters 
; if   height value do not match =, the console log will display the text do not match 
*/

function logMismatch (heightBrock, heightMisty) {
  console.log(heightBrock + " and " + heightMisty + " do not match!");

}



function logMatch (heightBrock, heightMisty) {
  console.log(heightBrock + " and " + heightMisty + " do not  match!");

}

console.log(match("A","B"));
console.log(match(2,2));
console.log("\n");






/* // output from the if...else blocks
 Brock and Misty height does not match!
 Misty is higher than Brock does match 
*/










/*
  Expected output:

  Joann Saeou
  Exercise 3.2
  15 December 2019

  // output from the match() function
  false
  true

  // output from the if...else blocks
 Brock and Misty height does not match!
 Misty is higher than Brock 
*/
