//store the products array in localstorage as "products"


document.getElementById("products").addEventListener("submit",submitFun)
 var userdata = JSON.parse(localStorage.getItem('products'))||[]





function submitFun(e){
    e.preventDefault();
    var form = document.getElementById("products")
    var type = form.type.value;
    var description = form.desc.value;
    var price = form.price.value;
    var image = form.image.value;


    let obj = {
        type:type,
        desc: description,
        price: price,
        image: image,
    }


    console.log(obj);
    userdata.push(obj);
    console.log(userdata);



    localStorage.setItem('products' , JSON.stringify(userdata))
}

document.getElementById("show_products").addEventListener("click",function(){
    window.location.href="./inventory.html"
})


