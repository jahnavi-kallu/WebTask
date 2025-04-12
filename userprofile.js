function enableEdit() {
    document.getElementById("editName").value = document.getElementById("username").textContent;
    document.getElementById("editEmail").value = document.getElementById("emailaddress").textContent;
    document.getElementById("editPhone").value = document.getElementById("contact").textContent;
    document.getElementById("editint").value = document.getElementById("eventtype").textContent;
    document.getElementById("editinfo").style.display = "block";
  }
  
  function updateProfile(event) {
    event.preventDefault();
  
    document.getElementById("username").textContent = document.getElementById("editName").value;
    document.getElementById("emailaddress").textContent = document.getElementById("editEmail").value;
    document.getElementById("contact").textContent = document.getElementById("editPhone").value;
    document.getElementById("eventtype").textContent = document.getElementById("editint").value;
  
    document.getElementById("editinfo").style.display = "none";
    const msg = document.getElementById("popup");
    msg.style.display = "block";
    setTimeout(() => {
    msg.style.display = "none";
    }, 3000);
}