// Simple static list of button labels
const buttonLabels = [
  "Dashboard",
  "Profile",
  "Settings",
  "Messages",
  "Notifications",
  "Logout"
];

// Get the container element
const buttonContainer = document.getElementById("buttonList");

// Loop through the labels and create buttons
buttonLabels.forEach(label => {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.className = "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition";

  // Optional click handler
  btn.onclick = () => alert(`${label} clicked`);

  // Add to the DOM
  buttonContainer.appendChild(btn);
});
