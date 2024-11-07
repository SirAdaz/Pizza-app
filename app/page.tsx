"use client";

import Nav from "./components/Nav";
import Header from "./components/Header";
import ListPizza from "./components/ListPizza";
import { useState, useEffect } from "react";
import { Pizza } from "./Types/Types";
import { db } from "./db/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";

export default function Home() {

  const [ cartQuantity, setCartQuantity ] = useState(0);
  const [ pizzas, setPizzas ] = useState<Pizza[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pizzasCollection = collection(db, "pizzas");
      const pizzaSnapshot = await getDocs(pizzasCollection);
      const pizzaData = pizzaSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Pizza[];
      setPizzas(pizzaData);
    };
    fetchData();
  }, [])

  const addToCart = (pizza: Pizza) => {
    setCartQuantity(cartQuantity + 1);
  }

  return (
    <>
      <Nav cartQuantity={cartQuantity} />
      <Header />
      <ListPizza  pizzas={pizzas} addToCart={addToCart} />
      <ToastContainer />
      <Footer />
    </>
  );
}
