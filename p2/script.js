const showLogin = () => {
    let str=`
    <div>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick='showHome()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button>Register</button>
    <hr>
    <button onClick='showLogin()'>Alread a Member? Login here...</button>
    `
    root.innerHTML = str
}

const showHome = () => {
    let str = `
    <h1>Welcome</h1>
    `
    root.innerHTML=str
}