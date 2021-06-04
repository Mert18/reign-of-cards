import React from 'react'

import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <div className="header__title__name">
                    <Link to="/">Maths and Cards</Link>
                </div>
            </div>

            <div className="header__links">
                <ul className="header__links__linkgroup">
                    <li><Link to="/numbers">Numbers</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
