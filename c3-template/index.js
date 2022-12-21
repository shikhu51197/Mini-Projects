// Write all the Javascript here
// fill in javascript code here

let form = document.querySelector('form');
let tbody = document.querySelector('tbody');
form.addEventListener("submit", function(event){
 event.preventDefault();
 
 let obj={
    name: form.name.value,
    category : form.category.value,
    brand: form.brand.value,
    price: form.price.value,
    delivery: form.deliveredBy.value,

 };
//  console.log(obj);
 display(obj);
})
 function display(obj){
    let tr= document.createElement("tr");

    let  name = document.createElement("td")
     name.innerText=obj.name;

    let category = document.createElement("td")
    category.innerText=obj.category;

    let brand = document.createElement("td")
    brand.innerText=obj.brand;

    let price = document.createElement("td")
     price.innerText=obj.price;

    let  delivery= document.createElement("td")
    delivery.innerText=obj.delivery;

    let priceSegment = document.createElement("td")
       let priceText =giveprice(obj.price)
       priceSegment.innerText=priceText;

       
       let deleteEl =document.createElement("td");
       deleteEl.innerText="Delete";
       deleteEl.addEventListener("click",function(event){
        event.target.parentNode.remove();

       })
      
        deleteEl.style.color="red"
       tr.append(name,category,brand,price,delivery, priceSegment,deleteEl)
        tbody.append(tr);
 }


 function giveprice(price){
    if(price>1000)
    {
    return "Expensive";
    }
    else 
    {
    return"Not-Expensive";

    }
 }