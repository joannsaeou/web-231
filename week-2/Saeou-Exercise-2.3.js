var header = require (Saeou-header-test.js);

/*
============================================
; Title:  Saeou-exercise-2.3.js
; Author: Joann Saeou
; Date:   05 December 2019
; Modified By: Joann Saeou
; Description: Exploring function properties
;===========================================
*/



// start program


/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */


myName.joann = "Joann Saeou";

// Function
function myName(){
  return myName.joann;
}



/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */

function myName(){
  return myName.saeou;
}

//output
console.log('Hello \n  >>' + "myName()" + 'Joann');

// new line
console.log('\n')

// output
console.log('Hello \n  >>' + myName() + '' + 'Saeou!');

/*
*  Output:
*  Joann Saeou
*  function properties
*  Date: 12/05/2019
*/



// end program
