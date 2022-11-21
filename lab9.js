//LAB 9-DATA STORAGE: INDEX PAGE
window.onload = function () {
  let theForm = document.forms.infoForm;
  let updateWelcome = document.getElementById("newMsgBox");
  let userName = localStorage.getItem("Username");
  let userColour = localStorage.getItem("UserColor");
  let deleteBtn = document.getElementById("btnDel");

  theForm.onsubmit = customizeForm;

  function customizeForm() {
    let userNameValue = theForm.f_name;
    // console.log(`The User's Name is: ${userNameValue.value}`);
    localStorage.setItem("Username", userNameValue.value);
    let userColourValue = theForm.f_color;
    // console.log(`The User's colour is: ${userColourValue.value}`);
    localStorage.setItem("UserColor", userColourValue.value);
  }

  if (userName !== null) {
    updateWelcome.innerHTML = `Welcome, ${userName}!`;
  }

  if (userColour !== null) {
    document.body.style.background = `${userColour}`;
  }

  deleteBtn.onclick = clearAll;
  function clearAll() {
    localStorage.clear();
    location.reload();
  }
};
