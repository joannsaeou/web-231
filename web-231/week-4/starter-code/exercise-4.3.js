const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");



/*
Title: Assignment 4.3
; Author: Professor Krasso
; Date: 18 December 2019
; Modified By: Joann Saeou
; Description: This program demonstrates the
; use of JavaScript Arrays, filtering, and
; and variables.
*/

//start program



//adding variables to getValue of vehicles using the for, if statement

var vehicles = ["bus", "van", "train", "coupe", "boat"];
function getValue (vehicles, match) {
  for(i = 0; i < vehicles.length; i++) {
    if(match == vehicles[i]) {
      console.log(match);
    }

  }
}
 
//an element to select certain vehicle 
getValue(vehicles, "bus");




//end of program





















/*
  Expected output:

 Joann Saeou
  Exercise 4.3
  12/21/2019

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/
