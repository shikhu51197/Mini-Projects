
import { navbar} from "./components/navbar.js";
import {Food_data } from "./components/data.js";


console.log(Food_data)


document.getElementById("navbar").innerHTML = navbar()

let container = document.getElementById("container")

let append =(Food_data) =>{

Food_data.forEach(({image_url, name, price, id},index) =>{

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
    btn.innerText = "Add to Cart";  
    
    btn.onclick =()=>{
      addfunc(Food_data,index)

    }

 div.append(img , h3, p ,i , btn)
container.append(div)
})    
}
append(Food_data)

let addfunc =(Food_data,index)=>{

    let storage = JSON.parse(localStorage.getItem("cart"))|| [];

    console.log(Food_data[index])
    storage.push(Food_data[index])

 localStorage.setItem("cart", JSON.stringify(storage))

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
