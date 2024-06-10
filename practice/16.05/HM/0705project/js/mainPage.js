//--- data structure
let userData = {};

//--- functions

// Load the data from localStorage and initialize the application
function load() {
  loadAccounts();

  if (currentUser) {
    currentUserData = userData[currentUser];
    if (!currentUserData) {
      currentUserData = {
        lastExpenses: [],
        lastIncomes: [],
      };
      userData[currentUser] = currentUserData;
    }

    updateExpenses();
    updateIncomes();

    displayIncomeExpenses();
    showDate();
    updateCurrentBalance();
    updateInputOutline();
  }

  document.querySelector("#operation").addEventListener("change", updateInputOutline);
}

// Save user data to localStorage
function saveUserData() {
  saveUserDataLocal();
}

// Calculate and update the current balance display
function updateCurrentBalance() {
  let expensesSum = calculateTotal(currentUserData.lastExpenses);
  let incomeSum = calculateTotal(currentUserData.lastIncomes);
  let currentBalance = incomeSum - expensesSum;
  currentUserData.currentBalance = currentBalance;

  const currentBalanceDisplay = document.querySelector(".currentBalance");
  currentBalanceDisplay.textContent = currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (currentBalance >= 0) {
    currentBalanceDisplay.textContent = "+" + currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } else {
    currentBalanceDisplay.textContent = currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  updateCurrentBalanceLocal();
  saveUserData();
}

// Calculate the total amount from a list of transactions
function calculateTotal(transactions) {
  return transactions.reduce(
    (total, item) => total + (parseFloat(item.quantity) || 0),
    0
  );
}

// Display the summary of incomes and expenses
function displayIncomeExpenses() {
  let expensesSum = calculateTotal(currentUserData.lastExpenses);
  let incomeSum = calculateTotal(currentUserData.lastIncomes);
  let expensesPercentageDisplay = document.querySelector(".percentage");
  let percentage = showPercents(incomeSum, expensesSum).toFixed(0);

  const sumExpensesDisplay = document.querySelector(".expensesSumDisplay");
  expensesPercentageDisplay.textContent = `${percentage}%`;
  sumExpensesDisplay.textContent = `-${expensesSum.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const sumIncomeDisplay = document.querySelector(".incomeSumDisplay");
  sumIncomeDisplay.textContent = `+${incomeSum.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

//activate the trancation function for expenses
function updateExpenses() {
  const expensesContainer = document.querySelector(".lastExpenses");
  expensesContainer.innerHTML = "";
  currentUserData.lastExpenses.forEach((expense, index) => {
    expensesContainer.appendChild(
      createTransactionElement(expense, index, "expenses")
    );
  });
}

// activate the trancation function for incomes
function updateIncomes() {
  const incomesContainer = document.querySelector(".lastIncomes");
  incomesContainer.innerHTML = "";
  currentUserData.lastIncomes.forEach((income, index) => {
    incomesContainer.appendChild(
      createTransactionElement(income, index, "incomes")
    );
  });
}

// Create a DOM element for a transaction (income or expense)
function createTransactionElement(transaction, index, type) {
  const transactionDiv = document.createElement("div");
  transactionDiv.className = `${type}DisplayDiv`;

  const descElement = document.createElement("p");
  descElement.className = `${type}Description`;
  descElement.textContent = transaction.description || "No description";

  const valueAndRemove = document.createElement("div");
  valueAndRemove.className = "valueAndRemove";
  const valueElement = document.createElement("p");
  valueElement.className = `${type}Value`;
  let transactionValue = parseFloat(transaction.quantity) || 0;
  if (type === "incomes") {
    valueElement.textContent = "+" + transactionValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } else if (type === "expenses") {

    let totalExpenses = calculateTotal(currentUserData.lastExpenses);
    let expensePercentage = showPercents(totalExpenses, transactionValue).toFixed(0);

    valueElement.innerHTML = `-  ${transactionValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <p class="expensePercentageDisplay">${expensePercentage}%</p>`;

  }

  const removeButton = document.createElement("a");
  removeButton.innerHTML = `<i class="bi bi-x-circle"></i>`;
  removeButton.className = `${type}RemoveButton`;
  removeButton.addEventListener("click", () => {
    removeTransaction(type, index);
  });

  transactionDiv.appendChild(descElement);
  transactionDiv.appendChild(valueAndRemove);
  valueAndRemove.appendChild(valueElement);
  valueAndRemove.appendChild(removeButton);

  return transactionDiv;
}

// Remove a transaction (income or expense) and update the UI
function removeTransaction(type, index) {
  if (type === "expenses") {
    currentUserData.lastExpenses.splice(index, 1);
    updateExpenses();
    displayIncomeExpenses(currentUserData);
  } else if (type === "incomes") {
    currentUserData.lastIncomes.splice(index, 1);
    updateIncomes();
    displayIncomeExpenses(currentUserData);
  }
  updateCurrentBalance();
  saveUserData();
}

// Add a new expense or income to the object and then updates the UI
function addingExpensesOrIncomes() {
  const selectedOption = document.querySelector("#operation").value; 
  const description = document.querySelector(".discription").value.trim(); //removes spaces and tubs from the string to allow us add description to the UI and local storage
  const value = document.querySelector(".value").value.trim();

  if (description === "" || isNaN(value) || parseFloat(value) <= 0 || value == "") {
    return;
  }

  const transaction = {
    description: description,
    quantity: parseFloat(value)
  };

  if (selectedOption === "plus") {
    currentUserData.lastIncomes.push(transaction);
    updateIncomes();
  } else {
    currentUserData.lastExpenses.push(transaction);
    updateExpenses();
  }

  updateExpenses();
  updateIncomes();
  displayIncomeExpenses(currentUserData);
  updateCurrentBalance();
  saveUserData();
  updateInputOutline();

  document.querySelector(".discription").value = "";
  document.querySelector(".value").value = "";
}

// Retrieve accounts data from localStorage


// Display the current date in a specific format
function showDate() {
  let dateDisplay = document.querySelector(".date");
  let date = new Date();
  let monthIndex = date.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentMonth = months[monthIndex];
  let year = date.getFullYear();
  dateDisplay.textContent = `Available budget in ${currentMonth} ${year}:`;
}

// Calculate the percentage of expenses relative to income
function showPercents(incomeSum, expensesSum) {
  if (incomeSum == 0) {
    return 0;
  }
  else {
    let percentage = (expensesSum / incomeSum) * 100;
    return percentage;
  }
}

// Update the input fields' outline color based on the selected operation
function updateInputOutline() {
  const selectedOption = document.querySelector("#operation").value;
  const description = document.querySelector(".discription");
  const value = document.querySelector(".value");
  const btn = document.querySelector(".btn");

  if (selectedOption === "plus") {
    description.classList.remove("inputRed");
    value.classList.remove("inputRed");
    btn.classList.remove("buttonRed");
    description.classList.add("inputGreen");
    value.classList.add("inputGreen");
    btn.classList.add("buttonGreen");
  } else {
    description.classList.remove("inputGreen");
    value.classList.remove("inputGreen");
    btn.classList.remove("buttonGreen");
    description.classList.add("inputRed");
    value.classList.add("inputRed");
    btn.classList.add("buttonRed");
  }
}
function darkMode() {
  const elementsToToggle = [
    document.querySelector("body"),
    document.querySelector(".main"),
    document.querySelector(".balanceContainer"),
    document.querySelector(".inputBar"),
    document.querySelector(".table"),
  ];

  elementsToToggle.forEach(element => {
    element.classList.toggle("darkMode");
  });
}