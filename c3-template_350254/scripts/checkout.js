 

 let checkoutarr=JSON.parse(localStorage.getItem("checkout"))


 function mycheckout(){

    checkoutarr.forEach(function(el){

        let container=document.getElementById("hotel_details")
        let boxi=document.createElement("div")
        boxi.setAttribute("id","boxi")

        let box1=document.createElement("div")
        let box2=document.createElement("div")

        let img1=document.createElement("img")
        img1.src=el.Images.one
        box1.append(img1)
        img1.style.width="400px"
        img1.style.height="200px"

        let img2=document.createElement("img")
        img2.src=el.Images.two;
        box2.append(img2)
        img2.style.width="400px"
        img2.style.height="200px"

        boxi.append(box1,box2)
      
        let title=document.createElement("h3")
        title.innerText=el.Title;
    
        let price=document.createElement("h3")
        price.innerText="Price Per Room Rs "+el.Price;

        container.append(boxi,title,price)

    })
 }

 mycheckout()


 document.querySelector("form").addEventListener("submit",bookme)

 let formtag=document.querySelector("form")

 function bookme(){
    event.preventDefault()
    let name=formtag.user_name.value

    alertt(name)
 }

   function alertt(name){
    let id=setTimeout(function(){
        alert(`${name } Your booking is successful!`)
    },5000)
 }