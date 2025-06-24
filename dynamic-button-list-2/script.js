// Button data
const buttons = [
    { id: 1, text: "Home", icon: "home", color: "blue" },
    { id: 2, text: "Settings", icon: "cog", color: "gray" },
    { id: 3, text: "Messages", icon: "envelope", color: "green" },
    { id: 4, text: "Notifications", icon: "bell", color: "yellow" },
    { id: 5, text: "Profile", icon: "user", color: "purple" }
];

// Color mapping
const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    gray: "bg-gray-500 hover:bg-gray-600",
    green: "bg-green-500 hover:bg-green-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    purple: "bg-purple-500 hover:bg-purple-600"
};

// Create a single button element
function createButton(button) {
    const btn = document.createElement("button");
    btn.className = `w-full flex items-center justify-between px-4 py-3 rounded-md 
                    text-white ${colorClasses[button.color]} transition-all 
                    transform hover:scale-[1.02] shadow-md`;
    
    btn.innerHTML = `
        <span class="font-medium">${button.text}</span>
        <i class="fas fa-${button.icon}"></i>
    `;
    
    btn.addEventListener("click", () => {
        console.log(`Button clicked: ${button.text}`);
        // Add your button click logic here
    });
    
    return btn;
}

// Render all buttons
function renderButtons() {
    const container = document.getElementById("button-list");
    container.innerHTML = "";
    
    buttons.forEach(button => {
        container.appendChild(createButton(button));
    });
}

// Initialize the button list
document.addEventListener("DOMContentLoaded", renderButtons);

