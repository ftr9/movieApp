import { Link } from 'react-router-dom';

import './component.css';

const Navigation = () => {

    return (
        <nav className="sideNav">
            <h2>Ftr9 Movie</h2>
            <ul>
                <li>
                    <Link to="/"><button className="ui inverted teal button">Popular</button></Link>
                </li>

                <li>
                    <Link to="/toprated"><button className="ui inverted purple button">Top rated </button></Link>
                </li>

                <li>
                    <Link to="/upcoming"><button className="ui inverted red button">Upcoming</button></Link>
                </li>

                <li>
                    <Link to="/nowplaying"><button className="ui inverted green button">Playing</button></Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navigation
