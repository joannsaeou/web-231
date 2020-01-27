
const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");

/*
============================================
; Title: Saeou-discussion-arrays-6.4.js
; Author: Krasso  
; Date: 17 January 2020
; Modified By: Joann Saeou
; Description: exercise 6.4 week 6 Javascript nested objects
;===========================================
*/

//start program 

//nested object literal 
var ticket = { 
id: 105,
Name: "Bob Jones",
dateCreated: "01/17/2020",
priority: "most concern",
person: {    //second nested object literal under ticket variable
  id: 105,
  firstName: "Bob",
  lastName: "Jones",
  jobTitle: "Programmer I"


}

}
console.log('Ticket ' + ticket.id + ' was created on ' + ticket.dateCreated + " assigned to employee " + ticket.person.firstName + " " +
 ticket.person.lastName + " (  " + ticket.person.jobTitle + " ) " ) 


//end of program 











/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

 Joann Saeou
  Assignment 6.4
  17 January 2020

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/
