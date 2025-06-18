    const data = [
      { title: 'Card 1', desc: 'Description for card 1.' },
      { title: 'Card 2', desc: 'Description for card 2.' },
      { title: 'Card 3', desc: 'Description for card 3.' },
      { title: 'Card 4', desc: 'Description for card 4.' },
      { title: 'Card 5', desc: 'Description for card 5.' },
      { title: 'Card 6', desc: 'Description for card 6.' },
    ];

    const container = document.getElementById('cardContainer');
    let index = 0;

    function addCard(item) {
      const card = document.createElement('div');
      card.className = 'bg-white p-6 rounded-lg shadow hover:shadow-md transition';
      card.innerHTML = `
        <h2 class="text-xl font-bold mb-2">${item.title}</h2>
        <p class="text-gray-700">${item.desc}</p>
      `;
      container.appendChild(card);
    }

    // Initial cards
    for (let i = 0; i < 3; i++) {
      addCard(data[index++]);
    }

    // Load more on button click
    document.getElementById('loadBtn').addEventListener('click', () => {
      if (index < data.length) {
        addCard(data[index++]);
      } else {
        alert("No more cards to load!");
      }
    });
