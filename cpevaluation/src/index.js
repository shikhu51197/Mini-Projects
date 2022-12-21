let data = [];
let fecthCountries = async () => {
  // make an API'
  try{
  let  res = await fetch(`https://restcountries.com/v3.1/all`)
  let data = await res.json()
  renderData(data)
  // console.log(data)
  return data;
 
  }catch(err){
    return err;
  }
};
 fecthCountries()


let countryCard = (el) => {
  let cardDiv = document.createElement("div");
  // create a div element for each card and append the details
//   Note : use textContent instead of inneText while appending the DOM elements
   let img = document.createElement("img")
   img.src = el.flags.png;

 let  h2= document.createElement("h2")
   h2.textContent = `name :- ${el.name.common}`;
   
   let  h3= document.createElement("h3")
   h3.textContent = `population :- ${el.population}`;

   let h4 = document.createElement("h4")
   h4.textContent = `region : - ${el.region}`;

   let p = document.createElement("p")
   p.textContent = `capital :- ${el.capital}`;

   cardDiv.append(img ,h2, h3 ,h4, p)

  return cardDiv;
};



let renderData = (data) => {
  let container = document.getElementById("all_countries");
  container.innerHTML = null;
    data.forEach((ele)=>{
     let country =countryCard(ele)
   
      container.append(country)
    })  


  // loop through the cards and append to main container
  return container;
};

let sortLogic = (order, data) => {
  // handle sort logic here and return sorted data
  // it expectes two arguments type of sort (asc or desc) and data

  if(order == ""){
    renderData(data)
  } else if (order =="asc"){
    data.sort((a,b)=>{
      return (+a.population) - (+b.population)
    })
    renderData(data)
  } else if (order =="desc"){
    data.sort((a,b)=>{
      return (+b.population) - (+a.population)
    })
    renderData(data)

  }
  return data;
};


let filterByRegionLogic = async(data, regionName) => {
  // handle filter logic here and return filtered data
  // it expectes two arguments data and region
  // return filteredData
  regionName=  document.getElementById('filter_region').value
let url =`https://restcountries.com/v3.1/all`
let res = await fetch(`${url}?region=${regionName}`)
res = await res.json()
console.log(`${url}?region=${regionName}`);
data = res

// console.log(data[0])
renderData(data)
return data


};
let handleSortAndFilter = () => {
// handle sortLogic and filterByLogic here 
};


window.onload = function () {
  // onload fetch Countries from the `https://restcountries.com/v3.1/all`
  // add change event listeners to sort and filter

  fecthCountries()
  let sort = document.getElementById("sort_population")
  sort.addEventListener("change" ,()=> {
    let order = sort.value
    console.log(order)
    sortLogic(order , data)
    
  })



};

if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}
