import './AppHeader.scss'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const AppHeader = () => {
    return (
        <div className="app-header flex space-between align-center">
            <Link to="/"> <div className="logo flex  space-between align-center">
                <h1>github</h1>
            </div></Link>
            <ul className="flex clean-list">
                <NavLink exact activeClassName="active" to='/commit'><li>Commits</li></NavLink>
                <NavLink exact activeClassName="active" to='/'> <li>Home</li></NavLink>
            </ul>
        </div>
    );
}
