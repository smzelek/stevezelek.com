import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = ({ title }) => {

    return (
        <nav className="navbar  bg-primary">
            <h1>
                {title}
            </h1>
            <ul>
                <li>
                    <Link to='/test'>Test</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )

}
Navbar.defaultProps = {
    title: 'Gravity Well Gadgets'
};
export default Navbar;