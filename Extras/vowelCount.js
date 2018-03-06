
/*Create the function vowelCount(str) that takes a str parameter and 
returns the number of vowels the string contains 
(ie. "Fullstack Academy" would return 5).*/  


var vowelList = 'aeiouAEIOU'
var vowelC = 0

function vowelCount(str) {
	for (var i = 0; i<str.length; i++) {
		if (vowelList.indexOf(str[i]) != -1) {
			vowelC ++
		}
	}
	return vowelC
}

console.log(vowelCount("FullStack Academy"));
// OUTPUT: 3

console.log(vowelCount('Yankees'));
// OUTPUT: 3