import Logo from '../Logo'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav>
      <Link to="/">
      <Logo />
      </Link>
      <div className="menu">
          <Link to="/" onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}>Accueil</Link>
          <Link to="/about">A Propos</Link>
      </div>
    </nav>
  )
}

export default Header