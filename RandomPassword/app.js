






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

// console.log(copied.innerHTML)

function generatePassword() {
  copied.style.display = "none"
  password = ""
  for (var i = 0; i < 12; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  
  passwordInput.innerText = password
}
var passwordStrength = document.getElementById("password-strength")



function copyText(){
  if(password !== ""){
    copied.innerHTML = "Copied!"
    copied.style.backgroundColor = "#a1a168"
    copied.style.display = "block"
    navigator.clipboard.writeText(passwordInput.innerText)
    passwordStrength.value = password
  }else{
    copied.style.display = "block"
    copied.innerHTML = "Password Not Generated"
    copied.style.backgroundColor = "#ff3939"

  }

}





// for (var j = 0; j < password.length; j++) {
//   // console.log(password[j],num.indexOf(password[j]));
//   if (capital.indexOf(password[j]) !== -1) {
//     strongLevel++
//     break
//   }

// }
// for (var k = 0; k < password.length; k++) {

//   if (small.indexOf(password[k]) !== -1) {
//     strongLevel++
//     break
//   }
// }
// for (var l = 0; l < password.length; l++) {

//   if (num.indexOf(password[l]) !== -1) {

//     strongLevel++
//     break
//   }
// }

// for (var m = 0; m < password.length; m++) {

//   if (symbols.indexOf(password[m]) !== -1) {

//     strongLevel++
//     break
//   }
// }

// if(strongLevel === 4){
//   strong = true
// }
// console.log("strong==> " + strong, password)

















