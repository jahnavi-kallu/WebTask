const form = document.getElementById("registerform");
const modalPopup = document.getElementById("modalPopup");
const modalMsg = document.getElementById("modalMsg");

form.onsubmit = function (event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const eventValue = document.getElementById("choosefield").value;

  const phonePattern = /^\d{10}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let message;

  if (!name || !email || !phone || !eventValue) {
    message = "All fields are required.";
  } else if (!phonePattern.test(phone)) {
    message = "Phone number must be exactly 10 digits.";
  } else if (!emailPattern.test(email)) {
    message = "Invalid email address.";
  } else {
    message = "Registration Successful!";
    form.reset(); 
  }

  showPopup(message);
};

function showPopup(message) {
  modalMsg.innerHTML = `<p>${message}</p>`;
  modalPopup.style.display = "flex";

  setTimeout(() => {
    modalPopup.style.display = "none";
  }, 3000);
}
