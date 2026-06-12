import { Link } from "react-router-dom";
import figuraMusculosa from "../../assets/Figura_Musculosa.webp";
import "./Landing.css";

function Landing() {
    return (
        <div className="landing-screen">
            <div className="landing-card">
                <div className="landing-image-wrapper">
                    <img 
                        src={figuraMusculosa} 
                        alt="Estatua Olímpica" 
                        className="landing-image" 
                    />
                    <div className="landing-overlay-top"></div>
                    <div className="landing-overlay-bottom"></div>
                </div>

                <div className="landing-content">
                    <div className="landing-title-container">
                        <h1 className="landing-title">EL CAMBIO</h1>
                        <p className="landing-subtitle">empieza ahora</p>
                    </div>

                    <div className="landing-action">
                        <Link className="landing-btn" to="/dashboard">
                            <span>COMENZAR MI ASCENSO</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;