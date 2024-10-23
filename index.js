// Function to update the navbar with the user's name
function updateNavbar() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userInfo = document.getElementById("user-info");

  if (currentUser) {
    userInfo.innerHTML = `Hello, ${currentUser.name} | <a href="#" onclick="logout()">Logout</a>`;
  } else {
    userInfo.innerHTML = '<a href="signup.html">Signup</a>';
  }
}

// Function to handle logout
function logout() {
  localStorage.removeItem("currentUser"); // Remove the user from localStorage
  updateNavbar(); // Update navbar to reflect logout
}

// Call updateNavbar when the page loads
window.onload = updateNavbar;

// Function to display the current year in the footer
function displayCurrentYear() {
  const currentYear = new Date().getFullYear(); // Get the current year
  document.getElementById("current-year").innerText = currentYear; // Set the year in the footer
}

// Call the function when the page loads
window.onload = displayCurrentYear;
