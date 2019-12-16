const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "Exercise 3.4  for loop"));
console.log("\n");

//start program

/* 

Title: assignment-3.4
; Author: Professor Krasso
; Date: 15 December 2019
; Modified By: Joann Saeou
; Description: for-loop javascript

*/

function logMismatch (heightBrock, heightMisty) {
  console.log(heightBrock + " and " + heightMisty + " do not match!");

}



function logMatch (heightBrock, heightMisty) {
  console.log(heightBrock + " and " + heightMisty + " match!");

}



var x = 6; 
for(var i =  0; i < 10; i++) {
  var y = randomNumber(); 
  if(x === y){ 
    logMatch(x, y);
  }
  else{
    logMismatch(x, y);
  }


}







/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}
