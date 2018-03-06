/*Create the function askPolitely that accepts a sentence as an argument.
If the last character of the sentence is a question mark, the question 
should end with the word "please?". 
If a question is already polite (meaning it already ends with "please") 
OR the sentence is not a question, ​return string argument without 
modification.*/

function askPolitely(sentence) {
	if(!sentence.includes('please') && sentence.includes('?')) {
		return sentence.slice(0,-1) + ' please?'
	}
	else {
		return sentence
	}
}

console.log(askPolitely("May I borrow your pencil?"))
console.log(askPolitely("May I ask a question please?"))
console.log(askPolitely("My name is Grace Hopper."))