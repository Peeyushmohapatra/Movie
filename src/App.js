import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Component/Recipe/Recipe";

function App() {
  const [first, setfirst] = useState("");
  const [button, updateButton] = useState(false);
  const [data, updateData] = useState("");

  useEffect(() => {
    getData(first);
  }, [button]);

  async function getData(data) {
    const fetchedData = await fetch(
      `https://www.edamam.com/api/recipes/v2?type=public&q=${data}&app_id=28bede44&app_key=582edc1a66fc03ad4cc37a25e4e10540`
    );
    const toText = await fetchedData.text();
    const toJson = JSON.parse(toText);
    // console.log(toJson);
    updateData(toJson.hits);
    // console.log(toJson.hits[0].recipe.image);
  }

  
  return (
    <div className="App">
      <h1 style={{textAlign:"center",color:"rgb(255, 204, 194)"}}>Find Something To Cook!!!!</h1>
      <div className="inputContainer">
      <input className="input"
        onChange={(e) => {
          setfirst(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          if(first === ""){
            alert("Box should contains some data")
          }
          updateButton(!button);
        }}
      >
        ClickMe
      </button>
      </div>
      
      
      <Recipe data={data}/>
    </div>
  );
}

export default App;
