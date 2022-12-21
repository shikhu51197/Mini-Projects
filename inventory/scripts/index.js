


let submit = () => {

    let Name = document.getElementById("Name").value;
    let brand = document.getElementById("brand").value;
    let image = document.getElementById("image").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;


let p = new Product (Name,brand,image,price,category);
console.log(p);

let Products = JSON.parse(localStorage.getItem("Products"))||[]

Products.push(p)
console.log(Products)

localStorage.setItem("Products", JSON.stringify(Products))
};




function Product (n,b,i,p,c){
    this.Name = n;
    this.brand = b;
    this.image = i;
    this.price = p;
    this.category = c;

}

