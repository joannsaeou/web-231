/*
============================================
; Title:  header.js
; Author: Professor Krasso
; Date:   05 December 2019
; Modified By: Joann Saeou
; Description: name header exercise-2.3
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
	new Date().toLocaleDateString('en-US')

	return output
}
