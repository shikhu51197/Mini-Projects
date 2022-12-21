



let Login = () => {
    let email = document.getElementById("email").value;
    let password =  document.getElementById("password").value;

let user = new userlogin(email , password);
console.log(user)
   

localStorage.setItem ("users", JSON.stringify(user))

}


function userlogin (email , password){
    this.email = email;
    this.password = password;
}