
var storedata = JSON.parse(localStorage.getItem("products"))




storedata.map(function(el,index){
    var packet = document.createElement("div")

    var image = document.createElement("img")
    image.src=el.image
    image.style.width="100px"
    image.style.height ="100px"


    var type = document.createElement("h3")
    type.innerText =el.type;

    var description= document.createElement("p")
    description.innerText=el.desc

    var price = document.createElement("p")
    price.innerText= el.price


    var button = document.createElement("button")
    button.innerText= "Remove product"
    button.addEventListener("click",function(){
        removeproduct(el,index)
    })


    packet.append(image,type,description,price, button)
    document.getElementById("all_products").append(packet)



})


function removeproduct(el,index){
storedata.splice(index,1)


localStorage.setItem('products' , JSON.stringify(storedata))
window.location.reload()
}


document.getElementById("add_more_product").addEventListener("click",function(){
    window.location.href="./index.html"
})
