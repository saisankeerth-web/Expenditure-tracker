let totalMoney = 0;
let totalSpent = 0;
let history = [];

function updateUI() {
  document.getElementById("totalMoney").textContent = totalMoney;
  document.getElementById("totalSpent").textContent = totalSpent;
  document.getElementById("leftover").textContent = totalMoney - totalSpent;

  const list = document.getElementById("historyList");
  list.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.amount}`;
    list.appendChild(li);
  });
}

function addMoney() {
  const input = document.getElementById("pocketMoney");
  const amount = parseInt(input.value);
  if (!isNaN(amount) && amount > 0) {
    totalMoney += amount;
    input.value = '';
    updateUI();
  } else {
    alert("Please enter a valid amount");
  }
}

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = parseInt(document.getElementById("expenseAmount").value);

  if (!name || isNaN(amount) || amount <= 0) {
    alert("Please enter valid expense details.");
    return;
  }

  if (amount > (totalMoney - totalSpent)) {
    alert("Not enough money left!");
    return;
  }

  totalSpent += amount;
  history.push({ name, amount });

  document.getElementById("expenseName").value = '';
  document.getElementById("expenseAmount").value = '';
  updateUI();
}

function toggleHistory() {
  const historyDiv = document.getElementById("history");
  historyDiv.classList.toggle("hidden");

  const btn = document.getElementById("historyBtn");
  btn.textContent = historyDiv.classList.contains("hidden") ? "📜 Show History" : "❌ Hide History";
}
