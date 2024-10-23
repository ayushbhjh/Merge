// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  
  // Simple form validation (you can extend this)
  if (name && email && subject && message) {
    alert(`Thank you, ${name}. Your message has been sent!`);
    // Clear the form
    document.getElementById("contact-form").reset();
  } else {
    alert("Please fill in all fields.");
  }
});
