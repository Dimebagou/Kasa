import Header from "../../components/Header"
import { Link } from "react-router-dom"
import './index.css'

const index = () => {
    return (
        <>
            <div className="error">
                <span className="error404">404</span>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Header />
        </>
    )
}

export default index