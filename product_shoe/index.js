let url = "https://shielded-woodland-61460.herokuapp.com/user"

// window.addEventListener('load',() => {
//     getData()
//  })
 


let getData = async ()=>{ 
 
    let res = await fetch(url) 
    data = await res.json() 
    append(data)
    console.log("data: ", data); 
 
 
} 
getData()  //all data came on DOM '


 let addProduct= async()=>{ 
    let name = document.getElementById('name').value 
    let price = +document.getElementById('price').value 
    console.log("price: ", typeof price); 
    let description = document.getElementById('description').value 
    let delivery = document.getElementById('delivery').value 
    let image = document.getElementById('image').value 
 
    let data = { 
        name, 
        price, 
        description, 
        delivery, 
        image 
    } 
 
    document.getElementById('name').value=null; 
    document.getElementById('price').value =null; 
    document.getElementById('description').value=null; 
    document.getElementById('delivery').value=null; 
    document.getElementById('image').value=null; 
 
    let res = await fetch(url,{ 
 
        method:"POST",    //When we add new data 
        body:JSON.stringify(data), 
        headers:{ 
            "Content-Type":"application/json", 
        }
    }) 
  
    res = await res.json()   //new data 
    console.log(res); 
    
    getData()   //after adding the product no need to refresh the page so we are calling the function here 
 } 
 
 
 //appending data 
 let append=(data)=>{ 
    let container = document.getElementById('container'); 
    container.innerHTML = null; 
    data.forEach(({name,price,description,delivery,image,id}) => { 
         
        let div = document.createElement('div'); 
        div.setAttribute("class","item") 
        let name1 = document.createElement('h3'); 
        name1.innerText = `name:- ${name}`; 
        let price1 = document.createElement('h3'); 
        price1.innerText = `price:- ${price}`; 
        price1.setAttribute("class" ,"product_price")
        let description1 = document.createElement('p'); 
        description1.innerText = `description:- ${description}`; 
        let delivery1 = document.createElement('p'); 
        delivery1.innerText = `delivery by;-${delivery}`; 
        delivery1.setAttribute("class","product_delivery")
        let image1 = document.createElement('img'); 
        image1.src = image; 
 
        let remove_btn = document.createElement('button'); 
        remove_btn.innerText = "Remove" 
        remove_btn.setAttribute("class","remove_item"); 
        remove_btn.onclick=()=>{ 
            Removefunc(id) 
        } 
 
        let update_price = document.createElement('button'); 
        update_price.innerText = "Update Price" 
        update_price.setAttribute("class","update_price"); 
        update_price.onclick=()=>{ 
            Updatefunc(id) 
        } 
 
        div.append(image1,name1,price1,description1,delivery1,remove_btn,update_price) 
        container.append(div) 
         
    }); 
 
 } 
 
 // remove data
let Removefunc = async(id)=>{ 
    let res = await fetch(`${url}/${id}`,{ 
         
        method:"DELETE" 
    }) 
    // console.log(res,id); 
    getData() 
} 
 
 
 //update data
let Updatefunc =async(id)=>{ 
   let newPrice = +window.prompt("Update Price") 
   let data = {price:newPrice} 
   console.log("price: ",  typeof price); 
    await fetch(`${url}/${id}`,{ 
        method:"PATCH",     //When we update data 
        body:JSON.stringify(data), 
        headers:{ 
            "Content-Type":"application/json", 
        } 
    }) 
    getData() 
} 
 
//sorting  by lh and hl
 
let sortLH = async()=>{ 
 
    let res = await fetch(`${url}/?_sort=price&_order=asc`); 
    res = await res.json() 
    console.log(res); 
    append(res) 
} 
 
let sortHL = async()=>{ 
    let res = await fetch(`${url}/?_sort=price&_order=desc`); 
    res = await res.json() 
    console.log(res); 
    append(res) 
    
} 
 
 
//Filter  gte an lte
 
let greaterThan=async()=>{ 
    let res = await fetch(`${url}/?price_gte=4001`) 
    res = await res.json() 
    console.log(res); 
    append(res) 
} 
 
let lessThan= async()=>{ 
    let res = await fetch(`${url}/?price_lte=4000`) 
    res = await res.json() 
    console.log(res); 
    append(res) 
}