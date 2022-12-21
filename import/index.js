
import { navbar , footer } from "./components/navbar.js";
import {jeans , tshirt } from "./components/data.js";


console.log(jeans)
console.log(tshirt)

document.getElementById("navbar").innerHTML = navbar(),
document.getElementById("footer").innerHTML = footer()