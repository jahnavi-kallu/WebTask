function SignIn(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "" || password === "") {
      alert("Please fill in all fields!");
      return;
    }
  
    const popup = document.getElementById("popup");
    popup.style.display = "block";
  
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
  