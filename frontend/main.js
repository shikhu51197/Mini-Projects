// server url
 const url = "https://flipkartinventoryserver.onrender.com/menu"

 window.addEventListener('load',() => {
    getData()
})


// fetch data
let page = 1 ;
 let getData =  async() => {

    let res = await fetch(`${url}?_limit=4&_page=${page}`)
    res =  await res.json()
    render(res)
    console.log(res)
 }

 getData()

 
// create product data
 let submit = async () => {
    let name = document.getElementById('product').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById("category").value;
    let image = document.getElementById("image").value;
    let product = {
        name,
        price,
        image,
        category,
        sold: false,

    };


    let res = await fetch(url,{
        method : "POST",
        body : JSON.stringify(product),
        headers : {
            "Content-Type": "application/json",
        }
    })

    // console.log(res)
}
getData()


// append data tothe container / display data
let container = document.getElementById("container")

let render = (data)=>{
    container.innerHTML = null;
    data.forEach(({ image ,name , price ,category ,sold , id })=>{

        let div = document.createElement("div")
         div.setAttribute("class" , "store")


         let img= document .createElement("img")
         img.src = image;

         let h3 = document.createElement("h3")
         h3.innerText = name;

         let h4 = document.createElement("h4")
          h4.innerText = price;

          let p1 = document.createElement("p")
          p1.innerText = category;
 
          let p2 = document.createElement("p")
           p2.innerText = sold;

           let p3= document.createElement("p")
           p3.innerText = id;

           let toggle_btn = document.createElement("button")
            toggle_btn.innerText = "Toggle"
            toggle_btn.onclick = () => {
                toggle(id);
            }

            let remove_btn = document.createElement("button")
           remove_btn.innerText = "Remove"
            remove_btn.onclick = () => {
                remove(id);
            }

            let update_btn = document.createElement("button")
           update_btn.innerText = "Update price"
            update_btn.onclick = () => {
               update(id);
            }


            div.append( img ,h3 , h4 ,p1,p2, p3 , remove_btn, toggle_btn ,update_btn)
            container.append(div)
    })
}


// toggle status true/false

let toggle = async (id) => {
    let item = await fetch (`${url}/${id}`)
    item = await item.json()
    // console.log(item)
    let data = {sold: !item.sold}
    let res = await fetch (`${url}/${id}`,{
        method: "PATCH",
        body : JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
   
    getData();
};

// remove data from display and dom also
let remove = async (id) => {
    let res = await fetch(`${url}/${id}`,{
    method:"DELETE"
});
getData()

}

// update  price data

let update = async (id)=> {
    const newPrice = window.prompt("Enter the new price")
    let data = {price :newPrice}

    await fetch (`${url}/${id}`,{
        method: "PATCH",
        body : JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
   getData()
}

// sort data  by sortlh / sorthl

let sortlh = async () => {
    let res = await fetch(`${url}?_sort=price&_order=asc`)
    res = await res.json()
    console.log(res)
    render(res)
}

let sorthl = async () => {
    let res = await fetch(`${url}?_sort=price&_order=desc`)
    res = await res.json()
    console.log(res)
    render(res)
}



// filter data 

let filter = async ()=> {

    let res = await fetch(`${url}?price_gte=2500&price_lte=3000&_page=1&_limit=4`)
    res = await res.json()
    console.log(res)
    render(res)
}







// pagination

let next = async () => {
if(page===4){
    return;
}
console.log(page)
    page++
    getData()
}


let prev = async () => {
    if(page===0){
        return;
    }
    
    page--;
    getData()
}
