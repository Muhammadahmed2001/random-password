var small = "abcdefghijklmnopqrstuvwxyz";
var capital = small.toUpperCase();
var num = "123456789";
var symbols = "!@#$%^&*?><";
var all = small + capital + num + symbols;
var password = "";
var strongLevel = 0;
var strong = false;
var passwordInput = document.getElementById("password-input")
var copied = document.querySelector('.copied')
var passwordStrength = document.getElementById("password-strength")



function generatePassword() {
  copied.style.display = "none"
  password = ""
  passwordStrength.value = ""
  strongLevel = 0
  for (var i = 0; i < 12; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  passwordInput.innerText = password
}



function copyText() {
  if (password !== "") {
    copied.innerHTML = "Copied!"
    copied.style.backgroundColor = "#a1a168"
    copied.style.display = "block"
    navigator.clipboard.writeText(passwordInput.innerText)
    passwordStrength.value = password
  } else {
    copied.style.display = "block"
    copied.innerHTML = "Password Not Generated"
    copied.style.backgroundColor = "#ff3939"

  }

}





function checkStrength() {
  if (passwordStrength.value !== "") {
    strongLevel = 0
    for (var j = 0; j < passwordStrength.value.length; j++) {
 
      if (capital.indexOf(passwordStrength.value[j]) !== -1) {
        strongLevel++
        break
      }
      
    }
    for (var k = 0; k < passwordStrength.value.length; k++) {
      
      if (small.indexOf(passwordStrength.value[k]) !== -1) {
        strongLevel++
        break
      }
    }
    for (var l = 0; l < passwordStrength.value.length; l++) {
      
      if (num.indexOf(passwordStrength.value[l]) !== -1) {
        strongLevel++
        break
      }
    }
    for (var m = 0; m < passwordStrength.value.length; m++) {
      
      if (symbols.indexOf(passwordStrength.value[m]) !== -1) {
        strongLevel++
        break
      }
    }
    
    if (strongLevel === 4 && passwordStrength.value.length >= 12) {
      strong = true
    }else{
      strong = false
    }
    
    if (strong) {
      copied.style.display = "block"
      copied.innerHTML = "Strong Password"
      copied.style.backgroundColor = "#3cc448"
    }else{
      copied.style.display = "block"
      copied.innerHTML = "Weak Password"
      copied.style.backgroundColor = "#ff3939"
    }
    
  } else {
    copied.style.display = "block"
    copied.innerHTML = "Password Not Generated"
    copied.style.backgroundColor = "#ff3939"
  }
}



















