const directoryData = [
  { name: "Alice Johnson", role: "Photographer", image: "https://i.pravatar.cc/150?img=1" },
  { name: "Bob Smith", role: "Designer", image: "https://i.pravatar.cc/150?img=2" },
  { name: "Cathy Lee", role: "Developer", image: "https://i.pravatar.cc/150?img=3" },
  { name: "David Brown", role: "Manager", image: "https://i.pravatar.cc/150?img=4" },
  { name: "Evelyn Clark", role: "Artist", image: "https://i.pravatar.cc/150?img=5" },
  { name: "Frank Wright", role: "Writer", image: "https://i.pravatar.cc/150?img=6" },
  // Add more items as needed
];

const container = document.getElementById("directoryGrid");

directoryData.forEach(person => {
  const card = document.createElement("div");
  card.className = "bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition";

  card.innerHTML = `
    <img src="${person.image}" alt="${person.name}" class="w-24 h-24 rounded-full mb-3">
    <h3 class="text-lg font-semibold text-gray-800">${person.name}</h3>
    <p class="text-sm text-gray-500">${person.role}</p>
  `;

  container.appendChild(card);
});
