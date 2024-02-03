import Logo from '/images/logo.jpg'

export default function Navbr(){
    return(
        <div className="navbar">
            <div className="logo-flex">
                <div className="logo">
                    <img src={Logo} alt="" className="logo-pic"/>
                </div>
                <div className="logo-name">
                    <p>FOUNTAIN SHIPPING SERVICES <span className="logo-span">LTD.</span></p>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>

        </div>
    )
}