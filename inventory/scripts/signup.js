
let add = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;




let  user = new usersignup (name, email,password);
console.log(user)


let 

localStorage.setItem("signup" , JSON.stringify(user))


window.location.href ="login.html"


}



function usersignup(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}


let Signup = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

}