


// let  p = new Promise((reslove , reject)=>{
//     reslove("payment")
// })
// console.log(p)

// p.then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

let container = document.getElementById("container")

let payment = (event) => {
    event.preventDefault();
    let phonenumber = document.getElementById('phonenumber').value
    let amount = document.getElementById("amount").value


    let p = new Promise((res , rej)=> {

        setInterval(() => {
            if(amount>0){
                res("payment Successfully")
            }else if (amount<=0){
                rej("Payment Failed")
            }
        }, 4000);

    })

    p.then((res)=>{
        let img = document.createElement("img")
        img.src = image[0]
        container.innerHTML = null;
        alert("payment success!")
        container.append(img)
    }).catch((rej) =>{
        let img = document.createElement("img")
        img.src = image[1]
        container.innerHTML = null;
        alert("Payment Failed !")
        container.append(img);
    })
}