import React from "react";
import { useSelector } from "react-redux";
import css from "./Home.module.css";

export default function Home() {
  const lau = useSelector((state) => state.lenguage);
  console.log(lau);
  return (
    <center>{lau === "ESP" ? <h1>Inicio</h1> : <h1>Home</h1>}</center>
  );
}
