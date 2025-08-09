// Sample data for the directory
const directoryData = [
    {
        id: 1,
        name: "John Doe",
        title: "Software Engineer",
        department: "Engineering",
        email: "john.doe@example.com",
        phone: "(555) 123-4567",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Jane Smith",
        title: "Marketing Director",
        department: "Marketing",
        email: "jane.smith@example.com",
        phone: "(555) 234-5678",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 3,
        name: "Robert Johnson",
        title: "Product Manager",
        department: "Product",
        email: "robert.johnson@example.com",
        phone: "(555) 345-6789",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 4,
        name: "Emily Davis",
        title: "UX Designer",
        department: "Design",
        email: "emily.davis@example.com",
        phone: "(555) 456-7890",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 5,
        name: "Michael Wilson",
        title: "DevOps Engineer",
        department: "Engineering",
        email: "michael.wilson@example.com",
        phone: "(555) 567-8901",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 6,
        name: "Sarah Thompson",
        title: "HR Manager",
        department: "Human Resources",
        email: "sarah.thompson@example.com",
        phone: "(555) 678-9012",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
];

// Function to create a directory card
function createDirectoryCard(person) {
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <img src="${person.image}" alt="${person.name}" class="w-16 h-16 rounded-full object-cover mr-4">
                    <div>
                        <h3 class="text-xl font-semibold text-gray-800">${person.name}</h3>
                        <p class="text-gray-600">${person.title}</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <p class="text-gray-700"><i class="fas fa-building mr-2 text-blue-500"></i> ${person.department}</p>
                    <p class="text-gray-700"><i class="fas fa-envelope mr-2 text-blue-500"></i> ${person.email}</p>
                    <p class="text-gray-700"><i class="fas fa-phone mr-2 text-blue-500"></i> ${person.phone}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to render the directory
function renderDirectory() {
    const container = document.getElementById('directory-container');
    container.innerHTML = directoryData.map(person => createDirectoryCard(person)).join('');
}

// Initialize the directory when the page loads
document.addEventListener('DOMContentLoaded', renderDirectory);