//LAB 9-DATA STORAGE: PRODUCTS PAGE
let updateWelcome = document.getElementById("newMsgBox");
let userName = localStorage.getItem("Username");
let userColour = localStorage.getItem("UserColor");

if (userName !== null) {
  updateWelcome.innerHTML = `Welcome, ${userName}!`;
}

if (userColour !== null) {
  document.body.style.background = `${userColour}`;
}
