const url = "https://intense-hamlet-90313.herokuapp.com/store"

window.addEventListener('load',() => {
   getData()
})


// fetch data
let page = 1 ;
let getData =  async() => {

   let res = await fetch(`${url}?_limit=5&_page=${page}`)
   res =  await res.json()
   render(res)
   console.log(res)
}

getData()


 
 // append data tothe container / display data
 let container = document.getElementById("container")
 
 let render = (data)=>{
    container.innerHTML = null;
    data.forEach(({name , age , batch , course ,mobileno , score , pass, id })=>{
 
        let div = document.createElement("div")
         div.setAttribute("class" , "store")
 

         let h3 = document.createElement("h3")
         h3.innerText = `name:- ${name}`;
 
         let h4 = document.createElement("h4")
          h4.innerText = `age:- ${age}`;
 
          let p1 = document.createElement("p")
          p1.innerText = `batch:-${batch}`;
 
          let p2 = document.createElement("p")
           p2.innerText = `course:-${course}`;
 
           let p3= document.createElement("p")
           p3.innerText = `id:-${id}`;
           
          let p4 = document.createElement("p")
          p4.innerText = `mobileno:-${mobileno}`;
 
          let p5 = document.createElement("p")
           p5.innerText = `score:-${score}`;
 
           let p6= document.createElement("p")
           p6.innerText = `pass:-${pass}`;
 
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
           update_btn.innerText = "Update Score"
            update_btn.onclick = () => {
               update(id);
            }
 
 
            div.append( h3 , h4 ,p1,p2, p3 , p4 , p5 , p6, remove_btn, toggle_btn ,update_btn)
            container.append(div)
    })
 }
 
 
 // toggle status true/false
 
 let toggle = async (id) => {
    let student = await fetch (`${url}/${id}`)
    student = await student.json()
    // console.log(student)
    let data = {pass: !student.pass}
    let res = await fetch (`${url}/${id}`,{
        method: "PATCH",
        body : JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
   render()
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
    const newScore = window.prompt("Enter the new score")
    let data = {score :newScore}
 
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
    let res = await fetch(`${url}?_sort=age&_order=asc`)
    res = await res.json()
    console.log(res)
    render(res)
 }
 
 let sorthl = async () => {
    let res = await fetch(`${url}?_sort=age&_order=desc`)
    res = await res.json()
    console.log(res)
    render(res)
 }
 
 
 
 // filter data 
 
 let filter = async ()=> {
 
    let res = await fetch(`${url}?course=full stack web development&_page=1&_limit=4`)
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
 
 
  