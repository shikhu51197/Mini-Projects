// Write code related to Home page here 

document.querySelector("form").addEventListener("submit",AddStudent)
let studentArr=JSON.parse(localStorage.getItem("task-list"))||[]
console.log(studentArr);


function AddStudent(event){
    event.preventDefault();

    let taskobj={
        name:document.querySelector("#name").value,
        description:document.querySelector("#desc").value,
        startdate:document.querySelector("#start").value,
        enddate:document.querySelector("#end").value,
        priority:document.querySelector("#priority").value,
    
    };

    studentArr.push(taskobj);
    // console.log(taskobj)
    localStorage.setItem("task-list",JSON.stringify(studentArr));
}
