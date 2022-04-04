import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import withBookstoreService from "../HOC/withBookstoreService";
import styles from './App.module.css';
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";

function App() {

  //header

  return (
    
    <div className={styles.wrapper}>
    <header className={styles.header}>
      Header
    </header>
    
    <body className={styles.body}>
    <Routes>

      
    
      <Route path="*" element={<HomePage />}/>
      <Route path="/card" element={<CartPage />}/>
    
    </Routes>
    </body>

    <footer className={styles.footer}>
      Footer
    </footer>

    </div>
    
    
  );
}

export default App;
