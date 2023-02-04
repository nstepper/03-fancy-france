function generatePassword() {
  var passwordLength = document.querySelector("#passwordLength").value;
  var includeSpecial = document.querySelector("#includeSpecial").checked;
  var includeUpper = document.querySelector("#includeUpper").checked;
  var includeLower = document.querySelector("#includeLower").checked;
  var password = "";
  var charset = "";
  

  if (includeSpecial) {
    charset += "!@#$%^&*()";
  }
  if (includeUpper) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLower) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (charset === "") {
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  for (var i = 0, n = charset.length; i < passwordLength; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }

  return password;
}

// Get references to the form elements
var generateBtn = document.querySelector("#generate");
var passwordLength = document.querySelector("#passwordLength");
var includeSpecial = document.querySelector("#includeSpecial");
var includeUpper = document.querySelector("#includeUpper");
var includeLower = document.querySelector("#includeLower");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
