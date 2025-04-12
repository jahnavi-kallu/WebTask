const form = document.getElementById("registerform");
const modalPopup = document.getElementById("modalPopup");
const modalMsg = document.getElementById("modalMsg");

form.onsubmit = function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const eventtype = document.getElementById("choosefield").value;

  const phonePattern = /^\d{10}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let msg;

  if (!name || !email || !phone || !eventtype) {
    msg = "All fields are required.";
  } else if (!phonePattern.test(phone)) {
    msg = "Phone number contains 10 digits";
  } else if (!emailPattern.test(email)) {
    msg = "Invalid email address.";
  } else {
    msg = "Registration Successful!!";
    form.reset(); 
  }

  showPopup(msg);
};

function showPopup(msg) {
  modalMsg.innerHTML = `<p>${msg}</p>`;
  modalPopup.style.display = "flex";

  setTimeout(() => {
    modalPopup.style.display = "none";
  }, 3000);
}
