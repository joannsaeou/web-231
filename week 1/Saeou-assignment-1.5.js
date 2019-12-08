/*
============================================
; Title: Assignment 1.5
; Author: Joann Saeou
; Date: 27 November 2019
; Modified By: Joann Saeou
; Description: Employee Records types, values, and variables
;===========================================
*/ 

var firstName1 = "Samuel";
var lastName1 = "Oak";
var Address1 = "4454 Pallet Town Lab";
var payRate1 = 16.10
var hireDate1 = new Date(2019, 12, 09);
var hireDate1slash = hireDate1.toLocaleDateString();

var firstName2 = "Gary"
var lastName2 = "Oak"
var Address2 = "9900 Vermillion City";
var payRate2 = 22.86
var hireDate2 = new Date(2019, 12, 15);
var hireDate2slash = hireDate2.toLocaleDateString();

var firstName3 = "Ash";
var lastName3 = "Ketchum";
var Address3 = "3345 Pallet Town"; 
var payRate3 = 10.3
var hireDate3 = new Date(2019, 11, 27);
var hireDate3slash = hireDate3.toLocaleDateString();


//log  3 employee records variables into the console window

console.log(firstName1 + lastName1);
console.log(Address1);
console.log(hireDate1 + hireDate1slash )
console.log(payRate1);

console.log(firstName2 + lastName2);
console.log(Address2);
console.log(hireDate2 + hireDate2slash);
console.log(payRate2);

console.log(firstName3 + lastName3);
console.log(Address3);
console.log(hireDate3 + hireDate3slash);
console.log(payRate3);