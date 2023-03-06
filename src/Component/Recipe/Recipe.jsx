import React from "react";
import "./recipe.css";

const Recipe = ({ data }) => {
  // console.log(data);
  return (
    <div className="container">
      {data &&
        data.map((ele) => {
          return (
            <div className="recipeContainer">
              <img src={ele.recipe.image} alt="" />
              <div className="ingredients">
                <h4 style={{color:"orange"}}>Ingredients:</h4>

                {console.log(ele.recipe)}
                {ele.recipe.ingredients.map((val) => {
                  return (
                    <div className="ingredientsContainer">
                      <h6 style={{ color: "white",textAlign:"center" }}>{val.text}</h6>
                    </div>
                  );
                })}
              </div>
              <p style={{ color: "white",textAlign:"center"}}>
                 Dishtype: 
                <span> {ele.recipe.dishType[0].toUpperCase()}</span>{" "}
              </p>
              <p style={{color:"white",textAlign:"center"}}>
                Cuisine Type:
              <span> {ele.recipe.cuisineType[0].toUpperCase()}</span>
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Recipe;
