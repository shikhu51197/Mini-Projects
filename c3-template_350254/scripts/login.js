

 document.querySelector("form").addEventListener("submit" ,mysubmit)

 let signuparr=JSON.parse(localStorage.getItem("user"));
  let loginarr=JSON.parse(localStorage.getItem("login")) || [];
 let formtag= document.querySelector("form")

 function mysubmit(){

    event.preventDefault()
 
    let email=formtag.email.value;
    let pass=formtag.password.value;

    if(filter(email,pass)==true){
        alert("Login Successfull")
        let l=new user()
        l.login(email,pass)
      loginarr.push(l)

      localStorage.setItem("login",JSON.stringify(loginarr))
        window.location.href="index.html"
    } else{
        alert("Wrong Credentials")
    }
}


function filter(email,pass){
    let filtered=signuparr.filter(function(el){
        return el.email==email && el.password==pass
         
    })
    if(filtered.length>0){
        return true;
      
    } else{
        return false;
    }
}

class user{
    constructor(){

    }

    login(email,pass){
      this.email=email;
      this.password=pass;
    }
}