import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/*" element={<Navigate replace to='/page/1' />}/>
          <Route path="/page/*" element={<Navigate replace to='/page/1' />}/>
          <Route path="/page/:pageNum" element={<HomePage />}/>
        </Routes>
      </div>

      <Footer className={styles.footer} />

    </div>
  );
}

export default App;
