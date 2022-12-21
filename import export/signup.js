
import { navbar} from "./components/navbar.js";
import {Food_data } from "./components/data.js";


console.log(Food_data)


document.getElementById("navbar").innerHTML = navbar()


document.getElementById("register").addEventListener("click" ,register)

async function register() {
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;


  let form_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };

  form_data = JSON.stringify(form_data);

  let res = await fetch(
    "https://masai-api-mocker.herokuapp.com/auth/register",
    {
      method: "POST",
      body: form_data,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await res.json();
  console.log(data);



let store = JSON.parse(localStorage.getItem("signup_data"))||[]

let obj = {
    email,
   password,
}

store.push(obj);
localStorage.setItem("signup_data" , JSON.stringify(store))

};


document.getElementById("cart").addEventListener("click", ()=>{
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;


  if(store.length == 0){
    alert("please signup first to buy items")
    window.location.href = "signup.html"
}else {
    window.location.href = "checkout.html"
}


})



