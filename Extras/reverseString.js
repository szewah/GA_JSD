// With methods

// function reverseString(str) {
// 	// split the string
// 	var strSplit = str.split("")
// 	// reverse the string
// 	strSplit.reverse()
// 	// join the string
// 	str = strSplit.join("")
// 	return str
// }


function reverseString(str) {
	var o = ''
	for (var i = str.length - 1; i >= 0; i--)
		o = o + str[i] //o += str[i]
	return o
}

console.log(reverseString("Slouching Towards Bethlehem"));
// reverseString('Greetings from the moon!');
