import React from "react";
import { useState } from "react";
import styles from './App.module.css';

function App() {

  const [count, setCount] = useState(0)


  return (
    <div>
      Zdarova

      <div>
      <button
      onClick={() => {setCount(count + 1)}}>+</button>
      <button
      onClick={() => {setCount(count - 1)}}>-</button>
      </div>
      <div>{count}</div>

    </div>
  );
}

export default App;
