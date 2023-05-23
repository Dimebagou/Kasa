import './index.css'
import { Link } from 'react-router-dom'

const index = (props) => {
    const { title, backgroundImage, id } = props
    return (
        <Link to={`/offer/${id}`}>
            <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h4>{title}</h4>
            </div>
        </Link>
    )
}

export default index