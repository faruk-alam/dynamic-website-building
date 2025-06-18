 const data = [
      { title: 'Card One', description: 'This is the first card.', color: 'bg-blue-100' },
      { title: 'Card Two', description: 'This is the second card.', color: 'bg-green-100' },
      { title: 'Card Three', description: 'This is the third card.', color: 'bg-yellow-100' },
    ];

    // Get container
    const container = document.getElementById('cardContainer');

    // Loop through data and create elements
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = `p-6 rounded-xl shadow-md ${item.color} hover:shadow-lg transition`;

      card.innerHTML = `
        <h2 class="text-xl font-semibold mb-2">${item.title}</h2>
        <p class="text-gray-700">${item.description}</p>
      `;

      container.appendChild(card);
    });