let  value = JSON.parse(localStorage.getItem("cart")) 

let container = document.getElementById("items")



let count = document.getElementById("cart_count")
count.innerText = value.length




let render = (value) => {
    
      value.forEach(({category , title, brand , image , price,id},index)=>{
  
          let div = document.createElement("div")
           div.setAttribute("id" , "items")
  
          let  c = document.createElement("h3")
          c.innerText= category
  
          let img = document.createElement("img")
          img.src = image
          img.setAttribute("class" , "item")
          img.style.width ="100px"
          img.style.height ="100px"
  
  
          let t = document.createElement("p")
          t.innerText = title
  
          let b = document.createElement("p")
          b.innerText = brand
  
          let p = document.createElement("p")
          p.innerText = price
  
          let i = document.createElement("p")
          i.innerText = id
  
          let btn = document.createElement("button")
          btn.innerText = "Remove"
          btn.setAttribute("class" ,"remove")
          btn.onclick =() =>{
              remove(index)
          }
  
          div.append(c,img,t,b,p,i , btn)
          container.append(div)
      })
  }
  
  render(value)

  let remove = (id) => {
    let  value = JSON.parse(localStorage.getItem("cart"))

      value.splice(id,1)

      localStorage.setItem("cart" , JSON.stringify(value))
      window.location.reload()
  }


  document.getElementById("checkout").addEventListener("click", checkout)


  function checkout() {
  event.preventDefault()

    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    if(name && address != ""){
    alert(`${name}  your order is successful ! `)
    }
  }