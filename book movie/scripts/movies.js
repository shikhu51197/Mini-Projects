// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wallet= JSON.parse(localStorage.getItem("amount")) || 0;

let walletshow=document.getElementById("wallet");
walletshow.innerText= wallet;

async function getdata(){
    try{
        let search= document.getElementById("search").value;
        let res= await fetch(`https://www.omdbapi.com/?apikey=382c5b8e&s=${search}`);
        let {Search}= await res.json();
        if(Search!==undefined){
            display(Search);
            console.log('Search:', Search);
        }
    }
    catch(err){
        console.log('err:', err);
    }
}

function display(data){
    let container= document.getElementById("movies");
    container.innerHTML="";
    data.forEach((el) =>{
        let div= document.createElement("div");
        div.setAttribute= ('class', 'movie_tab');
        let img= document.createElement("img");
        let title= document.createElement("h3");

        img.src= el.Poster;
        title.innerText= el.Title;

        let btn= document.createElement("button");
        btn.innerText= "book now";
        btn.setAttribute= ('class', 'book_now');
        btn.addEventListener("click", function(){
            return bookfunc(el);
        })

        div.append(img, title, btn);
        container.append(div);
    })
}

 function bookfunc(el){
    let data= JSON.parse(localStorage.getItem("movie")) || {};
    data= el;
    localStorage.setItem("movie", JSON.stringify(data));
    window.location.assign("./checkout.html");
 }


async function main(){
    let data= await getdata();
}

let id;
function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }
    id= setTimeout(function(){
        func();
    }, delay)
}