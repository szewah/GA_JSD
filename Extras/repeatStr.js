function repeatStr(str, num) {
	// Step 1. Create an empty string that will host the repeated string
	var repeatString = ""
	// Step 2. Set the While loop with (times > 0) as the condition to check
	while (num > 0) { // As long as times is greater than 0, the statement is executed
		// The statement
		repeatString = repeatString + str // Same as repeatedString = repeatedString + string;
		num = num -1 // Same as times = times - 1;
	}
	return repeatString
}

// https://medium.freecodecamp.org/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d

// function repeatStr(str, num) {
// 	if (num < 0) {
// 		return ''
// 	}
// 	if (num === 1) {
// 		return str
// 	}
// 	else 
// 		return str + repeatStr(str, num -1)
// }


console.log(repeatStr('yo', 4))
console.log(repeatStr('bye', 10))