import axios from "axios";


const Signin =() =>{
    var email,password;
    email = String(document.getElementById("username").value);
    password = String(document.getElementById("password").value);

    var user = {
        "username":email,
        "password":password,
    }
    console.log(user);
    var userJSON = JSON.stringify(user);
    console.log(userJSON);
    axios(
        {
        method:'post',
        url: 'http://localhost:8081/authenticate',
        headers: {
            "Content-Type":"application/json"
        },
        data: userJSON
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}

export default Signin;