
const url = "https://intense-hamlet-90313.herokuapp.com/menu"


let getData =  async() => {

    let res = await fetch(url)
    res =  await res.json()
    render(res)
    console.log(res)
 }

 getData()









// append data tothe container / display data
let container = document.getElementById("container")

let render = (data)=>{
    container.innerHTML = null;
    data.forEach(({ image ,name , price ,category ,sold , id })=>{
if(category === "t-shirts"){
        let div = document.createElement("div")
         div.setAttribute("class" , "store")


         let img= document .createElement("img")
         img.src = image;

         let h3 = document.createElement("h3")
         h3.innerText = name;

         let h4 = document.createElement("h4")
          h4.innerText = price;
 
          let p2 = document.createElement("p")
           p2.innerText = sold;

           let p3= document.createElement("p")
           p3.innerText = id;



            div.append( img ,h3 , h4 ,p2, p3)
            container.append(div)
}else{

}
    })
}

render()