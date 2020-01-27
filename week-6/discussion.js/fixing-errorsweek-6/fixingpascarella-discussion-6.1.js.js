/*
================================================================
; Title: Discussion Board 6.1 - Objects and Built-In Objects
; Author: Pascal Pascarella
; Date: 16 January 2020
; Description: This program displays an error-filled object list.
=================================================================
*/

// Header
const header = require('../pascarella-header.js'); // Links to header file

console.log(header.display("Pascal","Pascarella","Discussion Board 6.1 - Objects and Built-In Objects")); // Prints header
console.log("\n") // Line break


// Program Start

// Declare Variables
var name = "make";   //on line 20 this where the beginning  of error  I found is that there wasn't a closed quotation mark, so I have added the closed quotation mark to fix this error

var i = 0;
const truck = {           // Implements an incremental count for each obj iteration
    [name + ++i]: "Ford",
    [name + ++i]: "Chevrolet", //on line 25  I found is that there was an unexpected string, so I have deleted the  " after the name and took off semi-colon and added a colon and that reduced the error syntax"
       //on line 26 there was an added "]; "  so I have deleted that to fix this issue and now the result shown is 10 error reduction from 17 
    [name + ++i]: "Toyota",   //on line 27 i have added the missing "[ after the word  name" then fix the semi colon that was after the closed square bracket and that reduce from error 9 to 7 
}

// Output
console.log(truck.make1); //"Ford"
console.log(truck.make2); //"Chevrolet"
console.log(truck.make3); //"Toyota"   // on line 33 there was an extra quotation so I have deleted that and the error was now from 7 to 0 

// Program End