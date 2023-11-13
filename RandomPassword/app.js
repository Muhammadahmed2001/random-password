var small = "abcdefghijklmnopqrstuvwxyz";
var capital = small.toUpperCase();
var num = "123456789";
var symbols = "!@#$%^&*?><";
var all = small + capital + num + symbols; // length 72
var password = "";
var strong = true;

for (i = 0; i < 12; i++) {
  password += all[Math.floor(Math.random() * 72)];
}
for (i = 0; i < password.length; i++) {
//   if (password[i] !== num.indexOf(-1)) {
//     strong = false;
//     alert("strong");
//   } else {
//     alert("week");
//   }

//   console.log(strong);
}
