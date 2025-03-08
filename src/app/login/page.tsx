"use client"
import clsx from "clsx";
import Image from "next/image";
import "./login_css.css";
import "./resetCss.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./login";

import React, { useState } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
}