export default function Contact(props){
    const contactRef = props.contactRef
    
    return(
        <div className="contact-container" id="contact" ref={contactRef}>
            <div className="contact-subcon">
                <div className="contact-tittle">
                    <h2>Contact Us</h2>
                </div>
                <div className="contact-flex" data-aos="flip-down">
                    <h2>HEAD OFFICE</h2>
                    <div className="contact-flex-writeup">
                        <p><span className="email-red">Email</span>: <a href="mailto: base@fountainshippingservices.com.ng" target="_blank"> base@fountainshippingservices.com.ng</a></p>
                        <p><span className="email-red">Email</span>: <a href="mailto: opsphc@fountainshippingservices.com.ng" target="_blank">opsphc@fountainshippingservices.com.ng </a></p>
                        <p ><a href="tel:+2348037096830"><span className="email-redd">Telephone:</span> +234 803 709 6830</a></p>
                    </div>
                </div>
                <div className="contact-flex bonny" data-aos="flip-down">
                    <h2>BONNY</h2>
                    <div className="contact-flex-writeup">
                        <p><span className="email-red">Email</span>: <a href="mailto: opsbonny@fountainshippingservices.com.ng" target="_blank">opsbonny@fountainshippingservices.com.ng</a></p>
                    </div>
                </div>
                <div className="contact-flex lagos" data-aos="flip-down">
                    <h2>LAGOS</h2>
                    <div className="contact-flex-writeup">
                        <p><span className="email-red">Email</span>: <a href="mailto: opslag@fountainshippingservices.com.ng" target="_blank">opslag@fountainshippingservices.com.ng</a></p>
                    </div>
                </div>
                <div className="contact-flex warri" data-aos="flip-down">
                    <h2>WARRI</h2>
                    <div className="contact-flex-writeup">
                        <p><span className="email-red">Email</span>: <a href="mailto: opswarri@fountainshippingservices.com.ng" target="_blank">opswarri@fountainshippingservices.com.ng</a></p>
                    </div>
                </div>
                <div className="contact-flex cal" data-aos="flip-down">
                    <h2>CALABAR</h2>
                    <div className="contact-flex-writeup">
                        <p><span className="email-red">Email</span>: <a href="mailto: opscal@fountainshippingservices.com.ng" target="_blank">opscal@fountainshippingservices.com.ng </a></p>
                    </div>
                </div>
            </div>

        </div>
    )
}