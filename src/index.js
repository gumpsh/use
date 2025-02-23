import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StarRating from "./components/StarRating";
import "./index.css";

function Test() {
  const [filmRating, setFilmRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} setFilmRating={setFilmRating} />
      <p>This film was rated {filmRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5} messages={["Terrible", "Bad", "OK", "Good", "Amazing"]} defaultRating={3} />
    <StarRating maxRating={3} messages={["Shit", "Ok", "Great"]} color="red" size={48} defaultRating={2} /> */}
    <App />
    {/* <Test /> */}
  </React.StrictMode>
);
