let url= "https://intense-hamlet-90313.herokuapp.com"
let container  = document.getElementById("container")

let getdata = async () =>{
    let res = await fetch(`${url}/store`)
    res = await res.json();
    render(res)
}
getdata()
let render = (data) =>{
    container.innerHTML=""
    console.log(data)
    data.forEach(({name,price,image,rating,description ,id})=>{

        let div = document.createElement("div")
        let name1 = document.createElement("h1")
        name1.innerText = name;
        let price1 = document.createElement("h2")
        price1.innerText = price;
        let image1 = document.createElement("img")
        image1.src =image;
        let rating1 = document.createElement("p")
       rating1.innerText =rating;
       let description1 = document.createElement("p")
     description1.innerText =description
        let remove_btn = document.createElement("button")
        remove_btn.innerText = "Remove";
        remove_btn.onclick = () =>{
            removefunc(id)
        }

        let update_btn = document.createElement("button")
        update_btn.innerText = "update Name";
        update_btn.onclick = () =>{
            updatefunc(id)
        }

        div.append(image1,name1,price1,rating1,description1 ,remove_btn,update_btn)
        container.append(div)
    })
  
}

let removefunc = async (id) =>{
  let res = await fetch(`${url}/store/${id}`,{
    method: "DELETE",
  })

  getdata()
}

let updatefunc = async (id) =>{

  const newrating =  window.prompt("Enter the new rating");
   let data = {rating:newrating}
    let res = await fetch(`${url}/store/${id}`,{
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    })
 
    getdata()

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
 
    let res = await fetch(`${url}?price_gte=50&price_lte=300&_page=1&_limit=4`)
    res = await res.json()
    console.log(res)
    render(res)
 }