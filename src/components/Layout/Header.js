import React from 'react';
import logo from '../../soloScrum.png'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import { logout } from '../../actions/securityActions';

const Header = () => {

    const securityState = useSelector(state => state.security);

    const {validToken, user} = securityState;

    const dispatch = useDispatch();
    const performLogout = () => {
        dispatch(logout());
        window.location.href = "/";
    }

    const userIsAuthenticated = (
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto fw-bold fs-5">
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                        Dashboard
                    </a>
                </li>
            </ul>

            <ul className="navbar-nav ms-auto fw-bold fs-5">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link ">
                        <i className="fas fa-user-circle me-1" />
                        {user.fullName}
                    </Link>
                </li>
                <li className="nav-item" onClick={performLogout}>
                    <Link to="/logout" className="nav-link" >
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    )

    const userIsNotAuthenticated = (
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold fs-5">
                <li className="nav-item">
                    <Link to="/register" className="nav-link ">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link" >
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    )

    let headerLinks;

    if(validToken && user) {
        headerLinks = userIsAuthenticated;
    } else{
        headerLinks = userIsNotAuthenticated;
    }


    return (
        <div className="Header">
            <nav className="navbar navbar-expand-sm navbar-light" style={{background: "#9f77df"}}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} width="70" height="70" alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    {headerLinks}
                </div>
            </nav>
        </div>
    )
}

export default Header
