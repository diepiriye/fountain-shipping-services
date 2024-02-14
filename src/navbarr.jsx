import { useRef, useState } from "react";
import Logo from '/images/fountain logo.jpeg'

export default function Navbr(){
    const navMenu = useRef();

  function handbugger() {
    navMenu.current.classList.toggle("show");
  }

  function close() {
    navMenu.current.classList.remove("show");
  }

    return(
        <div className="navbar">
            <div className="logo-flex">
                <div className="logo">
                    <img src={Logo} alt="" className="logo-pic"/>
                </div>
                <div className="logo-name">
                    <p>Fountain Shipping <span className="logo-span">Services  ltd.</span></p>
                </div>
            </div>
            <div className="menu open" ref={navMenu}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <h2 className="close" onClick={close}><i className="fa-solid fa-xmark"></i></h2>
            </div>
            <h2 className="toggle" onClick={handbugger}><i className="fa-solid fa-bars"></i></h2>

        </div>
    )
}