
let submitfunc = () =>{

    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
   
    if(name && number != null){
        alert(`${name} order Placed`)
    }
}