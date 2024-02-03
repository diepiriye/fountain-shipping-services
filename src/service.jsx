import Picture from '/images/spa-slider22.webp'

export default function Services(){
    return(
        <div className="services-container">
            <div className="service-tittle">
                <h2>Our Services</h2>
            </div>
            <div className="services">
                <div className="service-image">
                    <img src={Picture} alt="" className="service-pic" />
                </div>
                <div className="service-writeup">
                   <h2>Ship Management</h2> 
                   <p>We have the professional competence in handling and managing vessels on-behalf of our principals and our own vessels.</p>
                   <p>With skilled hands both on shore and on board, we are committed to deliver the best ship management experience.</p>
                </div>
            </div>
            <div className="services">
                <div className="service-writeup">
                   <h2>Freight Management</h2> 
                   <p>Our freight team is very experienced in handling any shape, size and weight of cargo to and from any where in the world.</p>
                   <p>Our corverage extends to 180 countries.</p>
                </div>
                <div className="service-image">
                    <img src={Picture} alt="" className="service-pic" />
                </div>
            </div>
            <div className="services">
                <div className="service-image">
                    <img src={Picture} alt="" className="service-pic" />
                </div>
                <div className="service-writeup">
                   <h2>Maritime Equipment Leasing</h2> 
                   <p>We lease out maritime equipment like fenders, hoses, tug boats, service boats, etc. to our esteemed clients</p>
                </div>
            </div>
            <div className="services">
                <div className="service-writeup">
                   <h2>Ship Chandelling</h2> 
                   <p>In todays shipping business, you need a trusted ship chandler to provide you with the provisions and supplies you need to keep your vessel on course.</p>
                   <p>We understand that short lead times, affordable and dependable service delivery are crucial for your vessel, and your crew. We have a full range of competitively priced services.</p>
                </div>
                <div className="service-image">
                <img src={Picture} alt="" className="service-pic" />
                </div>
            </div>
            <div className="services">
                <div className="service-image">
                    <img src={Picture} alt="" className="service-pic" />
                </div>
                <div className="service-writeup">
                   <h2>Cash TO Master</h2> 
                   <p>We represent ship owners in supplying all ship masters' needs especially transferring cash to master.</p>
                </div>
            </div>
            <div className="services">
                <div className="service-writeup">
                   <h2>Shiping and Market Intelligence</h2> 
                   <p>Fountain Shipping Services assists her clients in gathering relevant shipping information within the ports to enhance effective decision making.</p>
                </div>
                <div className="service-image">
                    <img src={Picture} alt="" className="service-pic" />
                </div>
            </div>
            <div className="services">
                <div className="service-image">
                    <img src={Picture} alt="" className="service-pic" />
                </div>
                <div className="service-writeup">
                   <h2>S.T.S Operation</h2> 
                   <p>We provide logistics and maritime equipment for safe ship-to-ship cargo transfer.</p>
                </div>
            </div>
            <div className="services">
                <div className="service-writeup">
                   <h2>Slops Removal</h2> 
                   <p>Fountain Shipping Services has the professional competence in ship management, slops and freight.</p>
                </div>
                <div className="service-image">
                    <img src={Picture} alt="" className="service-pic" />
                </div>
            </div>
        </div>
    )
}