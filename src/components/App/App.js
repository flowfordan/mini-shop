import React from "react";
import { useState } from "react";
import withBookstoreService from "../HOC/withBookstoreService";
import styles from './App.module.css';

function App({bookstoreService}) {

  const [count, setCount] = useState(0)

  console.log(bookstoreService.getBooks())

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

export default withBookstoreService()(App) ;
