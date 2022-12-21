import NonFiction from "./components/NonFiction";
import Fiction from "./components/Fiction";
import React from "react";


function App() {
  const[text , setText]=React.useState(true)
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={()=>setText(!text)}>{text?"Show Non-Fiction Books" : "Show Fiction Books"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
         {text ? <Fiction/> :<NonFiction/>}
         
      </div>
      
    </div>
  );
}

export default App;