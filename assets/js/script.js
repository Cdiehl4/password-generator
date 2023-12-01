// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}
function generatePassword(){ 
//  Step 1:Gather user input
// Step 2:Generate random string
// Step 3:Return string
return "069150"
} 	
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
