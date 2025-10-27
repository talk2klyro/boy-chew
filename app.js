fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Apply theme
    document.getElementById('body').style.background = data.theme.gradient;

    // Main info
    document.getElementById('name').textContent = data.name;
    document.getElementById('role').textContent = data.role;
    document.getElementById('bio').textContent = data.bio;

    // Photo
    document.getElementById('photo-container').innerHTML = `
      <img src="${data.photo}" alt="${data.name}" class="w-full h-full object-cover">
    `;

    // Button
    const btn = document.getElementById('profile-btn');
    btn.href = data.button_url;
    btn.style.backgroundColor = data.theme.accent;
    btn.textContent = `Connect with ${data.name.split(' ')[0]}`;

    // Cards
    const cardsContainer = document.getElementById('cards');
    data.cards.forEach(card => {
      const div = document.createElement('div');
      div.className =
        "bg-white/10 border border-blue-500 rounded-xl p-4 text-left shadow-lg hover:shadow-blue-500/40 transition-all hover:-translate-y-1";
      div.innerHTML = `
        <h3 class="text-blue-300 font-semibold mb-2">${card.title}</h3>
        <p class="text-gray-200 text-sm leading-relaxed">${card.content}</p>
      `;
      cardsContainer.appendChild(div);
    });

    // Socials
    const socialsDiv = document.getElementById('socials');
    const icons = {
      facebook: "🌐",
      instagram: "📸",
      x: "✖️"
    };
    Object.entries(data.socials).forEach(([key, url]) => {
      const a = document.createElement('a');
      a.href = url;
      a.target = "_blank";
      a.className = "text-2xl hover:text-blue-400 transition";
      a.innerHTML = icons[key];
      socialsDiv.appendChild(a);
    });
  })
  .catch(err => console.error("Error loading Saleh Musa data:", err));
