document.querySelector("form").addEventListener("submit", mysearch);

// Assuming you have an element with id "candy" in your HTML
let candy = document.getElementById("candy");

console.log(candy.innerText);

let formtag = document.querySelector("form");

function mysearch() {
    event.preventDefault();
    let query = document.getElementById("query").value;
    console.log(query);

    // Assuming you want to set the innerText to an empty string
    candy.innerText = "";

    myhotel(query);
}

let sort;

function myhotel(query) {
    fetch(`https://flipkartinventoryserver.onrender.com/hotels?City=${query}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            append(data);
            sort = data;
        });
}

function append(data) {
    let container = document.getElementById("hotels_list");
    container.innerHTML = null;

    data.forEach(function (el) {
        let box = document.createElement("div");
        box.setAttribute("id", "hotel");

        let img = document.createElement("img");
        img.src = el.Images.one;

        let title = document.createElement("h3");
        title.innerText = "Title:-" + el.Title;

        let price = document.createElement("h3");
        price.innerText = "Price Per Room Rs :- " + el.Price;

        let ac = document.createElement("h4");
        ac.innerText = "AC:- " + el.Ac;

        let rating = document.createElement("h4");
        rating.innerText = "Rating:-" + el.Rating;

        let book = document.createElement("button");
        book.innerText = "Book Now";
        book.setAttribute("class", "book");
        book.addEventListener("click", function () {
            mybook(el);
        });

        box.append(img, title, price, ac, rating, book);
        container.append(box);
    });
}

document.getElementById("sort_lth").addEventListener("click", sort1);

function sort1() {
    let x = sort.sort(function (a, b) {
        return a.Price - b.Price;
    });
    append(x);
}

document.getElementById("sort_htl").addEventListener("click", sort2);

function sort2() {
    let y = sort.sort(function (a, b) {
        return b.Price - a.Price;
    });
    append(y);
}

document.getElementById("filter_ac").addEventListener("click", filter1);

function filter1() {
    let f1 = sort.filter(function (el) {
        return el.Ac == true;
    });
    append(f1);
}

document.getElementById("filter_nonac").addEventListener("click", filter2);

function filter2() {
    let f2 = sort.filter(function (el) {
        return el.Ac == false;
    });
    append(f2);
}

function mybook(el) {
    let checkout = [];
    let loginarr = JSON.parse(localStorage.getItem("login"));
    if (loginarr === null) {
        alert("Log In to continue!");
    } else {
        window.location.href = "checkout.html";
        checkout.push(el);
        localStorage.setItem("checkout", JSON.stringify(checkout));
    }
}
