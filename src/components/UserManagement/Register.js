import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { createNewUser } from '../../actions/securityActions';
import classNames from 'classnames';

const Register = (props) => {

    const initialUser = {
        username: "",
        fullName: "",
        password: "",
        confirmPassword: ""
    }

    const [user,setUser] = useState(initialUser);

    const securityState = useSelector(state => state.security);

    const errors = useSelector(state => state.errors);

    const dispatch = useDispatch();

    useEffect(() => {
        if(securityState.validToken){ 
            props.history.push("/dashboard");
        }
        },[securityState.validToken]
    )

    const onChange = (event) => {
        setUser({ ...user,[event.currentTarget.name]: event.currentTarget.value });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(createNewUser(user,props.history));
        setUser({});
    }


    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Sign Up</h1>
                        <p className="lead text-center">Create your Account</p>
                        <form onSubmit={onSubmit}>
                            <div className="form-group mb-2">
                                <input type="text" className={classNames("form-control form-control-lg",{
                                    "is-invalid": errors.fullName
                                })} placeholder="Full Name" name="fullName" value={user.fullName} onChange={onChange} />
                                
                                {errors.fullName && (
                                    <div className="invalid-feedback">{errors.fullName}</div>
                                )}
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" className={classNames("form-control form-control-lg",{
                                    "is-invalid": errors.username
                                })} placeholder="Email Address (Username) " name="username" value={user.username} onChange={onChange}/>
                                
                                {errors.username && (
                                    <div className="invalid-feedback">{errors.username}</div>
                                )}
                            </div>
                            <div className="form-group mb-2">
                                <input type="password" className={classNames("form-control form-control-lg",{
                                    "is-invalid": errors.password
                                })} placeholder="Password" name="password" value={user.password} onChange={onChange}/>

                                {errors.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )}
                            </div>
                            <div className="form-group mb-2">
                                <input type="password" className={classNames("form-control form-control-lg",{
                                    "is-invalid": errors.confirmPassword
                                })} placeholder="Confirm Password"
                                    name="confirmPassword" value={user.confirmPassword} onChange={onChange}/>

                                {errors.confirmPassword && (
                                    <div className="invalid-feedback">{errors.confirmPassword}</div>
                                )}
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
