import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from "react-redux";

const Landling = (props) => {

    const securityState = useSelector(state => state.security);

    useEffect(() => {
        if(securityState.validToken){ 
            props.history.push("/dashboard");
        }
        },[securityState.validToken]
    )

    return (
        <div className="landing">
            <div className="light-overlay landing-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center">
                            <h1 className="mb-4">Manages your Solo Projects like a Pro !</h1>
                            <h5 className="mt-2" style={{color: "#ff4500"}}>
                                A lightweight and easy-to-use Scrum tool that helps you manage your Personal Projects
                            </h5>
                            <hr />
                            <Link to="/register" className="btn btn-lg btn-primary me-4 mt-5">
                                Sign Up
                            </Link>
                            <Link to="/login" className="btn btn-lg btn-secondary me-4 mt-5">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landling
