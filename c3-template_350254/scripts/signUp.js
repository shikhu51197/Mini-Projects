

document.querySelector("form").addEventListener("submit",mysubmit)

let formtag=document.querySelector("form")
let signuparr=JSON.parse(localStorage.getItem("user")) || [];
function mysubmit(){
   event.preventDefault()
   let name=formtag.name.value;
   let email=formtag.email.value;
   let pass=formtag.password.value;

   let u=new user();
   u.signup(name,email,pass)
   console.log(u);
}

class user{
   constructor(){

   }

   signup(name,email,pass){
      
       let isvalidate=false;

     isvalidate=this.validateusername(name)  && this.validateemail(email) && this.validatepassword(pass) 

       if(isvalidate){
           this.name=name;
           this.email=email;
           this.password=pass
           if(check(email)==true){
               alert("Sign up Successfull!")
           signuparr.push(this)
           localStorage.setItem("user",JSON.stringify(signuparr))
           } else{
             alert("User doesn't exist, Sign Up" )
           }
           
       }
   }
   validateusername(name){
       if(name.length>3){
           return true;
       } else{
           alert("Enter Valid Name")
       }
   }
   validateemail(email){
       if(email.length>6){
 return true
       } else{
           alert("Enter Valid Email id")
       }
   }
   validatepassword(pass){
       if(pass.length>5){
           return true
       } else{
           alert("Minimum 6 character required")
       }
   }
  
   
}

function check(email){
   let filtered=signuparr.filter(function(el){
       return el.email==email;
   })
   if(filtered.length>0){
       return false
   } else{
       return true;
   }
}