let state = {
  hearts: 0,
  coins: 100,
  copies: 0,
  history: []
};

function render() {
  document.getElementById("heartCount").textContent = state.hearts;
  document.getElementById("coinCount").textContent = state.coins;
  document.getElementById("copyCount").textContent = state.copies;

  let list = document.getElementById("historyList");
  list.innerHTML = "";
  state.history.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.service} - ${item.number} (${item.time})`;
    list.appendChild(li);
  });
}

function addHeart() {
  state.hearts++;
  render();
}

function copyNumber(num) {
  navigator.clipboard.writeText(num);
  alert("Copied: " + num);
  state.copies++;
  render();
}

function callService(service, num) {
  if (state.coins < 20) {
    alert("Not enough coins!");
    return;
  }
  state.coins -= 20;
  let now = new Date().toLocaleTimeString();
  alert("Calling " + service + " (" + num + ")");
  state.history.push({ service, number: num, time: now });
  render();
}

function clearHistory() {
  state.history = [];
  render();
}

render();