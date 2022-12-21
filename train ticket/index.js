

// Mimic a ticket booking system

let container = document.getElementById("container")
let id ;
let seats = 100;
let waiting =106;


 id = setInterval(()=> {
    waiting--;
    console.log(waiting);
}, 7000);

//if booking a ticket 111


let submit = (event) => {
     event.preventDefault();
    let name = document.getElementById('name').value;
    let phonenumber = document.getElementById('phonenumber').value;
    let PNRnumber = document.getElementById('PNRnumber').value;
    let trainnumber = document.getElementById('trainnumber').value;
    let trainname = document.getElementById('trainname').value;
    let birthnumber = document.getElementById('birthnumber').value;
    waiting++;

    let p = new Promise((res , rej) => {
        if(waiting>=seats){
            console.log("Booking not confirmed")
            alert("Not confirmed")
        }

         
        let div1 =  document.createElement('div')

        let name123 = document.createElement('h1')
        name.innerText = `Passanger name :-${name}`;

        let phonenumber123 = document.createElement('h3')
        phonenumber.innerText = `Passanger phonenumber :-${phonenumber}`;

        let PNRnumber123 = document.createElement('h4')
        PNRnumber.innerText = `Passanger PNRnumber :-${PNRnumber}`;

        let trainnumber123 = document.createElement("h5")
        trainnumber.innerText = `Passanger trainnumber :-${trainnumber}`;

        let trainname123 = document.createElement('h6')
        trainname.innerText = `Passanger trainname :-${trainname}`;

        let birthnumber123 = document.createElement('p')
        birthnumber.innerText = `Passenger brithnumber :-${birthnumber}`;


        div1.append(name123,phonenumber123,PNRnumber123,trainnumber123,trainname123,birthnumber123)
        container.append(div1)

        
          setInterval(() => {
            if(waiting == seats){
                res("Booked")
            }
        })
    });



// handle the promise


    p.then((res)=>{
        clearInterval((id))
        alert(`${name} , Your Ticket is ${res}`)
        container.innerHTML = null;
        let div1 =  document.createElement('div')

        let name123 = document.createElement('h1')
        name.innerText = `Passanger name :-${name}`;

        let phonenumber123 = document.createElement('h3')
        phonenumber.innerText = `Passanger phonenumber :-${phonenumber}`;

        let PNRnumber123 = document.createElement('h4')
        PNRnumber.innerText = `Passanger PNRnumber :-${PNRnumber}`;

        let trainnumber123 = document.createElement("h5")
        trainnumber.innerText = `Passanger trainnumber :-${trainnumber}`;

        let trainname123 = document.createElement('h6')
        trainname.innerText = `Passanger trainname :-${trainname}`;

        let birthnumber123 = document.createElement('p')
        birthnumber.innerText = `Passenger brithnumber :-${birthnumber}`;


        div1.append(name123,phonenumber123,PNRnumber123,trainnumber123,trainname123,birthnumber123)
        container.append(div1)

    }).catch((err)=>{
        console.log("Booking pending")
    });
}




// Temlate Literal

//seat = 100 
// waiting = 111 // 110 109 108 107 106 105 104 103 102 101  100

// ticket number 
// pnr 
// train number 
// train name 
// birth number 
// rac 
