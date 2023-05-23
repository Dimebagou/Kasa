import './index.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })} className="homeBtn">
                <img src="/img/arrowHome.svg" alt="" />
            </div>
            <Link to="/" onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })}>
                <div className="logo-footer">
                    <img src="/img/footerLOGO.png" alt="logo" />
                </div>
            </Link>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer