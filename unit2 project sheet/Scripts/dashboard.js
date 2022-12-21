// Write code related to dashboard page here
 let totalstudent = document.getElementById('task-count');
let StudentArr = JSON.parse(localStorage.getItem("task-list"))||[];
console.log(StudentArr)

let prioritydata= JSON.parse(localStorage.getItem("priority-list"))||[];

displayTable(StudentArr)

document.querySelector("#filter").addEventListener("change",handlefilter)

function handelFilter() {
  let selecter = document.querySelector("#filter").value; 
   console.log(selecter)
   let filter = prioritydata.filter(function(e){
    return e.priority == selecter;
   })
   display(filter)
  
}



function displayTable(Data) {
  displayTable.innerHTMl =null
  let total=0
  Data.forEach(function(elem,index){
      total+=Number(total++);
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
    th5.addEventListener("click",function(){
        priorityFunc(elem)
    });
    tr.append(th1,th2,th3,th4,th5,th6);
    document.querySelector("tbody").append(tr);
   totalstudent.innerText = total;
  })
   console.log(StudentArr)
} 
function  priorityFunc(tr){
   
  prioritydata.push(tr)
  localStorage.setItem("priority-list",JSON.stringify(prioritydata))
}