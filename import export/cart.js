import { navbar} from "./components/navbar.js";
import {Food_data } from "./components/data.js";


console.log(Food_data)


document.getElementById("navbar").innerHTML = navbar();


let storage = JSON.parse(localStorage.getItem("cart"));



let container = document.getElementById("menu")

let append =(storage) =>{

    storage.forEach(({image_url, name, price, id},index) =>{

    let  div = document.createElement("div")

    let img = document.createElement("img")
    img.src = image_url
    img.style.width="100px"
    img.style.height="100px"

    let h3 = document.createElement("h3")
    h3.innerText = name

    let p = document.createElement("h5")
    p.innerText = price

    let i = document.createElement("p")
    i.innerText = id

    let btn = document.createElement("button");
    btn.innerText = "Remove";  
    
    btn.onclick=() =>{
        removefunc(index)
    }

 div.append(img , h3, p ,i , btn)
container.append(div)



})    
}
append(storage)


let removefunc =(index) => {
    let storage = JSON.parse(localStorage.getItem("cart"));

    storage.splice(index, 1)

    localStorage.setItem("cart", JSON.stringify(storage))

    window.location.reload()

}



document.getElementById("cart").addEventListener("click",()=>{

    let store = JSON.parse(localStorage.getItem("signup_data"))||[]
  if(store.length == 0){
      alert("please signup first to buy items")
      window.location.href = "signup.html"
  }else {
      window.location.href = "checkout.html"
  }
  })
  