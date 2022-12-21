

// Write code for the Progress page here 
let prioritydata= JSON.parse(localStorage.getItem("priority-list"))||[];
let StudentProgress= JSON.parse(localStorage.getItem("task-list"))||[];
let donearr= JSON.parse(localStorage.getItem("done-data"))||[];
console.log(StudentProgress)
displayTable(StudentProgress)

function displayTable(StudentProgress) {
    StudentProgress.forEach(function(elem,index){
      
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
      th6.innerText="Done";
      th6.addEventListener("click", function(e) {
        done(e)
      });
      tr.append(th1,th2,th3,th4,th5,th6);
      document.querySelector("tbody").append(tr)
    })

}
displayTable(prioritydata)

function done(tr){

  donearr.push(tr)
  localStorage.setItem("done-data",JSON.stringify(donearr))
}