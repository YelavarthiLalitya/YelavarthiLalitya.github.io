const users = [];
let currentUser = null;

const showLogin = () => {
    const str = `
        <h1>Login Form</h1>
        <p><div id="dvMsg" style="color:red;"></div></p>
        <p><input type="text" id="txtEmail" placeholder="Email"></p>
        <p><input type="password" id="txtPass" placeholder="Password"></p>
        <p><button onclick="validateUser()">Log In</button></p>
        <p><button onclick="showRegister()">Create Account</button></p>
    `;
    root.innerHTML = str;
};

const showRegister = () => {
    const str = `
        <h1>Register Form</h1>
        <p><input type="text" id="txtName" placeholder="Name"></p>
        <p><input type="text" id="txtEmail" placeholder="Email"></p>
        <p><input type="password" id="txtPass" placeholder="Password"></p>
        <p><button onclick="addUser()">Register</button></p>
        <hr>
        <p><button onclick="showLogin()">Already a Member? Login here...</button></p>
    `;
    root.innerHTML = str;
};

const showHome = (user) => {
    currentUser = user;
    const str = `
        <h1>Welcome ${user.name}</h1>
        <hr>
        <select id="actionSelect">
            <option value="0">--select--</option>
            <option value="1">Deposit</option>
            <option value="2">Withdraw</option>
        </select>
        <p><input type="number" id="txtAmount" placeholder="Amount"></p>
        <p>
            <button onclick="doBalance()">Submit</button>
            <button onclick="showLogin()">Logout</button>
        </p>
        <p>Current Balance: ₹<span id="balanceDisplay">${user.balance}</span></p>
    `;
    root.innerHTML = str;
};

const addUser = () => {
    const user = {
        name: document.getElementById("txtName").value,
        email: document.getElementById("txtEmail").value,
        pass: document.getElementById("txtPass").value,
        balance: 0
    };
    users.push(user);
    showLogin();
};

const validateUser = () => {
    const email = document.getElementById("txtEmail").value;
    const pass = document.getElementById("txtPass").value;
    const found = users.find(u => u.email === email && u.pass === pass);

    if (found) {
        showHome(found);
    } else {
        document.getElementById("dvMsg").innerText = "Access Denied!";
    }
};

const doBalance = () => {
    const action = document.getElementById('actionSelect').value;
    const amount = Number(document.getElementById('txtAmount').value);

    if (!action || amount <= 0 || !currentUser) return;

    if (action === "1") {
        currentUser.balance += amount;
    } else if (action === "2") {
        if (currentUser.balance >= amount) {
            currentUser.balance -= amount;
        } else {
            alert("Insufficient balance!");
            return;
        }
    }

    document.getElementById("balanceDisplay").innerText = currentUser.balance;
};

showLogin();


//populating dropdown dynamically -> fund transfer