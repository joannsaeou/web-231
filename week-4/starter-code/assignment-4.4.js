//assigning  header to assignment 4.4


const header = require('../../week-2/Saeou-header');

// logging header fullName, assignment name into console 
console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");



/*
Title: Assignment 4.4
; Author: Professor Krasso
; Date: 18 December 2019
; Modified By: Joann Saeou
; Description: This program demonstrates   Javascript Arrays Predicates
*/


//start program




var states = ["California", "New York", "Texas", "Florida", "Hawaii"];
function getStates(states, state1) {
return states.filter(function(state) {
return state == state1;


}  )
}

// variable to target a select a certain state
var filterState = getStates(states, "Texas")


//logging console to change the states to original, sorted, and selective array
console.log(states);
console.log(states.sort() );
console.log(filterState);








//end of program 




/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  Joann Saeou
  Assignment 4.4
  12/17/2019

  -- ORIGINAL ARRAY --
  California
  New York
  Texas
  Florida
  Hawaii

  -- SORTED ARRAY --
  California
  Florida
  Hawaii
  New York
  Texas

  -- SELECTED VALUE --
  Texas

*/
