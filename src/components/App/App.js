import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {

  return (
    
    <div className={styles.wrapper}>
      <Header className={styles.header} />

      <div className={styles.body}>
        <Routes>

        <Route path="/page/*" element={<HomePage />}/>
        <Route path="/page/:pageNum" element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        
        </Routes>
      </div>

      <Footer className={styles.footer} />

    </div>
  );
}

export default App;
