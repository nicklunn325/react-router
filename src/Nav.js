import {Link} from 'react-router-dom'
const Nav = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/restaurants">Restaurants</Link>
                </li>
                <li>
                    <Link to="/restaurants/new">New Restaurant</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;