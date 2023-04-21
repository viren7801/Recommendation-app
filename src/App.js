import "./styles.css";
import { useState } from "react";

const foodDb = {
  Indian: [
    { name: "Dhokla", rating: "7/10" },
    { name: "Vadapav", rating: "9/10" },
    { name: "Biryani", rating: "8/10" }
  ],

  Italian: [
    { name: "Pizza", rating: "6/10" },
    { name: "Pasta", rating: "10/10" },
    { name: "Lasagna", rating: "9/10" }
  ],

  Mexican: [
    { name: "Tacos", rating: "8/10" },
    { name: "Burritos", rating: "6/10" },
    { name: "Quesadilla", rating: "6/10" }
  ]
};

export default function App() {
  const [selectedFoodType, setFoodType] = useState("Indian");

  function clickEventHandler(foodType) {
    setFoodType(foodType);
  }

  return (
    <div className="App">
      <h1> Best Foods 😋</h1>

      <small>checkout my favourite multi-cuisine foods</small>

      <div>
        {Object.keys(foodDb).map((foodType) => (
          <button
            onClick={() => clickEventHandler(foodType)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontSize: "13px"
            }}
          >
            {foodType}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDb[selectedFoodType].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
