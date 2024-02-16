import { useRef, useState } from "react";
import Logo from '/images/fountain logo.jpeg'

export default function Navbar(props){
    const homeRef = props.homeRef;
    const aboutRef = props.aboutRef;
    const serviceRef = props.serviceRef;
    const contactRef = props.contactRef;
    const bookRef = props.bookRef;

    const [activeItem, setActiveItem] = useState(null);

    function NavigateTo(ref, itemName) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        close();
        setActiveItem(itemName);
      }

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
                <a href="#home" onClick={() => NavigateTo(homeRef, "home")}>
                    <img src={Logo} alt="" className="logo-pic"/>
                </a>
                </div>
                <div className="logo-name">
                    <p>Fountain Shipping <span className="logo-span">Services  ltd.</span></p>
                </div>
            </div>
            <div className="menu open" ref={navMenu}>
                <ul>
                    <li><a href="#home" onClick={() => NavigateTo(homeRef, "home")} className={activeItem === "home" ? "active" : ""}>Home</a></li>
                    <li><a href="#about" onClick={() => NavigateTo(aboutRef, "about")} className={activeItem === "about" ? "active" : ""}>About</a></li>
                    <li><a href="#service" onClick={() => NavigateTo(serviceRef, "service")} className={activeItem === "service" ? "active" : ""}>Services</a></li>
                    <li><a href="#contact" onClick={() => NavigateTo(contactRef, "contact")} className={activeItem === "contact" ? "active" : ""}>Contact</a></li>
                </ul>
                <h2 className="close" onClick={close}><i className="fa-solid fa-xmark"></i></h2>
            </div>
            <h2 className="toggle" onClick={handbugger}><i className="fa-solid fa-bars"></i></h2>

        </div>
    )
}