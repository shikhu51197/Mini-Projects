


document.getElementById("register").addEventListener("click" ,register)

async function register() {
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;


  let form_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };

  form_data = JSON.stringify(form_data);

  let res = await fetch(
    "https://masai-api-mocker.herokuapp.com/auth/register",
    {
      method: "POST",
      body: form_data,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  res = await res.json();
  console.log(res);


  if(res.error==false && res.message=="Registration Success"){
    alert('Registration Success');
    window.location.href="login.html"
  }else if(res.error==true && res.message=="Registration failed, user already exists"){
    alert('Registration failed, user already exists,please try to login')
    window.location.href="login.html"
  }


};






