"use client";

import Nav from "./components/Nav";
import Header from "./components/Header";
import { useState } from "react";
import { Pizza } from "./Types/Types";

export default function Home() {

  const [ cartQuantity, setCartQuantity ] = useState(0);

  const addToCart = (pizza: Pizza) => {
    setCartQuantity(cartQuantity + 1);
  }

  return (
    <>
      <Nav cartQuantity={cartQuantity} />
      <Header />
    </>
  );
}
