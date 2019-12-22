
const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");



/*
============================================
; Title: Saeou-discussion-arrays-4.2.js
; Author: Krasso  
; Date: 17 December 2019
; Modified By: Joann Saeou
; Description: exercise 4.2 week 4 Javascript arrays
;===========================================
*/

//creating variables with  function getFruits while logging into the console 
var fruits = ["apple", "banana", "kiwi", "watermelon", "melon"];
function getFruit(fruits) {
  for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
   }
   getFruit(fruits);













/*
  Expected output:

  Joann Saeou
  Exercise 4.2
  12/22/2019

  Apple
  Orange
  Banana
  Mango
  Pear
*/
