
let joke_container = document.getElementById('joke-container') 


function setJokes(data) {

  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div
  joke_container.innerHTML = null;
  let div = document.createElement('div')
  let p = document.createElement('p')
  p.setAttribute('class','joke-text')
    p.innerText = data.value
    div.append(p)
    joke_container.append(div)
}

let getRandomJoke = async () => {
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure
  try{
    let res = await fetch(`https://api.chucknorris.io/jokes/random`)
    let data = await res.json()
    return data;
   
  }catch(err){
    return "something went wrong"
  }

};
let getJokeByCategory = async (event) => {
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
  try{
    let category_name = document.getElementById('get-category').value;
    let res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category_name}`)
    let data = await res.json()
    return data;
    console.log(data)

  }catch(err){
    return "something went wrong"
  }
};

let main = async ()=>{
  let data = await getRandomJoke()

  setJokes(data)
  console.log(data)
}
let myfun = async ()=>{
  let data = await getJokeByCategory()
  setJokes(data)
}

window.onload = function () {
  // add click event to button
  // add change event to select tag
  document.getElementById('get-category').addEventListener('click',myfun)
  document.getElementById('get-jokes-data').addEventListener('click',main)
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
