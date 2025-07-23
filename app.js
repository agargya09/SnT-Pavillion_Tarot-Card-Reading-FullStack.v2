const tarotCards = {
  "CPI: The Vanishing Act": "You opened your portal hoping for a 9. You closed it like you saw a horror movie.",
  "The Cult Clown Move": "You did Galaxy for attention. All you got was back pain and a sympathy clap.",
  "The 4AM Lie": "You said it’s ‘productive time’. You just ended up rearranging icons on your desktop.",
  "CHM101 Facepalm": "You said ‘easy course’. First quiz said ‘hahaha’ in bold italics.",
  "The Freshie Frenzy": "You joined every club. Now you’re overcommitted, undercaffeinated, and ghosting 7 WhatsApp groups.",
  "The Midsem Mirage": "You thought you aced the midsem. Turns out you aced writing your roll number.",
  "The Sleep Schedule Scam": "‘Just a quick nap’ turned into 4 missed lectures and a haunting dream about attendance.",
  "The Canteen Catastrophe": "You trusted the mess menu. You believed the canteen would deliver. And you paid the price.",
  "The Infinite Loop of Regret": "You picked a course for fun. Now you’re stuck in recursion — emotionally and in code.",
  "The Professor’s Poker Face": "You asked a doubt. He smiled. You still don’t know if it was valid or existentially stupid.",
  "The 'Tripod's' Blessing": "You made eye contact with the 'Tripod'. Since then, things have only gone downhill.",
  "The CPT: Crush Presentation Trauma": "You volunteered. She presented. You forgot how to breathe.",
  "The Spreadsheet Spiral": "You made a time table. You followed it for 4 hours. Now it mocks you from the desktop.",
  "The Wingmate Wakeup Curse": "You tried sleeping. He played EDM. Now you know the true meaning of ‘character development’.",
  "The Bhool Gaya Blessing": "Assignment? Quiz? Lab? Doesn’t matter — bhool gaya.",
  "The Group Project Ghosting": "You did all the work. They got the marks. And now they're ‘too busy’ to reply.",
  "The Attendance Algorithm": "You calculated the minimum classes needed to pass. Then missed them anyway.",
  "The Night Canteen Enlightenment": "You went for Maggi. You returned with 3 new life philosophies and zero notes completed.",
  "The Backbench Oracle": "You sat in the last row for vibes. Now you’re three lectures behind and spiritually confused.",
  "The Freshie Election Eclipse": "You ran for a post. 3 people voted. One of them thought it was for canteen feedback.",
  "The GPA Mirage": "The curve giveth, the prof taketh away. You end up with a CPI that haunts your dreams."
};

const app = document.getElementById('app');

let selectedCards = [];

function renderCards() {
  app.innerHTML = '';
  const container = document.createElement('div');
  Object.keys(tarotCards).forEach(cardName => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.textContent = cardName;
    cardDiv.onclick = () => selectCard(cardName, cardDiv);
    if (selectedCards.includes(cardName)) {
      cardDiv.classList.add('selected');
    }
    container.appendChild(cardDiv);
  });
  const button = document.createElement('button');
  button.textContent = 'Reveal Future';
  button.disabled = selectedCards.length !== 3;
  button.onclick = revealFuture;
  container.appendChild(button);
  app.appendChild(container);
}

function selectCard(cardName, cardDiv) {
  if (selectedCards.includes(cardName)) {
    selectedCards = selectedCards.filter(c => c !== cardName);
    cardDiv.classList.remove('selected');
  } else {
    if (selectedCards.length === 3) return alert('Select only 3 cards!');
    selectedCards.push(cardName);
    cardDiv.classList.add('selected');
  }
  renderCards();
}

function revealFuture() {
  if (selectedCards.length !== 3) return alert('Please select exactly 3 cards.');
  app.innerHTML = '<p>Predicting the future...</p>';
  setTimeout(() => {
    let message = 'Your selected cards and their meanings:\n';
    selectedCards.forEach(card => {
      message += `- ${card}: ${tarotCards[card]}\n`;
    });
    app.innerHTML = `<pre>${message}</pre><button onclick='reset()'>Restart</button>`;
  }, 3000);
}

function reset() {
  selectedCards = [];
  renderCards();
}

// Initial Render
renderCards();
