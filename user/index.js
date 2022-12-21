
// server url
const url = "https://intense-hamlet-90313.herokuapp.com/store"

window.addEventListener('load',() => {
   getData()
})


// fetch data

let getData =  async() => {

   let res = await fetch(url)
   res =  await res.json()

   console.log(res)
}

getData()

// create user data
let addUser = async () => {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let batch = document.getElementById("batch").value;
    let course = document.getElementById("course").value;
    let mobileno = document.getElementById("mobileno").value;
    let score = document.getElementById("score").value;
    let userdata = {
        name,
        age, 
        batch ,
        course,
        mobileno,
        score,
       pass: false,
 
    };
 
console.log(userdata)

    let res = await fetch(url,{
        method : "POST",
        body : JSON.stringify(userdata),
        headers : {
            "Content-Type": "application/json",
        }
    })
 
    console.log(res)
 }
 getData()
 
