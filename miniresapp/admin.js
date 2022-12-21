
let url ="https://intense-hamlet-90313.herokuapp.com"
  let getdata = async () =>{
    let res = await fetch(`${url}`)
    res = await res.json();
}

    let submit =  async() =>{
        let name = document.getElementById('name').value;
        let price = document.getElementById('price').value;
        let rating = document.getElementById('rating').value;
        let description = document.getElementById('description').value;
        let image = document.getElementById('image').value;
      
        let item = {
            id:Date.now(),
            name,
            image,
            price,
            description,
            rating,
        };
     
        let res =  await fetch(`${url}/store`,{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
            },
    
        });
        res = await res.json();
        console.log(res);
    };
    
    
    