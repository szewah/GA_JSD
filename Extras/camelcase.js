/*underToCamel

Write a function to convert a variable name from under_score format to 
camelCase. 

Make sure you support an unlimited number of underscores in the input!  
You will not have to worry about white space in your input, only 
alphanumeric characters and underscores.*/

function underToCamel(underscore_str) {
	var found = false
	var newStr = ""
	for(var i = 0; i<underscore_str.length; i++) {
		if(underscore_str[i] === "_") {
			found = true
		} 
		else {
			if(found) {
				newStr += underscore_str[i].toUpperCase()
				found = false
			}
			else {
				newStr += underscore_str[i]
			} 
		}
	}
	return newStr
}


console.log(underToCamel("first_name"));
//OUTPUT: "firstName"

console.log(underToCamel("my_income_tax_from_2015"));
//OUTPUT: "myIncomeTaxFrom2015"



