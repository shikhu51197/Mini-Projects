// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let wallet= JSON.parse(localStorage.getItem("amount")) || 0;

let walletshow=document.getElementById("wallet");
walletshow.innerText= wallet;

let data= JSON.parse(localStorage.getItem("movie")) || {};

display(data);


function display(el){
    let container= document.getElementById("movie");
    container.innerHTML="";
        let div= document.createElement("div");
        div.setAttribute= ('class', 'movie_tab');
        let img= document.createElement("img");
        let title= document.createElement("h3");

        img.src= el.Poster;
        title.innerText= el.Title;


        div.append(title, img);
        container.append(div);
}



let confirm= document.getElementById("confirm");
confirm.addEventListener("click", confirmfunc);

function confirmfunc(){
    let name= document.getElementById("user_name").value;
    let num= document.getElementById("number_of_seats").value;
    if(name==="" || num===""){
        alert("Please fill the details");
    }else{
       if(num*100 <= wallet){
        wallet=wallet-(num*100);
        localStorage.setItem("amount", JSON.stringify(wallet));
        walletshow.innerText= wallet;
        alert("Booking successful!");
       }else{
        alert("Insufficient Balance!");
       }
    }
}