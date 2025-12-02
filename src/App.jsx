import React from "react";
import Header from "./Layout/Header";
import "./App.css";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <Meals />
    </>
  );
}

export default App;
