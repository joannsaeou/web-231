//logging Saeou-header.js into console 
const header = require('../Saeou-header.js');

console.log(header.display("Joann", "Saeou", "Exercise 3.3 Control Statements"));
console.log("\n");


/*
============================================
; Title:  Saeou-assignment-3.3.js
; Author: Professor Krasso - referenced starter code and video
; Date:   15 December 2019
; Modified By: Joann Saeou
; Description: Control Statements.  Convert if statements
; to use switch statemnt
;===========================================
*/







var eventKeyCode = 13;



switch (eventKeyCode){
case 13:
    console.log('The enter key was pressed.');
    break; 
case  16:
    console.log('The shift key was pressed.');
    break;

case 32:
        console.log('The spacebar key was pressed.');
        break;

case 8:
    console.log('The backspace / delete key was pressed.');
    break;

default:
    console.log ("Unrecognized key press");
    break; 
}



/*
  Expected output:

    Joann Saeou
  Exercise 3.3
  15 December 19

  // Expected output
  The enter key was pressed
*/