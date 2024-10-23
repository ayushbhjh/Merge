// Function to handle signup
function handleSignup(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Simple password validation
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  // Retrieve existing users from localStorage or initialize an empty array
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the user already exists
  const userExists = existingUsers.some((user) => user.email === email);
  if (userExists) {
    alert("User already exists. Please log in.");
    return; // Stop further execution if user already exists
  }

  // Store new user data
  const newUser = { email, password };
  existingUsers.push(newUser); // Add new user to the array
  localStorage.setItem("users", JSON.stringify(existingUsers)); // Save updated users array to localStorage

  alert("Signup successful! Welcome to Merge.");
  
  // Navigate to the home page after successful signup
  window.location.href = "index.html"; // Adjust this if your home page file has a different name
}

// Add event listener to the signup form
document.getElementById("signup-form").addEventListener("submit", handleSignup);
