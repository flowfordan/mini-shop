import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import withBookstoreService from "../HOC/withBookstoreService";
import styles from './App.module.css';
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";

function App() {

  const [count, setCount] = useState(0)

  

  return (
    <Routes>
    {/* <div>
          Zdarova

          <div>
          <button
          onClick={() => {setCount(count + 1)}}>+</button>
          <button
          onClick={() => {setCount(count - 1)}}>-</button>
          </div>
          <div>{count}</div>

        </div> */}

      <Route path="*" element={<HomePage />}/>
      <Route path="/card" element={<CartPage />}/>
    

    </Routes>
    
  );
}

export default App;
