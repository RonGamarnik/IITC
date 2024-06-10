function saveUserDataLocal() {
    localStorage.setItem("accounts", JSON.stringify(userData));
}

function loadAccounts() {
    userData = getAccountsFromLocalStorage();
    currentUser = localStorage.getItem("currentUser");
}

function updateCurrentBalanceLocal() {
    localStorage.setItem("currentBalance", currentUserData.currentBalance);
}

function getAccountsFromLocalStorage() {
    const storedAccounts = localStorage.getItem("accounts");
    return storedAccounts ? JSON.parse(storedAccounts) : {};
}
