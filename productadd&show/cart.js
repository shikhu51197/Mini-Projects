let container2 = document.getElementById("container2")

let cartLS = JSON.parse(localStorage.getItem("cart-page"))||[]


var countdata = document.getElementById("count")

function  Display(countdata){
let count =0;
cartLS.forEach(function (el , index){
  
count +=1;
    let div  = document.createElement('div')


    let image = document.createElement('img')
    image.src = el.image
    image.style.width='100px'
    image.style.height ='100px'


    let  title = document.createElement('h3')
    title.innerText = el.title


    let  id = document.createElement('p')
    id.innerText = el.id


    let category = document.createElement('h3')
    category.innerText=el.category
 
    let  description = document.createElement('p')
    description.innerText = el.description

    let price = document.createElement('h3')
    price.innerText = el.price

     let button = document.createElement('button')
     button.innerText = "Remove Product"
     button.addEventListener("click" , function(){
        removedata(el , index)
     })

     div.append(image,title,id,price,category,description,button)

    container2.append(div)
    countdata.innerText= count
})
}

console.log(countdata)
Display(countdata)



function removedata(el,index){
    cartLS.splice(index,1)



    localStorage.setItem('cart-page', JSON.stringify(cartLS))
    window.location.reload()
}



