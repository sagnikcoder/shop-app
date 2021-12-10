import axios from "axios";

const Formdata=()=>{
    var fname,lname,email,password,admin;
    fname = String(document.getElementById("formBasicFirstName").value);
    lname = String(document.getElementById("formBasicLastName").value);
    email = String(document.getElementById("formBasicEmail").value);
    password = String(document.getElementById("formBasicPassword").value);
    admin = (document.getElementById("formBasicRadio").checked ? "admin":"customer");

    var user = {
        "firstName":fname,
        "lastName":lname,
        "email":email,
        "password":password,
        "role":admin
    }
    console.log(user);
    var userJSON = JSON.stringify(user);
    console.log(userJSON);

    // fetch(`http://localhost:8081/api/v1/registration`,
    // {
    //     method:"post",
    //     headers:{
    //         "Content-Type":"application/json;charset=utf-8",
    //         "Accept":"application/json",
    //         "Data-Type":"json"
           
    //     },
    //     body:userJSON,
    //     mode: 'no-cors'

    // }).then(function(response){
    //     console.log(response);
    // }).catch(function(error){
    //     console.log(error);
    // })

    axios({
        method: 'post',
        url: 'http://localhost:8081/api/v1/registration',
        headers: {
            "Content-Type":"application/json"
        },
        data: userJSON
      }).then(function (response) {
        // if(response.status===200){  
        // axios({
        //       method: 'get',
        //       url: 'http://localhost:8081/login'
        //   }).then(function(response){
        //       console.log(response)
        //   }).catch(function(error){
        //       console.log(error);
        //   })
        // }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
}

export default Formdata;