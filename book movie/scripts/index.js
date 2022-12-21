// Store the wallet amount to your local storage with key "amount"
let wallet= document.getElementById("wallet").innerText;
wallet= JSON.parse(localStorage.getItem("amount")) || 0;

let walletshow=document.getElementById("wallet");
walletshow.innerText= wallet;


let addamount= document.getElementById("add_to_wallet");
addamount.addEventListener("click", display);

 function display(){
    let amount= document.getElementById("amount").value;
    if(amount!==""){
        wallet= wallet+(+amount);
        localStorage.setItem("amount", JSON.stringify(wallet));
        walletshow.innerText= wallet;
    }
 }


//  let book_movies= document.getElementById("book_movies");
//  book_movies.addEventListener("click", function(){
//     window.location.assign("./movies.html");
//  })