// Store the items added to the cart into local-storage with key as cart.

/*
API:- https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1
- Change the page number to implement pagination. (e.g. page=2)
- There are total 4 pages only.
*/


page=1;

let getData = async() =>{
    try{
    let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&&page=${page}`);
     let data = await res.json()
    console.log(data.data)
render(data.data)

}catch(err){
    console.log(err)
}

}

getData()

let  value = JSON.parse(localStorage.getItem("cart")) ||[];
let container = document.getElementById("items")

let render = (data) => {
  container.innerHTML = null;
    data.forEach(({category , title, brand , image , price,id}, index)=>{

        let div = document.createElement("div")
         div.setAttribute("id" , "items")

        let  c = document.createElement("h3")
        c.innerText= category

        let img = document.createElement("img")
        img.src = image
        img.setAttribute("class" , "item")
        img.style.width ="100px"
        img.style.height ="100px"


        let t = document.createElement("p")
        t.innerText = title

        let b = document.createElement("p")
        b.innerText = brand

        let p = document.createElement("p")
        p.innerText = price

        let i = document.createElement("p")
        i.innerText = id

        let btn = document.createElement("button")
        btn.innerText = "Add To Cart"
        btn.setAttribute("class" ,"add_to_cart")
        btn.onclick =() =>{
            addtocart(data, index)
        }

        div.append(c,img,t,b,p,i , btn)
        container.append(div)
    })
}

let count = document.getElementById("cart_count")
let addtocart = (data, index)=>{
    let  value = JSON.parse(localStorage.getItem("cart")) ||[];

    console.log(data[index])
    value.push(data[index])

    console.log(value.length)
    count.innerText = value.length



    localStorage.setItem("cart" , JSON.stringify(value))

}


let next = () =>{
    getData(++page)
}

let prev = () =>{
    if(page>1){
        getData(--page)
    }else if (page==1){
        getData(page)
    }
}