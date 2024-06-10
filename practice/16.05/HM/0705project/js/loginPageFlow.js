const accounts = {
    "rgam2002": {
        "Name" : "Ron",
        "Username": "rgam2002",
        "Password": "Dyrg2002",
        "Email": "rgam2002@gmail.com"
    }, "natan": {
        "Username": "natan",
        "Password": "123",
        "Email": "natan@gmail.com"
    },
    "polina" : {
        "Username": "polina",
        "Password": "polina",
        "Email": "polinaapolly@gmail.com"
    }
};

function login() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    if (accounts[userName] && accounts[userName].Password === password) {
        localStorage.setItem("currentUser", userName);
        window.location.href = "index.html";
        return false;
    } else {
        let error = document.createElement("div");
        error.textContent = "Please check your username and password";
        error.style.color = "red";
        document.querySelector(".loginCard").appendChild(error);
        return false;
    }
}

function register() {
    window.location.href = "register.html";
}

function submitRegistration() {
    let userName = document.getElementById("newUserName").value;
    let password = document.getElementById("newPassword").value;
    let email = document.getElementById("newEmail").value;

    // Check if the username already exists
    if (accounts[userName]) {
        alert("Username already exists. Please choose a different username.");
        return false;
    }

    let newUser = {
        "Username": userName,
        "Password": password,
        "Email": email
    };

    accounts[userName] = newUser;

    saveAccountsToLocalStorage();

    window.location.href = "login.html";
}

function saveAccountsToLocalStorage() {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}
