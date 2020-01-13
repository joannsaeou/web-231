/*
 	==================================================================
 	; Title: Exercise 5.4 - Advanced Arrays
 	; Author: Pascal Pascarella
 	; Date: 02 January 2020
 	; Description: This is a program that maps over the array to
 	; capitalize 3 restaurants.
 	==================================================================
 	*/
 	 
 	// Header
 	const header = require('../pascarella-header.js');
 	 
 	console.log(header.display("Pascal","Pascarella","Exercise 5.1 - Advanced Arrays"));
 	 
 	 
 	// Start Program
 	 
 	// Declare Variables
 	 
 	var restaurants = ["mcdonald's", "chick-fil-a", "wendy's"];
 	var restFix = restaurants.map(function(item) { return item.toUpperCase(); });
 	 
 	// Output
   console.log(restaurants.map); // Prints Mcdonald's, Chick-fil-a, Wendys
   
   /*
   
   ;Hello there, I have decided to try to fix your code that you have created for this week...

;So the first thing I did was when I check your code on the VS code, there wasn't any error shown so instead I went to codepen.io and from there I noticed you wanted the print out of the listed resturants name. 


    ;var restaurants = ["mcdonald's", "chick-fil-a", "wendy's"];  

;var restFix = restaurants.map(function(item) { return item.toUpperCase(); });    

 // Output  console.log(restaurants); 

;so in the output you had  console.log(resturants.map); and from here it gives an undefined output. So instead I have replace the resturants.map into resturants instead and that has printed out the resturant name instead of 'undefined' result.

*/