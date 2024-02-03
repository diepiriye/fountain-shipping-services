import heroPic1 from '/images/spa-slider22.webp'

export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-flex">
                <div className="hero-sub-flex">
                    <img src={heroPic1} alt="" className="hero-picture"/>
                    <div className="hero-writeup">
                        <p>We pride ourselves on providing the best</p>
                        <p>transport & shipping services available </p>
                        <p>all over the world. </p>
                    </div>
                </div>
                <div className="logistic-flex">
                    <h2>LOGISTICS</h2>
                    <h2>PAR EXCELLENCE</h2>
                </div>
            </div>

        </div>
    )
}