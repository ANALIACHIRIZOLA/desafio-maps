import React from "react"
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList"

function App() {
        
  return (
    <div className="App">
      <Navbar/>
      <ItemList greeting={"mensaje de ok"}/>
      </div>
  );
}

export default App;
