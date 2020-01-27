/*
============================================
; Title: Assignment 5.1
; Author: Professor Krasso
; Date: 8 January 2020
; Modified By: Bohnet Christine
; Description: Discussion Advanced Arrays
============================================
*/ 

const header = require('../bohnet-header.js');
console.log(header.display('Christine', 'Bohnet', 'bohnet-assignment-5.1'))




var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (var [key, value] of saying) {
  console.log(key + ' goes ' + value);
}









/*
COLLAPSE
Hi there, I was checking out your code by copying and pasting them into window console and codepen, then I double check it again on the VS code. and from there I was able to detect an error in your syntax:

for example


var sayings = new Map();
 	sayings.set('dog', 'woof');
 	sayings.set('cat', 'meow');
 	sayings.set('elephant', 'toot');
 	sayings.size; // 3
 	sayings.get('fox'); // undefined
 	sayings.has('bird'); // false
 	sayings.delete('dog');
 	sayings.has('dog'); // false
 	 
 	for (var [key; value] of saying) {
 	console.log(key + ' goes ' + value);
under this syntax I have discover in your program, there was an error where [key; value] has caused the error to be shown. So, I have fixed it by deleting the semi-colon between the key and value and once I have deleted that, from there on the second error has appeared and from there I was suppose to add a comma to fix this second error. So from there I have placed the comma , between key and valued and the error was gone.

  for (var [key; value] of saying) { console.log(key + ' goes ' + value);


 
    
 
     for 
      ( 
     var 
      [ 
     key 
     ,  
     value 
     ]  
     of 
       
     saying 
     ) { 
    
 
    
 
        
     console 
     . 
     log 
     ( 
     key 
      +  
     ' goes ' 
      +  
     value 
     ); 
    
 
    
 
     } 
    */