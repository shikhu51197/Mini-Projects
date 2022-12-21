import { navbar } from "./components/navbar.js";
import {Food_data } from "./components/data.js";


console.log(Food_data)


document.getElementById("navbar").innerHTML = navbar()



document.getElementById("cart").addEventListener("click",()=>{

    let store = JSON.parse(localStorage.getItem("signup_data"))||[]
  if(store.length == 0){
      alert("please login first to buy items")
      window.location.href = "login.html"
  }else {
      window.location.href = "checkout.html"
  }
  })
  


  
document.getElementById("checkout").addEventListener("click", checkfunc)

function checkfunc(){
let name = document.getElementById("name").value
let address = document.getElementById("address").value

if(name !=="" && address !== ""){
      alert(`${name} items accepted`)
      
  }else {
    alert(`please fill complete details`)
  }
} 
  

