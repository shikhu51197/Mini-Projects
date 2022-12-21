

let submit = ()=> {
 
    let  product_name = document.getElementById("product_name").value;
    let  product_image= document.getElementById("product_image").value;
    let  product_price= document.getElementById("product_price").value;
    let  product_category = document.getElementById("product_category").value

let p = new Product (product_name,product_image,product_price,product_category)
// console.log(p)

let Products = JSON.parse(localStorage.getItem("Products"))||[]

Products.push(p)
console.log(Products)

localStorage.setItem("Products", JSON.stringify(Products))
};


function Product (n,i,p,c){
    this.product_name= n;
    this.product_image= i;
    this.product_price = p;
    this.product_category= c;

}


