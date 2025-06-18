  const sections = [
      {
        title: "Latest Articles",
        items: [
          { title: "Intro to JS", desc: "Learn JavaScript basics." },
          { title: "Understanding Flexbox", desc: "CSS layout with flex." },
        ],
      },
      {
        title: "Popular Tutorials",
        items: [
          { title: "React for Beginners", desc: "Get started with React." },
          { title: "Tailwind Crash Course", desc: "Utility-first CSS styling." },
        ],
      },
      {
        title: "Top Products",
        items: [
          { title: "VS Code", desc: "Best code editor." },
          { title: "Figma", desc: "Collaborative design tool." },
        ],
      },
    ];

    const main = document.getElementById('mainContent');

    // Loop through each section
    sections.forEach(section => {
      // Create section container
      const sectionEl = document.createElement('section');
      sectionEl.className = 'space-y-6';

      // Add heading
      const heading = document.createElement('h2');
      heading.className = 'text-2xl font-bold text-gray-800';
      heading.textContent = section.title;
      sectionEl.appendChild(heading);

      // Card grid
      const grid = document.createElement('div');
      grid.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6';

      // Add cards
      section.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-lg shadow hover:shadow-md transition';
        card.innerHTML = `
          <h3 class="text-lg font-semibold mb-2">${item.title}</h3>
          <p class="text-gray-600">${item.desc}</p>
        `;
        grid.appendChild(card);
      });

      sectionEl.appendChild(grid);
      main.appendChild(sectionEl);
    });