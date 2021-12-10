

const Signin =() =>{
    var email,password,admin;
    email = String(document.getElementById("username").value);
    password = String(document.getElementById("password").value);
    admin = (document.getElementById("adminradio").checked ? "admin":"customer");

    var user = {
        "email":email,
        "password":password,
        "role":admin
    }
    console.log(user);
}

export default Signin;