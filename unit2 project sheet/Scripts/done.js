// Write code related to Done page here
let StudentAdd= JSON.parse(localStorage.getItem("task-list"))||[];
console.log(StudentAdd)
let Adddata= JSON.parse(localStorage.getItem("Add"))||[];
displayTable(StudentAdd)

function displayTable(StudentAdd) {
    StudentAdd.forEach(function(elem,index){
      
      let tr = document.createElement("tr");
      let th1 = document.createElement("th");
      th1.innerText=elem.name;
      let th2 = document.createElement("th");
      th2.innerText=elem.description;
      let th3 = document.createElement("th");
      th3.innerText=elem.startdate
      let th4 = document.createElement("th");
      th4.innerText=elem.enddate
      let th5 = document.createElement("th");
      th5.innerText=elem.priority
      let th6 = document.createElement("th");
      th6.innerText="Add"
      th6.style.backgroundColor="red"
      th6.addEventListener("click",function(){
          AddFunc(elem,index)
      });
      tr.append(tr,th1,th2,th3,th4,th5,th6);
      document.querySelector("tbody").append(tr);
  
    })
  
}
    function  AddFunc(elem,index){
        AddFunc.push(elem)

    localStorage.setItem("done-list",JSON.stringify(StudentAdd))
  } 