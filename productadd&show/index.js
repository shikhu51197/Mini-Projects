

let container = document.getElementById('container');
let cartLS = JSON.parse(localStorage.getItem("cartPage"))||[]

let data;

async function getData(){
try{
let res =await fetch('https://fakestoreapi.com/products')


  data = await res.json();
  appendProducts(data);
console.log('data:',data);

} catch (err) {
console.log('err:',err);
}

}


getData();



function  appendProducts(data){

  container.innerHTML=null
    data.forEach(function  (el) {

     let div = document.createElement('div')

     let image = document.createElement('img')
     image.src = el.image

     let title = document.createElement('h3')
     title.innerText = el.title;


     let id = document.createElement('p')
     id.innerText= el.id;


     let category = document.createElement('h3')
     category.innerText= el.category;

     let description= document.createElement('p')
     description.innerText= el.description;


     let price = document.createElement('h3')
     price.innerText = el.price

     let button = document.createElement('button')
    button.innerText = 'Add to Cart'
    button.addEventListener('click',function(){
      AddToCart(el)
    })
    

    div.append(image,title,id,price,category,description,button )
    container.append(div)


     

    });
}

function AddToCart(div){
  for(let i=0;i<cartLS.length;i++){
    if(cartLS[i].id ==div.id){
      alert("product already added in the Cart");
      return;
    }
  }
  cartLS.push(div);
  alert("product Added Successfully");

  localStorage.setItem("cart-page",JSON.stringify(cartLS));
}
           


function SortLH(){
  data = data.sort(function (a,b){
  return a.price -b.price;
});

appendProducts(data);
}


function SortHL(){
  data = data.sort(function (a,b){
  return b.price -a.price;
});

appendProducts(data);
}



function filter(){
  let query = document.getElementById("query").value;
     let copy_data =data;
    copy_data = copy_data.filter(function(el) {
      return el.title.toLowerCase().includes(query);
});

appendProducts(copy_data);
}
