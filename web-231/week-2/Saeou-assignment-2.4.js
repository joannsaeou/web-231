
const header = require('./Saeou-header-test.js');
console.log(header.display("Joann", "Saeou", "2.2 header"));

/*
============================================
; Title:  functions.js
; Author: Joann Saeou
; Date:   06 December 2019
; Description: Displays the sum of two integer values
;===========================================
*/

//start program

/**
 * Params: x, y
 * Response: function property definition
 * Description: returns the value assigned to the function properties and return the  sum x and y
 */



// function properties to return full name using string
function fullName(firstName, lastName) {
   myName.joann = "Joann";
   myName.saeou = "Saeou";
  return 'firstName.joann', 'lastName.saeou';
}
//output the fullName function and to call the name
console.log("Hello World!\n My name is" + 'Joann'+ '' + "Saeou" +"");

// function properties created to make three parameters for new date
function dateWriter(year, month, day) {
  var fullDate = new Date();
  var year = fullDate.getFullYear() + 2019;
  var month = fullDate.getMonth() + 12;
  var day = fullDate.getDate() + 07;
  return newDate = year + '\n' + month + "" + day;


};


// output the dateWriter function to year, month, day
console.log(dateWriter('2019'+ '\n' + '\n 12', + '07'));
console.log(`\n Today's date ` + dateWriter(fullDate, year, month, day));



//

function formatNumber(number, numOfFixedPosition){
  return number.numOfFixedPosition;

};

//output the formatNumber to year, month, day
console.log(formatNumber(2019, 12, 07));
console.log
//adding function property with 1 parameter to convert to integer
function convertToInt(stringValue) {
  var parseValue = parseInt("stringValue");
  return parseValue;

};

//output the convertToInt function
console.log(convertToInt("77"));


// adding function property with 1 parameter to convert to float
function convertToFloat(stringAmount) {
  var parseStringAmount = parseFloat("stringAmount");
  return parseFloat;

}

//output the convertToFloat function to a
console.log(convertToFloat("44.77"));

console.log("\n I am " + convertToInt(currentAge) + " years old and my savings account goal is $$" + convertToFloat(stringAmount) + "$$.dollars.");
//output name assignment
/*
Joann Saeou
Exercise 2.3
Date: 12/7/2019
Hello Joann Saeou!


*/

//I am 26 years old and my saving account goal is
var currentAge = "26";

//variable that stores dollar amount as string
var stringAmount = "996699.99"

//end program
