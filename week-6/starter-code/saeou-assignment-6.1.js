const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");



/*
============================================
; Title: Saeou-discussion-arrays-6.1.js
; Author: Krasso  
; Date: 14 January 2020
; Modified By: Joann Saeou
; Description: find the two error in javascript objects
;===========================================
*/

//start program 


var employee = new Object();
var books = new Array("Objects", "Joann", "Week-6");
var day = new Date("January 14, 2020");

alert(new Date);


var book = new Object();       //create an object
book.subject = "Week-6 Javascript Objects"; // assign properties to the object
book.author = "Saeou";

console.log("Book name is : " + book.subject + " ");
console.log("Book author is : " + book.author + " ");




//define a function which will work as a method

function addPrice(amount){  
    this.price = amount;
}

function book (title, author){
    this.title = title;
    this.author = author;
    this.price = addPrice; // assign that method as property
}

var myBook = new book ("week-6," "Javascript," "Joann Saeou");
myBook.addPrice(86);


console.log("Book name is : " + book.subject + " ");
console.log("Book author is : " + book.author + " ");
console.log("Book price is : " + myBook.price + " ");
alert("Book price is : " + myBook.price + " ");

//end of program 

