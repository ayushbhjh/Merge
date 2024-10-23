// // Sample user data (replace this with your actual user authentication logic)
// const users = [
//   { email: "test@merge.com", password: "password123" },
//   { email: "user@example.com", password: "userpass" },

// {email: "Rahul3435@gmail.com", password: "Ayush@#12"},

// {email: "ram565@gmail.com", password: "ram12345" }, // Add more users as needed
// ];


// // Login form submission
// document.getElementById("login-form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent default form submission

//   // Get form data
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Validate credentials
//   const user = users.find((user) => user.email === email && user.password === password);

//   if (user) {
//     alert("Login successful! Redirecting to the home page.");
//     window.location.href = "index.html"; // Redirect to home page after successful login
//   } else {
//     alert("Invalid email or password. Please try again.");
//   }
// });

// Function to handle signup
function handleSignup(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const name = document.getElementById("name").value; // Get the name
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
  const newUser = { name, email, password }; // Include name in the user object
  existingUsers.push(newUser); // Add new user to the array
  localStorage.setItem("users", JSON.stringify(existingUsers)); // Save updated users array to localStorage

  alert("Signup successful! Welcome to Merge.");

  // Set the user's name in localStorage to show in navbar
  localStorage.setItem("currentUser", JSON.stringify({ name }));

  // Navigate to the home page after successful signup
  window.location.href = "index.html"; // Adjust this if your home page file has a different name
}

// Add event listener to the signup form
document.getElementById("signup-form").addEventListener("submit", handleSignup);
