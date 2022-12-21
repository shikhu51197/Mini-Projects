

document.getElementById("login").addEventListener("click" ,login)

async  function login(){
    let user_data = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
  
    user_data = JSON.stringify(user_data);
  
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: user_data,
  
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    res = await res.json();
  
    let username = document.getElementById('username').value;
    getdata(username, res.token);
    console.log(res);
    if(res.error == false){
      alert('Login Successful')
      window.location.href="admin.html"
  }else {
      alert('Login Failed')
  }
  };
  
  
  
  let getdata = async (username, token) => {
      console.log("here");
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    res = await res.json();
    console.log(res);
 

}
