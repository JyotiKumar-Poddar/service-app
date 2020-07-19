import React from 'react'
import { NavLink } from 'react-bootstrap';

const Header = () => {
    return <>
        <nav>
            <div>
                <NavLink className="navbar-brand" href="#">Home</NavLink>
            </div>
        </nav>
    </>
}


export default Header;