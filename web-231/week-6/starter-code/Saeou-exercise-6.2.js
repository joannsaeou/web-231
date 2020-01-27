const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");

/*
============================================
; Title: Saeou-discussion-arrays-6.2.js
; Author: Krasso  
; Date: 13 January 2020
; Modified By: Joann Saeou
; Description: exercise 6.2 week 6 Javascript exception handling
;===========================================
*/

//start program




try {
  alerting("today is a great day to learn javascript");

} catch (err) {
  console.log('Catch clause: ' + err);
} finally {
  console.log('Finally clause reached...')
}





/*
  Expected output:

  Joann Saeou
  Exercise 6.2
  13 January 2020

  Catch clause: <alerting is not defined>
  Finally clause reached...
*/
