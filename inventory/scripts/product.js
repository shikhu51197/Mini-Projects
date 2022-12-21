


let render =() => {
    let Products = JSON.parse(localStorage.getItem("Products"))||[];
    let container = document.getElementById("container");
    container.innerHTML = null;


Products.forEach(({Name,brand,image, price,category

}, index) =>{
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = image;
    img.style.height = "100px";
    img.style.width = "100px";

    let h1 = document.createElement("h1");
    h1.innerText = Name;

    let h3 = document.createElement("h3")
    h3.innerText = brand;

    let h4 = document.createElement("h4");
    h4.innerText = price;

   let p = document.createElement("p")
   p.innerText = category;

   let remove_btn = document.createElement("button");
    remove_btn.innerText = "Remove";

    remove_btn.onclick =() => {
        remove(index);
    };


   div.append(img,h1,h3,h4,p ,remove_btn);
   container.append(div);

});


};

render();



let remove =(id) => {
    let Products = JSON.parse(localStorage.getItem("Products"))
    Products.splice(id,1)

    localStorage.setItem("Products", JSON.stringify(Products))
    render();

}
