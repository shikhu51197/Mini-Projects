
import { navbar} from "./components/navbar.js";
import {Food_data } from "./components/data.js";


console.log(Food_data)


document.getElementById("navbar").innerHTML = navbar()




document.getElementById("login").addEventListener("click" ,login)

async  function login(){
    let user_data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
  
    user_data = JSON.stringify(user_data);
  
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: user_data,
  
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    let data = await res.json();
  
    let username = document.getElementById('username').value;
    getUserDetail(username, data.token);
    console.log(data);
  };
  
  
  
  let getUserDetail = async (username, token) => {
      console.log("here");
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    let data = await res.json();
    console.log("user data: ", data);
 

    alert("signup successful")
    window.location.href ="./index.html";
  };

document.getElementById("cart").addEventListener("click",()=>{

  let store = JSON.parse(localStorage.getItem("signup_data"))||[]
if(store.length == 0){
    alert("please login first to buy items")
    window.location.href = "login.html"
}else {
    window.location.href = "checkout.html"
}
})
