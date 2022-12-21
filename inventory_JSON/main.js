// Use deployed URL.
let url = "https://shielded-woodland-61460.herokuapp.com/product";

// data come from DOM
let getData = async () => {
  let res = await fetch(url);
  data = await res.json();
  console.log(data);
  render(data)
};

getData();

// add data
let addproduct = async () => {
  let name = document.getElementById("name").value;
  let price = +document.getElementById("price").value;
  console.log("price", typeof price);
  let description = document.getElementById("description").value;
  let delivery = document.getElementById("delivery").value;
  let image = document.getElementById("image").value;

  let productdata = {
    name,
    price,
    description,
    delivery,
    image,
  };
  // console.log(productdata)

  document.getElementById("name").value = null;
  document.getElementById("price").value = null;
  document.getElementById("description").value = null;
  document.getElementById("delivery").value = null;
  document.getElementById("image").value = null;

  //post request to add data
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(productdata),
    headers: {
      "Content-Type": "application/json",
    },
  });

  res = await res.json();
  console.log(res);

  getData();
};

//append data

let render = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach(({ name, price, description, delivery, image, id }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");

    let name1 = document.createElement("h3");
    name1.innerText = `name:- ${name}`;

    let price1 = document.createElement("h3");
    price1.innerText = `price:- ${price}`;
    price1.setAttribute("class", "product_price");
    // console.log("price" , typeof price)

    let description1 = document.createElement("p");
    description1.innerText = `description:- ${description}`;

    let delivery1 = document.createElement("p");
    delivery1.innerText = `delivery by:- ${delivery}`;
    delivery1.setAttribute("class", "product_delivery");

    let image1 = document.createElement("img");
    image1.src = image;
// remove
   let remove_btn = document.createElement("button")
remove_btn.innerText = "Remove"
remove_btn.setAttribute("class" ,"remove_item")
remove_btn.onclick = () => {
    removefunc(id)
}

// update 
let update_btn = document.createElement("button")
update_btn.innerText = "update Price"
update_btn.setAttribute("class" ,"update_price")
update_btn.onclick = () => {
    updatefunc(id)
}


    div.append(
      image1,
      name1,
      price1,
      description1,
      delivery1,
      remove_btn,
      update_btn
    );
    container.append(div);
  });
};


//remove data & product // for remove we used delete method

let removefunc = async(id)=> {
    let res = await fetch(`${url}/${id}`,{
        method :"DELETE"
    })

    console.log(res , id)
    getData()
}

//update price data // for update data we used  patch method

let  updatefunc =async(id)=>{
    let newPrice = +window.prompt("Enter new price")
    let value = {price:newPrice}
    // console.log("price:" , typeof price)
 await fetch (`${url}/${id}`,{
  method:"PATCH",

  body:JSON.stringify(value),
  headers:{
    "Content-Type":"application/json",
  }
 })
 getData()

}

//sorting by lh  and hl 

let sortLH = async () => {
    let  res = await fetch (`${url}/?_sort=price&_order=asc`)
    res = await res.json()
    console.log(res)
    render(res)
}


let sortHL = async () => {
    let  res = await fetch (`${url}/?_sort=price&_order=desc`)
    res = await res.json()
    console.log(res)
    render(res)
}



//filter by gte 4000 and lte 4000

let greaterThan = async () => {
    let  res = await fetch (`${url}/?price_gte=4001`)
    res = await res.json()
    console.log(res)
    render(res)
}

let lessThan = async () => {
    let  res = await fetch (`${url}/?price_lte=4000`)
    res = await res.json()
    console.log(res)
    render(res)
}
